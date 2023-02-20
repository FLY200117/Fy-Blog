# 用户登录

用户登录可以说是最常见的一种业务了，实际上就是客户端发送请求，告诉服务端我是谁，一般基于用户认证的方式有两种，一种是基于`session`，一种是基于`token`

一般网站的登录功能都是基于Token实现的，token中也有不同的方式，有单token模式，有双token模式

而token也分两种不同的token，Access Token和refresh Token，可以只用accesstoken，也可以两种方式结合使用，`accessToken`用来真正获取权限，而`refreshToken`用来获取`AccessToken`，这就是**双Token模式**





## 双Token

token的目的是为了防止用户信息传递间被劫持，但是如果token没有过期时间或者过期时间很长，那么显然token被劫持还是不安全的，token也失去了意义

但是设置token过期时间过短的方案是会影响到用户体验的，因为过期就意味着需要重新登录，那么什么情况下需要用户重新登录？：

- 用户长时间无操作，也可以定义未不活跃用户，就会被自动踢下，自动重定向到登录页面，超时时间可以自定义设置；
- token失效，通常是双token都失效后，会要求重新登录获取新的双token
- 当检测到有风险的时候，可以要求重新登录，获取token



双token的设计就是当两个token都过期了再要求用户重新登录，对于refreshToken而言只是用来获取accessToken的，所以它不会被频繁请求，它的过期时间会设置的长一些，对于accessToken，它的过期时间非常短，即使被拦截了解密也需要时间，而token本身也很快过期，这样设计提升了token的安全性





## 实现代码

双token案例

前端配置：

```typescript
// 前端配置
// ts文件
// token代表的是AccessToken，refresh_token代表的是refreshToken
// 封装axios
import axios, { AxiosError } from 'axios'
import { getToken, setToken } from './storage'
import history from '@/utils/history'
import store from '@/store'
const baseURL = '×××'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// ◆ 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    const token = getToken().token
    if (token) {
    //  法1：非空断言
      config.headers!.Authorization = `Bearer ${token}`
    //  法2：类型收窄
    //   if (config.headers) {
    //     config.headers.Authorization = `Bearer ${token}`
    //   }
    }
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// ◆ 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    return response
  },
  async function (error) {
    // test
    // console.log(1)
    // console.log(error.response, 'response')

    const err = error as AxiosError
    // console.dir(err, 'error')
    if (err.response?.status === 401) {
      // eslint-disable-next-line no-unused-vars
      const { refresh_token } = getToken()
      // 判断是否有 token
      if (!refresh_token) {
        history.push('/login', { from: history.location.pathname })
        return Promise.reject(error)
      }
      try {
        // 获取新的 token
        const res = await axios.put(baseURL + 'authorizations', null, {
          headers: {
            Authorization: `Bearer ${refresh_token}`
          }
        })
        // 保存新的 token
        const newtokenInfo = { token: res.data.data.token, refresh_token }
        // 存本地
        setToken(newtokenInfo)
        console.log(res, 'refresh_token')
        // 存redux
        store.dispatch({
          type: 'login/token',
          payload: newtokenInfo
        })
        // 重发请求
        return instance(error.config)
      } catch (err) {
        console.log(err)
        history.push({
          pathname: '/login',
          state: { from: history.location.pathname }
        })
        return Promise.reject(error)
      }
    }

    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default instance

```





后端配置

- 请求头中pass用来接收客户端refreshToken，请求头中authorization用来接收客户端accessToken

```js
const router = require("koa-router")();
let accessToken = "init_s_token"; //短token
let refreshToken = "init_l_token"; //长token

/* 5s刷新一次短token */
setInterval(() => {
  accessToken = "s_tk" + Math.random();
}, 5000);

/* 一小时刷新一次长token */
setInterval(() => {
  refreshToken = "l_tk" + Math.random();
}, 600000);

/* 登录接口获取长短token */
router.get("/login", async (ctx) => {
  ctx.body = {
    returncode: 0,
    accessToken,
    refreshToken,
  };
});

/* 获取短token */
router.get("/refresh", async (ctx) => {
  //接收的请求头字段都是小写的
  let { pass } = ctx.headers;
  if (pass !== refreshToken) {
    ctx.body = {
      returncode: 108,
      info: "长token过期，重新登录",
    };
  } else {
    ctx.body = {
      returncode: 0,
      accessToken,
    };
  }
});

/* 获取应用数据1 */
router.get("/getData", async (ctx) => {
  let { authorization } = ctx.headers;
  if (authorization !== accessToken) {
    ctx.body = {
      returncode: 104,
      info: "token过期",
    };
  } else {
    ctx.body = {
      code: 200,
      returncode: 0,
      data: { id: Math.random() },
    };
  }
});

/* 获取应用数据2 */
router.get("/getData2", async (ctx) => {
  let { authorization } = ctx.headers;
  if (authorization !== accessToken) {
    ctx.body = {
      returncode: 104,
      info: "token过期",
    };
  } else {
    ctx.body = {
      code: 200,
      returncode: 0,
      data: { id: Math.random() },
    };
  }
});

module.exports = router;
```


import axios from 'axios'

// import { getToken } from '@/utils/auth'
// import { getObjectInfo } from '@/utils/localstorage'

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL, //'http://localhost/devtec.sinprosasco.api/api',//process.env.VUE_APP_APIURL,'http://api-sinprosasco.devtec-it.com.br/api'
  timeout: 30000
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // var user:UserLoginResponse | null;
    // user = localStorage.getItem("User") != null ? JSON.parse(localStorage.getItem("User") || "{}") : null
    // const loggedUser = user;
    // const token = user?.token;
    // if (loggedUser != null && token != null && loggedUser.token.token == token.token
    //   && loggedUser.token.userId == loggedUser.userId
    //   && token.token != '') {
    //     if(config != null && config.headers != null){
    //       config.headers.token = token.token
    //       config.headers.AccountId = loggedUser.userId
    //     }
    // }

    var LoggedToken = localStorage.getItem("IMB:Token")
    
    if(LoggedToken != null && LoggedToken != "" && config.headers != null){
      config.headers.Authorization = `Bearer ${LoggedToken}`
    }

    if(config != null && config.headers != null){
      config.headers['Access-Control-Allow-Origin'] = '*'
    }

    return config
  },
  error =>

    // do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
  ,
)

// response interceptor
service.interceptors.response.use(

  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    
    return Promise.resolve(response)
  },
  error => {
    // console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })

    return Promise.resolve(error.response)
  },
)

export default service

import axios from "axios";

// 请求地址前缀
axios.defaults.baseURL = "/api"

// 使用axios拦截器拦截所用请求并在请求头中添加token
// axios.interceptors.request.use(config => {
//     config.headers.Authorization = window.sessionStorage.getItem("token");
//     return config
// })

// 请求方法

const HttpUtils = {
    async menu(params, success) {
        console.log(params)
        const { data: res } = await axios.post("product/h5/plp/page", params);
        success(res);
    }

}
export default HttpUtils;



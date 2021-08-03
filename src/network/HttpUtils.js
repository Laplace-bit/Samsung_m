import axios from "axios";

// 使用axios拦截器拦截所用请求并在请求头中添加token
// axios.interceptors.request.use(config => {
//     config.headers.Authorization = window.sessionStorage.getItem("token");
//     return config
// })

// 请求方法

const HttpUtils = {
    async page(params, success) {
        console.log(params)
        const { data: res } = await axios.post("/api/product/h5/plp/page", params);
        success(res);
    },

    async menu(success){
        const {data:res}=await axios.get("/api/cms/content/indexAd")
        success(res)
    },

    // 登录
    async login(params,success) {
        const { data: res } = await axios.post("http://127.0.0.1:8888/api/private/v1/login",params)
        success(res);
    },
    // 注册
    async register() {
        const { data: res } = await axios.post("");
        success(res)
    }

}
export default HttpUtils;



import axios from "axios";


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
        const {
            data: res
        } = await axios.post("/api/product/h5/plp/page", params);
        success(res);
    },

    async menu(success) {
        const {
            data: res
        } = await axios.get("/api/cms/content/indexAd")
        success(res)
    },
    // 新品
    async recSkuList(success) {
        const {
            data: res
        } = await axios.get('/api/product/spuRec/recSkuList')
        success(res)
    },
    // product数据
    async getProductList(success){
        const {data:res} = await axios.get('/api/product/index/menu')
        success(res)
    }

}
export default HttpUtils;
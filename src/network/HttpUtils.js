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
        const { data: res } = await axios({
            url: "/userapi/login.php",
            method: 'post',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            transformRequest: [function (data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it])+'&'
                }
                return ret;
            }],
            data: {
                tel: params.username,
                password:params.password,
            }
        })
        success(res);
    },
    // 注册
    async register(params,success) {
        const { data: res } = await axios({
            url: "/userapi/regist.php",
            method: 'post',
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            },
            transformRequest: [function (data) {
                let ret = '';
                for (let it in data) {
                    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it])+'&'
                }
                return ret;
            }],
            data: {
                tel: params.username,
                password:params.password,
            }
        });
        success(res)
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
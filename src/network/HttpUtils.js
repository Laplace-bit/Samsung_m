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
    },

    // 搜索功能
    async search(id,success){
        const {data:res}=await axios.get(`/api/product/psp/getKeywords/${id}`)
        success(res)
    },

    // 分类列表
    async sortList(success){
        const {data:res}=await axios.get(`/api/product/index/navBar`)
        success(res)
    },

    // 获取页面列表
    async getPageList(params,success){
        const {data:res}=await axios.post(`/api/product/h5/plp/page`,params)
        success(res)
    },
    // 详情页
    async getDetailSw(success) {
        const { data: res } = await axios.get('/api/product/h5/pdp/leftSkuInfo/SM-G7810ZBGCHC')
        success(res)
    },
    // 详情页商品信息
    async getBaseInfo(success) {
        const { data: res } = await axios.get('/api/product/pdp/baseInfo/SM-G7810/SM-G7810ZBGCHC')
        success(res)
    },
    // 详情页图片列表
    async getPicInfo(success) {
        const { data: res } = await axios.get('/api/product/pdp/bottom/detailInfo/SM-G7810')
        success(res)
    },
    // 详情页商品颜色
     async getColorInfo(success) {
        const { data: res } = await axios.get('/api/product/h5/pdp/leftInfo/SM-G7810')
        success(res)
    },
    //  详情配置
    //  //www.samsungeshop.com.cn/api/product/pdp/right/inInfo/SM-G7810
      async getConfiguration(success) {
        const { data: res } = await axios.get('/api/product/pdp/right/inInfo/SM-G7810')
        success(res)
    },
    // 加入购物车
    async addCart(params,success) {
        const { data: res } = await axios({
            url: "/userapi/addCartData.php",
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
                goods_id:params.goods_id,
                is_select:params.is_select,
            }
        })
        success(res);
    },

    

}
export default HttpUtils;
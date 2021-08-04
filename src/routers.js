import Vue from "vue";
import vuerouter from "vue-router"

// 首页
const Home = () => import('./views/home/home')
// 登录
const Login = () => import("./views/login/Login");
// 条款
const Terms = () => import("./views/register/terms");
// 注册
const Register = () => import("./views/register/Register");
// 搜索
const Search =()=>import('./views/search/search')
// 购物车
const Cart = () => import('./views/cart/Cart')
// 详情页
const Detail = ()=>import("./views/detail/detail")
//
const Sort =()=>import('./views/sort/sort')


Vue.use(vuerouter)
const routes = [
    { path: '/', redirect: "/home" },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path: '/terms', component: Terms },
    {
        path: '/register', component: Register,
        // 同意条款放行进入注册页面
        beforeEnter: (to, from, next) => {
            const isAgree = window.sessionStorage.getItem('isAgreeTerms');
            if (!isAgree) {
                next({ path: '/terms' });
                return;
            };
            next();
      }
    },
    { path: '/search', component: Search },
    {
        path: '/cart', component: Cart,
        // 有cookie放行
        beforeEnter: (to, from, next) => {
            const isAgree = getCookie('login');
            if (!isAgree) {
                next({ path: '/login' });
                return;
            };
            next();
        },
    },
    // 详情页
    {path:'/detail',component:Detail},

    { path:'/search',component:Search},
    {path:'/sort',component:Sort}
];
const router = new vuerouter({
    mode: 'history',
    // 首页
    routes
})

// 获取cookie
function getCookie(key) {
    let c = document.cookie;
    let arr = c.split("; ");
    let obj = {};
    arr.forEach((item) => {
        let a = item.split("=");
        obj[a[0]] = a[1];
    });
    if (key) return obj[key];
    return obj;
}


export default router
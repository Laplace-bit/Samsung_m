import Vue from "vue";
import vuerouter from "vue-router"

// 首页
const Home = () => import('./views/home/home')
// 登录
const Login =()=>import ("./views/login/Login")
// 搜索
const Search =()=>import('./views/search/search')

Vue.use(vuerouter)
const routes = [
    { path: '/', redirect: "/home" },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
    { path:'/search',component:Search},
];
const router = new vuerouter({
    mode: 'history',
    // 首页
    routes
})

export default router
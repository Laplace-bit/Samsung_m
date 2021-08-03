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
];
const router = new vuerouter({
    mode: 'history',
    // 首页
    routes
})


export default router
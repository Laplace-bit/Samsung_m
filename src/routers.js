import Vue from "vue";
import vuerouter from "vue-router"

// 首页
const Home = () => import('./views/home/home')

Vue.use(vuerouter)

const router = new vuerouter({
    mode: 'history',
    // 首页
    routes: [{
        path: '/',
        redirect: "/home"
    }, {
        path: '/home',
        component: Home
    }]
})

export default router
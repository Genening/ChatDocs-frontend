import { createRouter, createWebHashHistory } from 'vue-router'

// 导入组件
import Home from "../views/Home.vue";
import ChatDocs from "../views/ChatDocs.vue";


// 定义路由组
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/chatdocs",
        name: "ChatDocs",
        component: ChatDocs,
    },
];

// 实例化路由
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// 导出路由
export default router;

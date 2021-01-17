import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import Users from "../components/Users";
Vue.use(VueRouter);
const routes = [
    {
        path:"/",
        name:"home",
        component: Home
    },
    {
        path:"/users",
        name:"users",
        component: Users
    }
];
export default new VueRouter({
    mode: "history",
    routes
});

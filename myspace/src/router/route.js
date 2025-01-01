import { createRouter, createWebHistory } from "vue-router";
import Home_view from "../components/Home";
import Login_view from "../components/Login";
import Register_view from "../components/Register";
import UserProfile_view from "../components/UserProfile";
import Userlist_view from "../components/Userlist";
import Notfound_view from "../components/Notfound";

const routes = [
  {
    path: "/",
    name: "Home_view",
    component: Home_view,
  },
  {
    path: "/login",
    name: "Login_view",
    component: Login_view,
  },
  {
    path: "/register",
    name: "Register_view",
    component: Register_view,
  },
  {
    path: "/userlist",
    name: "Userlist_view",
    component: Userlist_view,
  },
  {
    path: "/userprofile/:userId/",
    name: "UserProfile_view",
    component: UserProfile_view,
  },
  {
    path: "/404",
    name: "Notfound_view",
    component: Notfound_view,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/pages/Home.vue"
import CreateAccount from "@/views/pages/CreateAccount.vue"
import ForgetPassword from "@/views/pages/ForgetPassword.vue"
import Profile from "@/views/pages/Profile.vue"
import Messages from "@/views/pages/Messages.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/messages",
    name: "Messages",
    component: Messages,
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: CreateAccount,
  },
  {
    path: "/forget-password",
    name: "ForgetPassword",
    component: ForgetPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
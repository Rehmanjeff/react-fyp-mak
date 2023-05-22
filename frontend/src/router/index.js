import { createWebHistory, createRouter } from "vue-router"
import Home from "@/views/pages/Home.vue"
import CreateAccount from "@/views/pages/CreateAccount.vue"
import ForgetPassword from "@/views/pages/ForgetPassword.vue"
import Profile from "@/views/pages/Profile.vue"
import Messages from "@/views/pages/Messages.vue"
import Follower from "@/views/pages/Follower.vue"
import Following from "@/views/pages/Following.vue"
import Settings from "@/views/pages/Settings.vue"
import TweetDetails from "@/views/pages/TweetDetails.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      displayName: "Home"
    }
  },
  {
    path: "/profile/:username?",
    name: "Profile",
    component: Profile,
    meta: {
      displayName: "User Profile"
    }
  },
  {
    path: "/messages/:username?",
    name: "Messages",
    component: Messages,
    meta: {
      displayName: "Messages"
    }
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
  {
    path: "/profile/followers/:username?",
    name: "Follower",
    component: Follower,
  },
  {
    path: "/profile/following/:username?",
    name: "Following",
    component: Following,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: {
      displayName: "Messages"
    }
  },
  {
    path: "/tweet/:id",
    name: "TweetDetails",
    component: TweetDetails,
    props: true,
    meta: {
      displayName: "Tweet Details"
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
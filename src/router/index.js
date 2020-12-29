import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome.vue"
import Chatroom from "../views/Chatroom.vue"
import {auth} from "../firebase/config"
const routes = [
  {
   path:"/",
   name:"Welcome",
   component:Welcome
  },
  {
    path:"/chatroom",
    name:"Chatroom",
    component:Chatroom,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(user){
        next();
      }else{
        next({name:"Welcome"})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App";
import PageOne from "@/views/PageOne";
import PageTwo from "@/views/PageTwo";
import PageThree from "@/views/PageThree";
import PageFour from "@/views/PageFour";

const routes = [
  {
    path: '/',
    name: '导航一',
    component: App,
    children:[
      {
        path: '/page1',
        name: '页面1',
        component: PageOne
      },
      {
        path: '/page2',
        name: '页面2',
        component: PageTwo
      }
    ]
  },
  {
    path: '/navigation',
    name: "导航2",
    component: App,
    children: [
      {
        path: '/page3',
        name: '页面3',
        component: PageThree
      },
      {
        path: '/page4',
        name: '页面4',
        component: PageFour
      },
    ]
  },
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

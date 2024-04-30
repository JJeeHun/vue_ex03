import {createMemoryHistory, createRouter, createWebHistory, RouterOptions} from 'vue-router'
import HomeView from '@/view/Home.vue'

// router enum 정의
enum RouterNames {
    home='home',home1='home1',home2='home2'
}

// router에 상수등록한 이름만 등록 - router.push에서 상수등록 명으로 push를 치기 위함
interface RouterProp {
    id: number,
    path: string,
    title: string,
    name: RouterNames,
    component: any
}

const routes: RouterProp[] = [
    { id:1, path: '/',      name: RouterNames.home,  title:'Home' , component: () => import(`@/view/Home.vue`) },
    { id:2, path: '/home1', name: RouterNames.home1, title:'Home1', component: HomeView },
    { id:3, path: '/home2', name: RouterNames.home2, title:'Home2', component: HomeView },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
} as RouterOptions);


const RouterMenu = routes.map(route => ({...route}));


// Export
export default router;
export {
    RouterMenu,RouterNames
}

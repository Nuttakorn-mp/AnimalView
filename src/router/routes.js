// import Vue from "vue/dist/vue.esm";
// import Vue from 'vue';
// import Router from 'vue-router';
import Views from '@/components/Views';
import ViewsData from '@/components/ViewsData';
import NotFound from '@/components/NotFound';

// console.log()
// console.log('------- router component -------')
// console.log("Vue : ")
// console.log(Vue)
// console.log("Router : ")
// console.log(Router)
// console.log("ViewsData : ")
// console.log(ViewsData)
// console.log("NotFound : ")
// console.log(NotFound)
// console.log('-----------------------------------')
// console.log()


// Vue.use(Router)
const routes = [
  {name:'views',path:'/Views', component:Views, props:true},
  {name:'views-data',path:'/views_animal', component:ViewsData, props:true},
  { path: '/views_animal/*', component: NotFound },
  {path:'*', redirect:'/Views' ,component:Views, props: true},
  // {path:'/', redirect:'/Views' ,component:Views, props: true},
  // { path: "*", component: NotFound }
];
// Router.replace({ path: '*', redirect: '/modify-data' })
export default routes;  
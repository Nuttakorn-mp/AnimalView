import Vue from "vue/dist/vue.esm";
// import Vue from 'vue';
import Router from 'vue-router';
import Views from '@/components/Views';
import ViewsData from '@/components/ViewsData';


Vue.use(Router)
const routes = [
  {name:'views',path:'/Views', component:Views, props:true},
  {name:'views-data',path:'/views/:animalName', component:ViewsData, props:true},
  {path:'/', redirect:'/Views' ,component:Views, props: true},
];
// Router.replace({ path: '*', redirect: '/modify-data' })
export default routes;  
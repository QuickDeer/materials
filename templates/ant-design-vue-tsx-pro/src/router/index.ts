import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import route from './route';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = route();

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

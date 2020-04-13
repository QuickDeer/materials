import Vue from 'vue';

import { i18n } from './i18n';
import { message } from 'ant-design-vue';

import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// 全局message绑定
Vue.prototype.$message = message;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

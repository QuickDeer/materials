import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import { Language, RootState } from '@/store/types';
import getClientHW from '@/utils/getClientHW';
import defaultLanguage from '@/i18n/default';

Vue.use(Vuex);

// 获取设备宽度
const clientHW = getClientHW();

const createState = (language: Language): RootState => ({
  deviceType: clientHW.width > 1199 ? 'desktop' : clientHW.width > 576 ? 'tablet' : 'mobile',
  theme: 'light',
  language,
  version: '0.0.1'
})

export default new Vuex.Store({
  state: createState(defaultLanguage),
  mutations: {
    ...mutations
  },
  actions: {
    ...actions
  },
  modules: {
  },
});

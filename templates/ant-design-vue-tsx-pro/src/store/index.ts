import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import mutations from './mutations';
import { Language, RootState } from './types';

import defaultLanguage from '@/i18n/default';

Vue.use(Vuex);

const createState = (language: Language): RootState => ({
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

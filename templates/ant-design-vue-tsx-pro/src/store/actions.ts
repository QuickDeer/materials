import { ActionTree } from 'vuex';

import { RootState, Language } from './types';

const actions: ActionTree<RootState, RootState> = {
  // 切换全局语言
  toggleLanguage({ commit }, language: Language) {
    commit('TOGGLE_LANGUAGE', language);
  }
}

export default actions;

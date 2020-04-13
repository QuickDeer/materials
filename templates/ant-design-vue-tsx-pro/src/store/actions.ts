import { ActionTree } from 'vuex';

import { RootState, Language } from './types';

import { loginApi } from '@/api';
import authList from '@/config/auth.config';

const actions: ActionTree<RootState, RootState> = {
  // 切换全局语言
  toggleLanguage({ commit }, language: Language) {
    commit('TOGGLE_LANGUAGE', language);
  },

  // 登录
  async login(store, params) {
    const res = await loginApi.login(params);

    if (typeof res === 'string' || !res) return res || '未查询到登录数据';

    store.commit('SET_LOGIN_INFO', {
      ...res,
      auth: authList
    });

    // // 密码加密后缓存到本地
    // if (params.username && store.state.rememberMe) store.commit('REMEMBER_LOGIN_PARAMS', {
    //   account: params.username,
    //   password: crypto.encrypt(params.password)
    // })

    return true;
  },

  // 退出登录
  async logout({ commit }) {
    await new Promise(res => {
      // 模拟网络请求
      setTimeout(res, 500)
    })
    commit('LOGOUT')
    return true
  }
}

export default actions;

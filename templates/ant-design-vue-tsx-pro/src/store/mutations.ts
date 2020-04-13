import { MutationTree } from 'vuex';

import { i18n } from '@/i18n';

import createMenu from '@/config/menu';
import { RootState } from './types';

const mutations: MutationTree<RootState> = {
  // 修改当前语言
  TOGGLE_LANGUAGE(state, language) {
    state.language = i18n.locale = language
  },

  // 设置登录信息
  SET_LOGIN_INFO(state, info) {
    // 根据权限 生成菜单
    const authMap = (info.auth as { [x: string]: any })[info.username];
    // const menuTree = createMenu(authMap);

    // state.menuTree = menuTree;

    // // 设置登录信息
    // state.loginInfo = {
    //   ...info,
    //   auth: authMap
    // };
  },

  // 退出登录
  // LOGOUT(state) {
  //   // 清除登录数据
  //   state.loginInfo = {}
  //   // 清除系统的收折状态
  //   state.siderMenu.open = []
  //   state.siderMenu.collapsed = false
  // },
}

export default mutations;

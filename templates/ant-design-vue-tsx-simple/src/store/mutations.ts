import { MutationTree } from 'vuex';

import { i18n } from '@/i18n';
import { RootState } from './types';

const mutations: MutationTree<RootState> = {
  // 修改当前语言
  TOGGLE_LANGUAGE(state, language) {
    state.language = i18n.locale = language
  },
}

export default mutations;

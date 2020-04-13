import { LocaleMessageObject } from '../types';

const locale: LocaleMessageObject = {
  welcome: '欢迎使用 Vue.js 应用',
  title: '这是关于页',
  nav: {
    home: '首页',
    about: '关于'
  },
  username: '用户名',
  password: '密码',
  login: {
    title: '登录APM',
    button: '登录'
  },
  register: {
    title: '创建账号',
    button: '注册'
  },
  forget: '忘记密码',
  remember: '记住登录',
  message: {
    accountLoginError: '用户或密码错误',
    phoneLoginError: '手机号或验证码错误',
    usernameRequired: '请输入用户名',
    passwordRequired: '请输入密码',
  },
};

export default locale;
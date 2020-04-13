import { LocaleMessageObject } from '../types';

const locale: LocaleMessageObject = {
  welcome: 'Welcome to Your Vue.js App',
  title: 'This is an about page',
  nav: {
    home: 'Home',
    about: 'About'
  },
  username: 'Username',
  password: 'Password',
  login: {
    title: 'Log in to APM',
    button: 'Log in'
  },
  register: {
    title: 'Get an account',
    button: 'Sign Up'
  },
  forget: 'Forget Password',
  remember: 'Remember me',
  message: {
    accountLoginError: 'Invalid username or password',
    phoneLoginError: 'Invalid phone or captcha',
    usernameRequired: 'Please input your username!',
    passwordRequired: 'Please input your Password!',
  }
};

export default locale;
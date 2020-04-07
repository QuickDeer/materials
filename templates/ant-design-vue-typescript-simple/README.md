Ant design vue typescript simple
----
概述
----
基于`typescript`、`jsx`、`vue`、`ant-design-vue`的中后台模板

下载与运行
----

- 安装依赖
```
yarn install
```

- 开发模式运行
```
yarn run serve
```

- 编译项目
```
yarn run build
```

- Lints and fixes files
```
yarn run lint
```

环境和依赖
----

- node
- webpack
- eslint
- @vue/cli ~4
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue) - Ant Design Of Vue 实现

目录结构
----
+ public  
color.less  `动态主题色less文件`  
favicon.ico  `系统图标`  
index.ejs  `网页入口模板`  
+ src
  + assets `资源存放`  
  + components  `组件存放`  
    - Basic  `系统基础组件`  
    index.ts `抛出所有组件`  
  + config  `系统配置`  
    cryptoKey.ts  `本地记住密码加密的key(基于crypto-js的aes加密)`  
    default.homeKey.ts  `项目中默认的首页id`  
    menu.ts  `菜单的动态生成方法(基于routes.ts)`  
    routes.ts  `路由配置`  
    routesInfo.ts  `生成路由信息`  
    systemLocalStoreKey.ts  `系统基础组件需要缓存的数据key`  
    themeColor.ts  `主题色列表`    
  + layouts  `布局`  
    - BasicLayout  `系统基础布局(成功登录后)`  
    - RouterLayout  `系统多级路由容器`  
    index.ts  `抛出所有layouts`    
  + locale  `语言国际化配置`  
    - en-US  `english`  
    - zh-CN  `简体中文`  
    - zh-TW  `繁体中文`  
    default.ts  `初始化默认语言`  
    index.ts  `抛出所有语言`  
  + localStore  `路由页面数据持久化`   
  + store  `vuex状态集中管理`  
    - models  `分模块管理状态`  
    actions.ts  `根级action`  
    clearStore.ts  `初始化当前状态`  
    extendsLocalStore.ts  `路由数据持久化时，继承本地数据的方法`  
    index.ts  `生成状态库`  
    muations  `根级mutaion`   
    types.ts  `该目录下用到的类型声明约定`         
  + style  `样式`  
    defaultThemeColor.ts  `系统初始化时默认颜色`  
    index.css  `全局样式文件`  
    reset.css  `重置样式`  
    theme.less  `全局less变量定义`          
  + utils  `工具方法`  
    appendLessFile.ts  `添加主题色编译的color.less`  
    createGuid.ts  `创建不重复的guid`  
    createThemeColorCss.ts  `热编译主题色css`  
    crypto.ts  `本地记住密码加解密方法`  
    enableRouterLocalStore.ts  `开启路由数据持久化`  
    event.ts  `处理事件绑定`  
    getClientHW.ts  `获取客户端宽度与高度`  
    getDeviceType.ts `获取客户端类型`  
    validateLogin.ts  `验证用户是否登录`            
  + views  `视图容器`  
    - Login  `登录界面`  
  App.tsx  `vue渲染根节点`  
  main.ts  `主入口`  
  router.ts  `路由生成`  
  shims-other.d.ts  `项目中需要添加的typescript配置额外声明`   
  shims-tsx.d.ts  `tsx类型的全局声明`  
  shims-vue.d.ts  `vue相关类型声明`  
+ tests  `单元测试`  
.eslintrc.js  `eslint配置文件`  
babel.config.js  `babel配置文件`  
tsconfig.json  `typescript配置`  
vue.config.js  `vue-cli配置重写`  

约束
---
* 路由级组件容器置于`src/views`目录下
* 可复用功能性组件置于`src/components`目录下
* 系统配置文件置于`src/config`目录下
* 工具方法置放于`src/utils`目录下

系统配置
---

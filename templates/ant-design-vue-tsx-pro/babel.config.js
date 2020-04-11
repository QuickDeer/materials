module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],

  // ant-design-vue 配置按需加载
  plugins: [
    [
      "import",
      {
        'libraryName': 'ant-design-vue',
        'libraryDirectory': 'es',
        'style': true
      }
    ]
  ],
};

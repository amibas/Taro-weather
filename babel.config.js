// babel-preset-taro 更多选项和默认值：
// https://docs.taro.zone/docs/next/babel-config
// eslint-disable-next-line import/no-commonjs
module.exports = {
  // plugins: [
  //   [
  //     "import",
  //     {
  //       libraryName: "@taroify/core",
  //       libraryDirectory: "",
  //       style: true,
  //     },
  //     "@taroify/core",
  //   ],
  //   [
  //     "import",
  //     {
  //       libraryName: "@taroify/icons",
  //       libraryDirectory: "",
  //       camel2DashComponentName: false,
  //       style: () => "@taroify/icons/style",
  //       customName: (name) => name === "Icon" ? "@taroify/icons/van/VanIcon" : `@taroify/icons/${name}`,
  //     },
  //     "@taroify/icons",
  //   ],
  // ],
  presets: [
    ['taro', {
      framework: 'react',
      ts: true,
      compiler: 'vite',
    }]
  ],
};

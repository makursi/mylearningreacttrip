// tailwind.config.js
// 对tailwindcss 进行全局注入, 全局使用 原子化CSS框架
//1. 配置文件
//2. 在assets/main.css 进行注入
//2. 注入到入口文件 main.js/jsx/tsx/vue
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: { extend: {} },
  plugins: [],
};

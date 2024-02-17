#! /usr/bin/env node
const { promisify } = require("util");
const figlet = promisify(require("figlet"));

// logo
const logoText = figlet.textSync("COOSHINE !", {
  horizontalLayout: "Isometric1",
  verticalLayout: "default",
  width: 80,
  whitespaceBreak: true,
})


const templateChoices = [
  {
    name: 'Vue3',
    value: 'vue3',
    description: 'Vue3官方模版',
    repo: 'https://github.com/aojiaodemeng/vite-monorepo-demo.git#main'
  },
  {
    name: 'React18',
    value: 'react18',
    description: 'React18官方模版',
    repo: 'https://github.com/aojiaodemeng/vite-monorepo-demo.git#main'
  },
  {
    name: 'Pnpm-Monorepo-MicroApp',
    value: 'pnpm-monorepo-microApp',
    description: '自定义Pnpm+Monorepo+MicroApp微前端项目',
    repo: 'https://github.com/aojiaodemeng/vite-monorepo-demo.git#main'  // 指定了main分支
  },
]

module.exports = {
  logoText,
  templateChoices
}
#! /usr/bin/env node
const clear = require("clear");
const inquirer = require("@inquirer/prompts");
const download = require('download-git-repo');
const ora = require("ora");
const { log } = require("../lib/api.js");
const { logoText, templateChoices } = require("../lib/constants.js");
const { Command } = require("commander");
const spinner = ora('Downloading...');
const program = new Command();
const chalk = require("chalk");

clear();
const package = require("../package.json");
// 定义当前版本，通过 command 设置 -v 和 --version 参数输出版本号
program.option("-v, --version", `Cooshine-Cli Version: ${package.version}`)

program
  .command('init').argument('<name>')
  .action(async (name) => {
    log(logoText, 'blue')
    // 选择模版
    const template = await inquirer.select({ message: "请选择模版：", choices: templateChoices });
    const cur = templateChoices.find(i => i.value === template)
    spinner.start();
    download(`direct:${cur.repo}`, name, { clone: true }, err => {
    if (err) {
      spinner.fail(chalk.red('下载失败 \n' + err));
      process.exit();
    }
      spinner.succeed(chalk.green('Downloading Completed!'))
      console.log('\n To get started：')
      console.log(`\n    cd ${name} \n`)
    });
})

// 解析用户执行命令传入参数
program.parse(process.argv);



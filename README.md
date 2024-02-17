### 开发 Cli 工具指南

```yaml
# 更换淘宝镜像地址
# 注意淘宝 npm 镜像切换新域名了（https://registry.npm.taobao.org/ => https://registry.npmmirror.com）
npm config set registry https://registry.npmmirror.com

# 登陆npm
# 注意登陆时需要是官方地址
npm config set registry https://registry.npmjs.org/
npm login   // 如果在没有设置proxy的情况下也执行失败，就多执行几次

# 查看镜像
npm config get registry

# 本地调试
npm link
npm unlink 包名

# 发布
# 如果在没有设置proxy的情况下也执行失败，就多执行几次
# 注意每次发布都需要更新版本号
npm publish

# 删除发布的包
npm unpublish -f 包名
```

## 项目启动
  项目采用pnpm + workspace进行monorepo管理，具体项目位于packages下方，需要进入文件才能运行项目
    - base 项目基座
    - main 项目页面

## ESlint Stylelint on autosave

- 安装eslint 和stylelint插件

- vscode setting 设置
在setting.json中插入代码

```sh
// 当保存时 eslint自动修复
// 当保存时 eslint自动修复
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
    },
    "editor.formatOnSave": false,
    "stylelint.validate": [
        "vue",
        "css",
        "scss",
        "less",
        "sass"
    ],
    "stylelint.enable": true,
    "css.validate": true,
    "scss.validate": true,
    "less.validate": true,
```

## 代码提交

信息提交主要符合Angular规范
[参考信息](https://juejin.cn/post/6844903831893966856?searchId=20240202101641EEB1312A260675916F1D)
git 提交说明分为： Header、Body、Footer

- 采用git cz 提交代码

```sh
pnpm install -g git-cz
```

执行后，git commit 可以修改为git cz，会跳出交互界面

- 标准要求格式

```sh
feat: 修改简介
```

例如: 我初始化一个预约界面

```sh
feat: 预约系统初始化界面
```

都可以使用git cz来提交

- 第一次选择为类型
- 第二次选择为简介内容
- 之后的都可以按enter跳过

## 项目分支命名

- 对于开发分支统一使用 feature-开发项目-项目人名字-创建时间
  例如: feature-appointment_system-cpa-20240202
- 开发结束之后，在github提交pr申请合并
- 项目合并之后，删除自己的分支

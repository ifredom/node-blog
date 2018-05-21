# Node-Blog

    learning and use node make a self-blog.

## How to use

```bash
# 安装
npm install
npm install -g nodemon
# 默认连接到 mongDB 数据库，可以选择不连接它（注释叼app.js第一行即可）
# mongDB需要提前安装好并启动。（连接到 MySql 数据库也已经封装好,修改一行代码即可切换使用数据库）

# 启动
npm run dev
```

### 内涵

* 文章查看，发布，编辑，删除系统（也就是数据库的增删改查）
* nodemon 控制服务器的自启动以及文件热更新
* debug 进行 node 服务器的调试监控
* 使用 jade 制作 html 模板
* 使用 express 作为中间层处理逻辑
* ...

### 开发环境

1. **node v6.12.0**

2. cnpm v5.1.1

3. npm v5.7.1

## About

    lesson1. base constructor.
    lesson2. add ejs template and how to controll template and routes.
    lesson3. control page event with js or node?
    lesson4. building...

## nodemon.json explain

```bash
{
    "restartable": "rs",
    // 表示输出详细启动与重启信息
    "verbose": true,
    "ignore": [".git", ".svn", ".vscode", "node_modules"],
    "env": {
        "NODE_ENV": "development"
    },
    // 监视指定后缀名的文件，用空格分开
    "ext": "js json jade",
    // 用 nodemon 代替 node  --harmony 运行此处配置的后缀文件
    "execMap": {
        // 空后缀名是为了支持 ./bin/www 这样无后缀的文件。
        "": "node",
        // 对于es6的功能分成了3个部分:shipping, staged 和 in progress.
        // shipping功能:这些功能是已经稳定的。已经写入了node.js中的，直接就可以使用
        // staged功能:此功能是几乎完成的功能,但是v8团队没有考虑稳定性，需要使用--harmony.
        // in progress功能: 此功能是需要写出标签的,比如--harmony_destructuring
        "js": "node --harmony",
        // py后缀文件使用python解析
        "py": "python",
        // rb后缀文件使用ruby解析
        "rb": "ruby"
    }
}
```

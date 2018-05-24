# what's vue-answer？

* Answer -- the classification, evaluation, and ranking of the mainstream information
  （答案-对主流信息进行分类，评价，排行）

* In Answer, Guide to information acquisition, all the people on the street.
  (在答案,为你推介获取正确信息的指南，也作为你披荆斩棘的引路人)

* In Answer, you can easily find friends who have been in the same predicament. all the people on the street
  (在答案，你可以轻易找到曾经历相同困境的朋友,披荆斩棘的同伴)

---

### 使用方法 ?

    // cmd中安装所需依赖
    npm install

    // 启动
    npm run dev

    # 其他-打包成产品
    npm run build

    # 构建产品并运行查看npm包分析报告
    npm run build --report

    # 运行 unit 测试
    npm run unit

    # 运行 e2e 测试
    npm run e2e

    # 运行所有测试用例
    npm test

---

### 开发环境

1.node v6.9.4

2.cnpm v4.5.0

3.npm v3.10.10

### support browser

IE 10+

Andorid 4.1+

IOS 7+


## 移动端适配方案构建（Flexible.js）

**有什么好处？**
**按照 750px 宽度出图，前端不用计算尺寸，不用管什么 rem，直接使用设计稿上的 px 即可，移动端自动适配**

```bash
# 第一步，使用vue-cli初始化一个项目
vue init webpack test-flexible-layout
# 第二步，安装依赖，以及适配方案所需包
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S

npm i cssnano-preset-advanced --save-dev
# 第三步，改造 .postcssrc.js文件.
参见该文件，直接copy方案二内容

# 第四步，对此适配方案进行兼容性优化
参见index.html。引入该CDN上的2个js文件，同时在onload中初始化
# ps：格外注意事项 ，所有css文件一律不在入口main.js中引入，使用app根组件引入
```

参考：https://www.w3cplus.com/mobile/vw-layout-in-vue.html

<template>
  <nav class="sidebar">
    <div class="promote-reading">
      <p class="title">推荐阅读</p>
      <ul class="nav">
        <li v-for="item in promoteReading" :key="item.title">
          <a :href="item.link" v-text="item.title" target="_blank"></a>
        </li>
      </ul>
    </div>
    <!--  <div class="latest-comment">
      <p class="title">最新评论</p>
      <ul class="nav">
        <li role="presentation" class="commet-item">
          <a href="#">Re:深入理解JavaScript系列（4）：立即调用的函数表达式
          </a>
          <a class="child" href="#">不错不错，受教了-- oular</a>
        </li>
        <li role="presentation" class="commet-item">
          <a href="#">生而有涯 书海无涯 (贺子期)</a>
          <a class="child" href="#">博主你是怎么查看.net4源码的？-- VIP丨千夜</a>
        </li>
        <li role="presentation" class="commet-item">
          <a href="#">中国金融博物馆书院2013年7-9月推荐书单 (金融博物馆书院)</a>
          <a class="child" href="#">return container.Resolve; //返回AutoFac实现的IServiceProvider 这一步实现AutoFac的时候需要return 一个IServiceProvider，如果此处还要添加比如lot4net的依赖注入，也需要占用return，这里要怎么合并去写？ -- 死神的背影</a>
        </li>
        <li role="presentation" class="commet-item">
          <a href="#">IT好书100本 (左神神)</a>
          <a class="child" href="#">这个适配器到底起到什么作用了，为什么调试了turkey并不能拥有quack方法，，它输出的还是咯咯 -- 人狠话不多</a>
        </li>
      </ul>
    </div>-->
    <div class="friend-link">
      <p class="title">友情链接</p>
      <ul class="nav">
        <li v-for="item in friendLink" :key="item.title">
          <a :href="item.link" v-text="item.title" target="_blank"></a>
        </li>
      </ul>
    </div>
  </nav>
</template>


<script>
export default {
  data() {
    return {
      isCollapse: true,
      promoteReading: [
        {
          title: '我的孤独是一座花园',
          link: 'https://book.douban.com/subject/3597825/'
        },
        {
          title: '三体',
          link: 'http://www.luoxia.com/santi/'
        },
        {
          title: '禅的行囊',
          link: 'https://book.douban.com/subject/5290370/'
        },
        {
          title: '蛊真人',
          link: 'https://book.qidian.com/info/2527417'
        },
        {
          title: '纽约：一座超级城市是如何运转的',
          link: 'https://book.douban.com/subject/27622170/?icn=index-editionrecommend'
        }
      ],
      friendLink: [
        {
          title: '阮一峰',
          link: 'http://www.ruanyifeng.com/blog/'
        },
        {
          title: '廖雪峰',
          link: 'https://www.liaoxuefeng.com/'
        },
        {
          title: '汤姆大叔',
          link: 'http://www.cnblogs.com/TomXu/archive/2011/12/15/2288411.html'
        },
        {
          title: '阿城',
          link: 'https://qiutc.me/'
        },
        {
          title: 'jingsam',
          link: 'https://jingsam.github.io/'
        }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped lang="stylus">
@import '../../assets/style/variable.styl';

.sidebar {
  position: fixed;
  top: 5rem;
  bottom: 0;
  right: 0;
  display: block;
  min-width: $commentsidebar-width;
  max-width: 20rem;
  z-index: 1000;
  padding: 1.2rem;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 2s;

  &::-webkit-scrollbar {
    display: none;
  }

  .title {
    font-size: 1.8rem;
    color: #C45DC4;
  }

  .nav {
    margin-right: -2.1rem;
    margin-bottom: 2rem;
    margin-left: -2rem;

    > li {
      > a {
        padding-right: 2rem;
        padding-left: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-size: 1.4rem;
        color: #725DC4;
        line-height: 2rem;
        transition: all 0.5s;

        &.child {
          font-size: 1.2rem;
          color: #6D625F;
          line-height: 1.6rem;
        }
      }
    }

    .commet-item {
      border-bottom: 1px solid #E0C1E8;
    }
  }

  .nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background-color: #9FB6CD;
    margin-left: 2rem;
  }
}
</style>
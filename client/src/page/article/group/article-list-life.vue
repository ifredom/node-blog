<template>
  <article class="article">

    <div class="article-inner">
      <figure class="article-header" @click="goDetail">
        <img src="../../../assets/image/article/288.jpg" alt="">
        <figcaption class="article-title">
          <h2>何洁桃花眼不简单？与刁磊新恋情真假大分辨
            <!-- <span>时间:
              <em>骁骑校</em>
            </span> -->
          </h2>
        </figcaption>
      </figure>

      <div class="article-entry">
        <div class="article-meta">
          <div class="pos-left">
            <time class=" article-date post-time">
              <i class="icon iconfont icon-shijian"></i>
              <span>2017-08-23</span>
            </time>
            <div class="meta-tags">
              <div class="tag">Web</div>
              <div class="tag">原创</div>
            </div>
          </div>
          <div to="#" class="article-visitors pos-right">
            <span class="leancloud_visitors">
              <i class="icon iconfont icon-liulan"></i>
              <span class="leancloud-visitors-count">1095</span>
            </span>
          </div>
        </div>
        <div class="article-desc">
          <p>
            在移动端的页面开发中，一个页面往往会在多个地方运行，例如：嵌入在app内、微信、其它浏览器….. ,在这些地方运行，很多功能的实现会采用不同方式，例如分享功能，在app中可能会调用native（android/ios）提供的接口，微信端会调用微信的sdk，这是两种完全不同的实现方式，但是对外的调用方式和接收参数、返回参数一致。
          </p>
          <p>
            这时需要一个中间层(runtime)，对外调用runtime中的方法，runtime中区分运行环境来调用不同的实现方式。
          </p>
        </div>
      </div>
    </div>

  </article>

</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  methods:{
    goDetail(){
      this.$router.push({path:'article/detail'})
    }
  }
};
</script>
<style scoped lang="stylus">
@import '../../../assets/style/variable.styl';

.article {
  min-height: 5rem;
  margin-top: 3rem;
  background-color: rgba(255, 255, 255, 0.8);
}

.article-meta {
  display: flex;
  justify-content: space-between;
  z-index: 99;

  .pos-left {
    display: flex;
    justify-content: flex-start;
  }

  .post-time {
    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
    }
  }

  .article-date {
    background-color: #6b69d6; // #B0E0E6  #D1EEEE
    padding: 0.5rem;
    height: 3rem;
    text-align: center;
    line-height: 1.4;
    font-size: $fontsize-small;
  }

  .meta-tags {
    display: flex;
    align-items: center;
  }

  .tag {
    background-color: #EBEB48;
    padding: 0 0.5rem;
    border-right: 1px solid #cccc00;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: $fontsize-small;
  }

  .article-visitors {
    padding: 0 0.5rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
    font-size: $fontsize-small;
  }

  .icon {
    font-size: 1.6rem;
    color: #333;
    transition: font-size 0.25s ease-out 0s;
  }
}

.article-inner {
  position: relative;
  display: flex;
  width: 100%;

  .article-header {
    position: relative;
    flex: 2;
    padding: 0.8rem;
    background-color: #333;

    img {
      position: relative;
      display: block;
      width: 36rem;
      opacity: 0.8;
    }

    .article-title {
      margin-top: 1rem;
      font-size: 1.8rem;
      line-height: 1.5;
      color: #fff;
    }

    a {
      font-size: $fontsize-large-xx;
      text-align: center;
      font-weight: 700;
      color: #fff;
    }
  }

  .article-entry {
    flex: 5;

    .article-desc {
      padding: 0.8rem;
    }

    p {
      margin-top: 0.5rem;
      color: #5f626d;
    }
  }
}

@media screen and (min-width: $media-level-md) and (max-width: 1200px) {
.article-inner {
  .article-header {
    img {
      width: 24rem;
    }
  }
}
}
</style>

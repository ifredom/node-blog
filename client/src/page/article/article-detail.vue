<template>
  <article class="article">
    <div class="article-meta">
      <router-link to="#" class="article-date">
        <time class="post-time">
          <span>2017-08-23</span>
        </time>
      </router-link>
      <div class="meta-tags">
        <router-link to="#" class="article-tag">
          <div class="tag-time">
            <span>Web</span>
          </div>
        </router-link>
        <router-link to="#" class="article-tag">
          <div class="tag-time">
            <span>原创</span>
          </div>
        </router-link>
      </div>
      <router-link to="#" class="article-visitors">
        <span class="leancloud_visitors">
          阅读次数
          <span class="leancloud-visitors-count">1095</span>
        </span>
      </router-link>
    </div>
    <div class="article-inner">
      <h1 class="article-header">
        <a class="article-title" href="">轮询机制解决后端任务回调问题</a>
      </h1>
      <div class="article-entry">
        <p>
          在移动端的页面开发中，一个页面往往会在多个地方运行，例如：嵌入在app内、微信、其它浏览器….. ,在这些地方运行，很多功能的实现会采用不同方式，例如分享功能，在app中可能会调用native（android/ios）提供的接口，微信端会调用微信的sdk，这是两种完全不同的实现方式，但是对外的调用方式和接收参数、返回参数一致。
        </p>
        <p>
          这时需要一个中间层(runtime)，对外调用runtime中的方法，runtime中区分运行环境来调用不同的实现方式。
        </p>
      </div>
      <div class="article-hide-box">
        <a class="btn btn-red-hollow">阅读更多</a>
      </div>
    </div>
  </article>

</template>
<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  }
};
</script>
<style scoped lang="stylus">
@import '../../assets/style/variable.styl';

.article {
  min-height: 5rem;
  margin-bottom: 8rem;
  background-color: rgba(255, 255, 255, 0.8);

  .article-meta {
    z-index 99
    .article-date {
      float: left;
      background-color: #6b69d6;
      padding: 0.5rem;
      position: relative;
      top: -2rem;
      left: -1.5rem;
      width: 9rem;
      height: 3rem;
      text-align: center;
      line-height: 1.4;
      font-size: $fontsize-small;
    }

    .article-tag {
      float: left;
      background-color: #EBEB48;
      padding: 0.5rem;
      position: relative;
      top: -2rem;
      left: -1.5rem;
      border-right: 1px solid #ccc;
      height: 3rem;
      text-align: center;
      line-height: 1.4;
      font-size: $fontsize-small;
    }

    .article-visitors {
      float: right;
      padding: 0.5rem;
      position: relative;
      top: 0;
      right: 0;
      border-right: 1px solid #ccc;
      height: 3rem;
      text-align: center;
      line-height: 1.4;
      font-size: $fontsize-small;
    }
  }

  .article-inner {
    position: relative;
    padding: 3rem 3rem 5rem 3rem;

    .article-header {
      a {
        font-size: $fontsize-large-xx;
        text-align: center;
        font-weight: 700;
        color: #626457;
      }
    }

    .article-entry {
      p {
        margin-top: 2rem;
        color: #5f626d;
      }
    }

    .article-hide-box {
      position: absolute;
      bottom: 0rem;
      left: 0;
      width: 100%;
      padding-top: 12rem;
      background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(255, 255, 255, 0)), color-stop(90%, #fff));
      background-image: linear-gradient(-180deg, rgba(255, 255, 255, 0) 0%, #fff 90%);

      .btn-red-hollow {
        width: 10rem;
        margin: 0 auto 2rem;
        padding: 1rem 1.2rem;
        text-align: center;
        color: #ca0c16 !important;
        border: 1px solid #ca0c16 !important;
        background-color: #fff !important;
        -webkit-transition: background-color 0.1s ease-in-out;
        transition: background-color 0.1s ease-in-out;
      }
    }
  }
}
</style>

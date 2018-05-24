<template>
  <section class="main-fix">
    <div class="container wrapper">
      <article-list></article-list>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
import articleList from "@/page/article/article-list";
export default {
  data() {
    return {};
  },
  components:{
    articleList
  }
};
</script>
<style scoped lang="stylus">
@import '../../assets/style/variable.styl';

.main-fix {
  float: right; // 向右浮动
  width: 100%; // 为了自适应设为100%
  // margin-left: -($sidebar-width);
  // margin-right: -($sidebar-width);

  .container {
    margin-left: $sidebar-width;
    margin-right: $commentsidebar-width;

    &.wrapper {
      padding: 3rem;
    }
  }
}

</style>

<template>
  <section class="main-fix">
    <div class="container wrapper">
        <article-detail v-for="(item,index) in articleList" :key="index"></article-detail>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
import articleDetail from "@/page/article/article-detail";

export default {
  data() {
    return {
      articleList:[1,2,3]
    };
  },
  components:{
    articleDetail
  }
};
</script>
<style scoped lang="stylus">
@import '../../assets/style/variable.styl';

.main-fix {
  float: right;
  width: 100%;
  .container {
    &.wrapper {
      padding: 3rem;
    }
  }
}

</style>

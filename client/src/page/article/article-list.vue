<template>
  <section class="article-list">
    <div class="wrapper">
      <ta-recommendside></ta-recommendside>
      <!-- <article-list-tech v-for="(item,index) in articleList" :key="index"></article-list-tech> -->
      <article-list-life v-for="(item,index) in articleList" :key="index"></article-list-life>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
import articleListTech from '@/page/article/group/article-list-tech';
import articleListLife from '@/page/article/group/article-list-life';
import taRecommendside from '@/components/recommendside';
export default {
  data() {
    return {
      articleList: [1, 2, 3,4]
    };
  },
  components: {
    taRecommendside,
    articleListTech,
    articleListLife
  }
};
</script>
<style scoped lang="stylus">
@import '../../assets/style/variable.styl';

.article-list {
  width: 100%;
}

.wrapper {
  position: relative;
  padding: 0 2.2rem 0 0;
  margin-right: $recommendbar-width;
}

@media (max-width: $media-level-lg) {
  .wrapper {
    margin-right: 0;
    padding: 0;
  }
}
</style>

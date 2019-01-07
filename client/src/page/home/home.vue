<template>
  <div id="main">
    <ta-nav></ta-nav>
    <section class="wrapper">
      <ta-banner></ta-banner>
      <article-list></article-list>
    </section>
  </div>
</template>
<script>
import taNav from '@/page/home/nav';
import taBanner from '@/components/banner';
import articleList from '@/page/article/article-list';
export default {
  data() {
    return {
      searchBarFixed: false
    };
  },
  components: {
    taNav,
    taBanner,
    articleList
  }
};
</script>

<style scoped lang="stylus">
@import '../../assets/style/variable.styl';

.wrapper {
  background-color: $main-container-bg;
  background: url('../../assets/image/cbg1.png') repeat left top;
}

@media (min-width: $media-level-md) {
  .wrapper {
    padding: 0 3rem;
  }
}
</style>

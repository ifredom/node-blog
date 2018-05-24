<template>
  <main>
    <ta-nav></ta-nav>
    <section>
      <ta-sidebar></ta-sidebar>
      <ta-container></ta-container>
      <ta-commetside></ta-commetside>
    </section>

  </main>
</template>
<script>
import taSidebar from '@/page/home/sidebar';
import taCommetside from '@/page/home/commetside';
import taNav from '@/page/home/nav';
import taContainer from '@/page/home/container';

export default {
  data() {
    return {
      searchBarFixed: false
    };
  },
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      var offsetTop = document.querySelector('#searchBar').offsetTop;
      if (scrollTop > offsetTop) {
        this.searchBarFixed = true;
      } else {
        this.searchBarFixed = false;
      }
    }
  },
  components: {
    taNav,
    taSidebar,
    taCommetside,
    taContainer
  }
};
</script>

<style scoped lang="stylus">
main {
  // 兼容处理 Android
  .tab-box-fixed {
    position: fixed;
    z-index: 5;
    background-color: #Fff;
    color: #a37bad;
  }

  // iOS
  .tab-box-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: #Fff;
    color: #a37bad;
  }
}
</style>

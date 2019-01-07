<template>
  <div class="container-box" :class="hanldleStyle">
    <ta-sidebar></ta-sidebar>
    <router-view></router-view>
  </div>
</template>
<script>
import taSidebar from '@/page/home/sidebar';
export default {
  data() {
    return {
      searchBarFixed: false
    };
  },
  computed: {
    hanldleStyle() {
      return this.$store.getters.getSidebarState ? '' : 'avtiveSidebar';
    }
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
    taSidebar
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/style/variable.styl';

.container-box {
  position: relative;
  width: 100%;
  padding-left: $sidebar-width;
  transition: all 0.3s;

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

.container-box.avtiveSidebar {
  padding-left: 0;
}

@media (max-width: $media-level-md) {
  .container-box {
    padding-left: 0;
  }
}
</style>

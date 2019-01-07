<template>
  <nav id="navbar-top" data-fixed="">
    <a class="navbar-item navbar-header-logo">
      <span class="navbar-brand" href="#">ifredom 的官方网站</span>
    </a>
    <a class="navbar-item navbar-inverse">
      <span class="navbar-brand" href="#">What is the world's color ？</span>
    </a>
  </nav>
</template>


<script>
export default {
  name: 'ta-nav',
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {}
};
</script>
<style scoped lang="stylus">
@import '../../assets/style/variable.styl';

#navbar-top {
  width: 100%; // 固定宽度
  position: relative;
  display: none;

  .navbar-item {
    display: inline-block;
    padding: 1.5rem 1.5rem;
  }

  .navbar-header-logo {
    width: 20rem;
    font-size: 1.8rem;
    color: #333;
    background: linear-gradient(to right, #9BCD9B, #cd5b45);
  }

  .navbar-inverse {
    flex: 1;
    background-color: #9BCD9B;
    border-color: #080808;
    transition: all 2s;

    .navbar-brand {
      color: #8B7765;
    }
  }
}

// Android
.box-fixed {
  position: fixed;
  z-index: 5;
}

// iOS
.box-sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
}

@media (max-width: $media-level-md) {
  #navbar-top {
    display: flex;
  }
}
</style>
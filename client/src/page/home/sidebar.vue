<template>
  <div id="sidebar" :class="sidebarClass">
    <router-link class="logo-link" to="">
      <img src="../../assets/image/logo_name.png" alt="">
    </router-link>
    <div class="toggle-sidebar" @click="handleSidebar"></div>
    <nav class="sidebar">
      <ul class="nav nav-sidebar">
        <li class="active">
          <a href="#">技术人生
            <!-- <span class="sr-only">(current)</span> -->
          </a>
        </li>
        <li role="presentation" class="">
          <a href="#">信息科学</a>
        </li>
        <li role="presentation" class="">
          <a href="#">人文艺术</a>
        </li>
        <li role="presentation" class="">
          <a href="#">资源共享</a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  namt: 'ta-sidebar',
  data() {
    return {
      isCollapse: true,
      sidebarClass: ''
    };
  },
  methods: {
    handleSidebar() {
      this.sidebarClass = this.sidebarClass ? '' : 'avtiveSidebar';
      this.$store.commit('setActiveSidebar', this.sidebarClass ? false : true);
    },
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

handleSidebar = -($sidebar-width) + 0.8rem;

#sidebar {
  position: fixed;
  top: 0px;
  left: 0px;
  width: $sidebar-width;
  height: 100%;
  box-shadow: rgb(212, 222, 230) 0px 0px 18px 0px;
  background: rgb(255, 255, 255);
  transition: all 0.3s;

  .logo-link {
    width: 100%;
    height: 80px;
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.sidebar {
  display: block;
  min-width: $sidebar-width;
  z-index: 1000;
  padding: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 2s;
  color: #9FB6CD;

  .nav-sidebar {
    margin-right: -2.1rem;
    margin-bottom: 2rem;
    margin-left: -2rem;

    > li {
      margin-bottom: 1.6rem;
      max-height: 50px;
      transition: max-height 0.5s ease-out;

      &.active::after {
        position: absolute;
        right: -2rem;
        top: 0;
        display: block;
        content: '';
        width: 2rem;
        height: 3rem;
        background-color: red;
        z-index: 100;
      }

      > a {
        text-align: center;
        width: 100%;
        height: 48px;
        cursor: pointer;
        padding-left: 50px;
        font-size: 14px;
        color: rgb(144, 144, 144);
        display: flex;
        align-items: center;
        font-weight: 700;
        transition: all 0.3s ease-out;
      }
    }

    > .active > a {
      color: rgb(61, 61, 61);
      background-color: #f1f5f8;
      margin-left: 2rem;
    }
  }

  .nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background-color: #9FB6CD;
    margin-left: 2rem;
  }
}

#sidebar.avtiveSidebar {
  left: handleSidebar;
}

.toggle-sidebar:after {
  content: '';
  width: 1.6rem;
  height: 4rem;
  position: absolute;
  right: -0.8rem;
  top: 1rem;
  background-color: #d9e3ea;
}


@media (max-width: $media-level-md) {
  #sidebar{
    display none
  }
}
</style>
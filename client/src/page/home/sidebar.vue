<template>
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
</template>


<script>
export default {
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
  }
};
</script>
<style scoped lang="stylus">
@import '../../assets/style/variable.styl';

.sidebar {
  position: fixed;
  top: 5rem;
  bottom: 0;
  left: 0;
  display: block;
  min-width: $sidebar-width;
  max-width: 20rem;
  z-index: 1000;
  padding: 2rem;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #333;
  transition: all 2s;
  color: #9FB6CD;
  background-color: #CD5B45;

  .nav-sidebar {
    margin-right: -2.1rem;
    margin-bottom: 2rem;
    margin-left: -2rem;

    > li {
      margin-bottom: 1.6rem;

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
        padding-right: 2rem;
        padding-left: 2rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        color: #333;
        text-align: center;
        transition: all 0.5s;
      }
    }

    > .active > a {
      color: #333;
      background-color: #9FB6CD;
      margin-left: 2rem;
    }
  }

  .nav>li>a:focus, .nav>li>a:hover {
    text-decoration: none;
    background-color: #9FB6CD;
    margin-left: 2rem;
  }
}
</style>
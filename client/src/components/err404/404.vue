<template>
    <div id="content" class="narrowcolumn">
        <div id="parallax">
            <div class="error1">
                <img src="../../assets/util/scriptalizer/wand.jpg" alt="Mauer" />
            </div>
            <div class="error2">
                <img src="../../assets/util/scriptalizer/licht.png" alt="Licht" />
            </div>
            <div class="error3">
                <img src="../../assets/util/scriptalizer/halo1.png" alt="Halo1" />
            </div>
            <div class="error4">
                <img src="../../assets/util/scriptalizer/halo2.png" alt="Halo2" />
            </div>
            <div class="error5">
                <img src="../../assets/util/scriptalizer/batman-404.png" alt="Batcave 404" />
            </div>
        </div>
        <div class="footer-banner" style="width:728px; margin:0 auto"></div>
    </div>
</template>

<script>
// var parallax = require('../../assets/util/scriptalizer/scriptalizer.js');
export default {
  name:'error404',
  data() {
    return {};
  },
  mounted() {
    // $('#parallax').jparallax({});
  }
};
</script>

<style  scoped>
body {
  color: #838b94;
  background: #000 fixed 50% 0;
}

a:visited {
  color: #353c40;
  text-decoration: none;
}

a:hover {
  color: #d3e7fe;
  text-shadow: #fff 0 0 10px;
}

a:active {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

a {
  outline: none;
  color: #2a3038;
  transition-property: color, text-shadow;
  transition-duration: 600ms;
  transition-timing-function: ease-in-out;
  font: bold 12px 'Lucida Grande', Lucida, Verdana, sans-serif;
}

img {
  margin-bottom: 82px;
}

#parallax {
  position: relative;
  overflow: hidden;
  width: 1300px;
  height: 700px;
}

div.error1 {
  position: relative;
  width: 1295px;
  height: 695px;
}

div.error2 {
  position: relative;
  width: 1000px;
  height: 625px;
}

div.error3 {
  position: relative;
  padding-left: 400px;
  padding-top: 120px;
  width: 1000px;
  height: 600px;
}

div.error4 {
  position: relative;
  padding-left: 450px;
  padding-top: 160px;
  width: 1150px;
  height: 640px;
}

div.error5 {
  position: relative;
  width: 1270px;
  height: 690px;
}

.link {
  text-align: center;
}
</style>

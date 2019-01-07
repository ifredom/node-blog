<template>
  <div class="page page-preview">
    <div class="triangle-pattern"></div>
    <section class="word-region" ref="wordregion"></section>
    <md-button class="md-raised" to="/home">进入</md-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { MdButton } from 'vue-material/dist/components';
Vue.use(MdButton);

export default {
  name: 'preview',
  data() {
    return {
      wordLine: [
        '你见，或者不见我',
        '我就在那里',
        '你念，或者不念我',
        '情就在那里',
        '你爱，或者不爱我',
        '爱就在那里',
        '你跟，或者不跟我',
        '我的手就在你手里',
        '不舍不弃',
        '来我的怀里',
        '或者',
        '让我住进你的心里',
        '默然',
        '相爱',
        '寂静',
        '欢喜'
      ],
      curLine: 0,
      curIndex: 0,
      delay: 130
    };
  },
  mounted() {
    this.writeword();
  },
  methods: {
    writeword() {
      var self = this;
      var wordregion = this.$refs.wordregion;
      var activeLine = '';

      if (this.curLine === this.wordLine.length) {
        document.querySelector('.md-raised').style.display = 'block';
        return;
      } else {
        activeLine = this.wordLine[this.curLine].split('');
      }

      if (this.curLine < this.wordLine.length) {
        if (this.curIndex < activeLine.length) {
          wordregion.insertAdjacentHTML('beforeend', '<span class="tag' + this.curIndex + '">' + activeLine[this.curIndex] + '</span>');
          setTimeout(() => {
            self.writeword();
          }, self.delay);

          this.curIndex++;
        } else if (this.curIndex == this.wordLine[this.curLine].split('').length) {
          wordregion.insertAdjacentHTML('beforeend', '</br>');
          setTimeout(() => {
            self.writeword();
          }, self.delay);

          this.curLine++;
          this.curIndex = 0;
        } else {
        }
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page-preview {
  background: url('../../assets/image/preview/lengku/bg.jpg') top left;
  // background: url('../../assets/image/preview/thriller/gratisography-64H.jpg') top left;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 337px;
    height: 337px;
    left: 50%;
    top: 50%;
    margin-left: -168px;
    margin-top: -168px;
    background-image: url('../../assets/image/preview/lengku/circle-red.png');
    background-size: 100%;
  }

  .triangle-pattern {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url('../../assets/image/preview/lengku/triangles.png');
    background-size: cover;
    background-position: center;
    opacity: 0.03;
  }

  .word-region {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    min-height: 30%;
    text-align: center;
    font-size: 18px;
    line-height: 1.6;
    color: #fff;
    padding: 2em 3em;
  }

  .word-region:after {
    content: '|';
    animation: flash 0.6s steps(2, start) infinite;
    -webkit-animation: flash 0.6s steps(2, start) infinite;
  }

  .word-region.gameover:after {
    display: none;
  }

  @keyframes flash {
    0% {
      visibility: visible;
    }

    100% {
      visibility: hidden;
    }
  }

  @keyframes flash {
    0% {
      visibility: visible;
    }

    100% {
      visibility: hidden;
    }
  }

  .md-raised {
    display: none;
    position: absolute;
    bottom: 160px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    border: 1px solid #fff;
    animation: 3s linear 1s slidein;
  }
}
</style>

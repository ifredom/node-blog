<template>
  <div class="page page-preview">
    <section class="word-region" ref="wordregion">
      <span>你</span>
      <span>你见，或者不见我</span>
    </section>
    <section class="word-region" ref="wordregion2"></section>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import { ApiMockLogin } from '@/api';

export default {
  name: 'preview',
  data() {
    return {
      wordLine: [
        ['你见，或者不见我', '我就在那里'],
        ['你念，或者不念我', '情就在那里'],
        ['你爱，或者不爱我', '爱就在那里'],
        ['你跟，或者不跟我', '我的手就在你手里'],
        ['不舍不弃', '来我的怀里'],
        ['或者', '让我住进你的心里'],
        ['默然', '相爱'],
        ['寂静', '欢喜']
      ],
      wordLine2: [
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
      words: {
        wordNum: 0,
        len: 0
      }
    };
  },
  mounted() {
    var self = this;
    setTimeout(() => {
      self.writeword();
      self.writeword2();
    }, 300);
  },
  methods: {
    initWriteword() {},
    writeword() {
      var self = this;
      var wordregion = this.$refs.wordregion,
        htmlText = wordregion.innerHTML, // 显示的内容
        len = htmlText.length;

      console.log(this.words.wordNum, this.wordLine.length);

      this.words.wordNum++;
      if (this.words.wordNum < this.wordLine.length) {
        var temp = 0;
        for (let index = 0; index < this.wordLine[this.words.wordNum].length; index++) {
          const element = this.wordLine[this.words.wordNum][index];
          const elementStringArr = element.split('');
          // console.log(elementStringArr);

          for (let idx = 0; idx < elementStringArr.length; idx++) {
            const str = elementStringArr[idx];

            if (idx == elementStringArr.length - 1) {
              wordregion.insertAdjacentHTML('beforeend', currentStr + '</br>');
            } else {
              wordregion.insertAdjacentHTML('beforeend', currentStr);
            }
          }
        }
        temp++;

        setTimeout(() => {
          self.writeword();
        }, 200);
      }
    },
    writeword2() {
      var self = this;
      var wordregion = this.$refs.wordregion2,
        htmlText = wordregion.innerHTML, // 显示的内容
        len = htmlText.length;

      console.log(this.words.wordNum, this.wordLine.length);

      this.words.wordNum++;
      if (this.words.wordNum < this.wordLine.length) {
        var temp = 0;

        temp++;

        setTimeout(() => {
          self.writeword2();
        }, 200);
      }
    }
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.page-preview {
  // background: url('../../assets/image/preview/thriller/gratisography-64H.jpg') top left;
  background-size: 100% 100%;
  background-repeat: no-repeat;

  .word-region {
    background-color: #eee;
    width: 40em;
    height: 30%;
    line-height: 1.6;
    color: #333;
    border: 1px solid #CCC;
    padding: 1em 3em;
    margin: 5px auto;
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
}

.ityped-cursor {
  font-size: 2.2rem;
  opacity: 1;
  -webkit-animation: blink 0.3s infinite;
  -moz-animation: blink 0.3s infinite;
  animation: blink 0.3s infinite;
  animation-direction: alternate;
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}

@keyframes blink {
  100% {
    opacity: 0;
  }
}
</style>

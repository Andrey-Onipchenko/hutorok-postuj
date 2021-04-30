<template>
  <div ref="toast" class="toast">
    <p class="toast__text">Ви помилилися, спробуйте ще раз</p>
  </div>
  <div class="game">
    <div class="game__container">
      <div class="game-frame">
        <div
          class="game-frame__flow"
          v-for="(ar, index) in arr.slice(0, 5)"
          v-bind:key="index"
        >
          <div class="game-frame__item">
            <img
              @click="getIngridien($event)"
              class="game-frame__img"
              :src="ar.src"
              :dataingridien="ar.name"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="game-result">
        <div class="game-result__wrap">
          <p class="game-result__title">
            Збери {{ dishComplite.length }} правильних ігредієнтів
          </p>
          <div class="timer">
            <p class="timer__title">Залишилось:</p>
            <div class="timer__wrap">
              <span>{{ minutes }}</span
              >:<span ref="second" @click="timer()">{{ second }}</span>
            </div>
          </div>
        </div>
        <div class="ingredients">
          <div
            class="ingredients__item"
            v-for="(item, index) in dishComplite"
            :key="`ingredients-${index}`"
            :data-result="item.res"
          >
            <img class="ingredients__img" :src="item.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
  props: ["game"],
  emits: ["finishGame"],
  data() {
    return {
      arr: this.$store.state.game["ingredients"],
      second: 59,
      minutes: 1,
      dishComplite: this.$store.state.game[this.game],
      dishData: [],
      success: [],
      pipe: false
    };
  },
  mounted: function() {
    this.fin = false;
    if (window.innerWidth <= 1024) {
      document.querySelector(".title-h1").style.display = "none";
      document.querySelector(".page-play").style.paddingTop = "70px";
      document.querySelector(".logo__img").style.paddingBottom = "60px";
    }
    if (window.innerWidth <= 767) {
      document.querySelector(".page-play").style.paddingTop = "35px";
    }
    this.createArrSuccess();
    this.animations();

    this.timer();
  },
  methods: {
    getIngridien(event) {
      event.target.src = "";
      let nameIngridien = event.target.getAttribute("dataingridien");
      if (this.success.length >= 1) {
        this.success.filter(item => {
          if (item === nameIngridien) {
            let noda = document.querySelector(
              `[data-result='${nameIngridien}']`
            );
            noda.style.opacity = "1";
          }
        });
        if (!this.dishData.includes(nameIngridien)) {
          this.$refs.toast.classList.remove("toast_active");
          this.$refs.toast.classList.add("toast_active");
          let removeIndex = () => {
            this.$refs.toast.classList.remove("toast_active");
            clearTimeout(removeIndex);
          };
          setTimeout(removeIndex, 500);
        }
        this.success = this.success.filter(item => {
          return item !== nameIngridien;
        });
        if (this.success.length === 0) {
          this.finish(true);
        }
      }
    },
    randomNumberInRange: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    timer() {
      let inter = setInterval(() => {
        if (this.success.length === 0) {
          this.finish(true);
          clearInterval(inter);
        } else {
          if (this.second === 0) {
            if (this.minutes > 0) {
              this.second = 59;
              this.minutes = 0;
            } else {
              clearInterval(inter);
              this.finish(false);
            }
          } else {
            this.second = this.second - 1;
          }
        }
      }, 1000);
    },
    finish(paramas) {
      this.$emit("finishGame", {
        progress: "gameSuccess",
        dishName: this.game,
        finishGame: paramas
      });
    },
    createArrSuccess() {
      this.dishComplite.forEach(item => {
        this.success.push(item.res);
        this.dishData.push(item.res);
      });
    },
    animations() {
      const images = document.querySelectorAll(".game-frame__item");
      images.forEach((img, index) => {
        let interval = setInterval(frame, this.randomNumberInRange(20, 40));
        setTimeout(() => {
          clearInterval(interval);
        }, 125000);
        let position = -40,
          imgDataRandom = [...this.arr];
        const imgDataFull = [...this.arr];
        let startIndex = index;
        function frame() {
          if (position === 120) {
            img.style.display = "none";
            startIndex += 5;
            if (startIndex >= imgDataFull.length) {
              startIndex = index;
            }
            const ingredient = img.querySelector(".game-frame__img");
            ingredient.src = imgDataRandom[startIndex].src;
            ingredient.setAttribute(
              "dataIngridien",
              imgDataRandom[startIndex].name
            );
            position = -40;
          } else {
            position++;
            img.style.display = "block";
            img.style.top = position + "%";
          }
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.game {
  &__container {
    width: calc(100% - 120px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    @media (max-width: 1024px) {
      flex-direction: column;
      width: 100%;
    }
  }
  &__btn {
    text-align: center;
    padding: 15px 0;
  }
  &__start {
    display: inline-block;
    padding: 15px 45px;
    background: green;
    color: #fff;
    border-radius: 8px;
  }
}
.game-frame {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100%;
  @media (max-width: 1400px) {
    height: 50vh;
  }
  @media (max-width: 1024px) {
    height: 30vh;
  }
  @media (max-width: 767px) {
    height: 40vh;
  }
  @media (max-width: 360px) {
    height: 38vh;
  }
  @media (max-width: 767px) and (min-height: 700px) {
    height: 45vh;
  }
  &__flow {
    width: 100%;
    position: relative;
  }
  &__item {
    position: absolute;
    top: -50%;
    left: 50%;
    width: 150px;
    transform: translateX(-50%);
    outline: transparent;
    background: transparent;
    @media (max-width: 1400px) {
      width: 120px;
    }
    @media (max-width: 767px) {
      width: 60px;
    }
  }
  &__img {
    width: 100%;
    cursor: pointer;
    outline: transparent;
    background: transparent;
    &:focus {
      outline: transparent;
      background: transparent;
    }
    @media (max-width: 1400px) {
      width: 70%;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
}
.game-result {
  max-width: 575px;
  width: 100%;
  padding-top: 100px;
  @media (max-width: 1400px) {
    max-width: 410px;
    padding-top: 0;
  }
  @media (max-width: 1024px) {
    display: flex;
    max-width: 100%;
    padding-top: 215px;
  }
  @media (max-width: 767px) and (min-height: 700px) {
    padding-top: 70px;
  }
  @media (max-width: 767px) {
    padding-top: 60px;
  }
  &__title {
    font-size: 35px;
    line-height: 44px;
    color: #625b4e;
    text-align: center;
    @media (max-width: 1366px) {
      font-size: 26px;
    }
    @media (max-width: 1024px) {
      font-size: 30px;
    }
    @media (max-width: 767px) {
      position: absolute;
      top: 100px;
      font-size: 20px;
      line-height: 25px;
      max-width: 210px;
      left: 20px;
      text-align: start;
    }
  }
  &__wrap {
    @media (max-width: 1024px) {
      width: 90%;
    }
    @media (max-width: 767px) {
      width: 0%;
    }
  }
}
.timer {
  &__title {
    font-size: 24px;
    line-height: 30px;
    color: #69645a;
    text-align: center;
    @media (max-width: 767px) {
      display: none;
    }
  }
  &__wrap {
    margin: 0 auto;
    max-width: 105px;
    font-size: 56px;
    line-height: 71px;
    color: #69645a;
    @media (max-width: 767px) {
      position: absolute;
      top: 95px;
      right: 20px;
      background: rgba(243, 248, 250, 0.4);
      border-radius: 50%;
      width: 65px;
      height: 65px;
      font-size: 26px;
      line-height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
.ingredients {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: 767px) {
    width: 100%;
  }
  &__item {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    background: #9aa583;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-bottom: 15px;
    @media (max-width: 1400px) {
      width: 90px;
      height: 90px;
    }
    @media (max-width: 767px) {
      width: 70px;
      max-height: 70px;
    }
    @media (max-width: 359px) {
      width: 50px;
      max-height: 50px;
    }
  }
  &__img {
    position: absolute;
    max-width: 80px;
    width: 100%;
    @media (max-width: 1400px) {
      max-width: 60px;
    }
    @media (max-width: 767px) {
      width: 30px;
    }
  }
}
.toast {
  position: fixed;
  top: 160px;
  right: 0;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  width: 483px;
  height: 146px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 35px 40px;
  transition: all 1s ease;
  z-index: -1;
  @media (max-width: 1366px) {
    top: 80px;
  }
  @media (max-width: 1024px) {
    background: rgba(255, 255, 255, 1);
    top: 20px;
    right: 50;
  }
  @media (max-width: 767px) {
    background: rgba(255, 255, 255, 0.7);
    top: 10px;
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 290px;
    padding: 10px 20px;
    height: 70px;
  }
  &_active {
    z-index: 1;
  }
  &__text {
    font-size: 30px;
    line-height: 38px;
    color: #69645a;
    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 24px;
    }
  }
}
</style>

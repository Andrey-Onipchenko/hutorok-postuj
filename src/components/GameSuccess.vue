<template>
  <div class="game-success">
    <img
      v-if="gameName === 'leanVinaigrette'"
      class="game-success__img"
      src="https://qazzxswedc.000webhostapp.com/images/dish_1.png"
      alt=""
    />
    <img
      v-if="gameName === 'saladOfBeansAndCorn'"
      class="game-success__img"
      src="https://qazzxswedc.000webhostapp.com/images/dish_2.png"
      alt=""
    />
    <img
      v-if="gameName === 'saladWithMushroomsAndBeets'"
      class="game-success__img"
      src="https://qazzxswedc.000webhostapp.com/images/dish_3.png"
      alt=""
    />
    <img
      v-if="gameName === 'soupWithCannedBeansAndTomatoes'"
      class="game-success__img"
      src="https://qazzxswedc.000webhostapp.com/images/dish_4.png"
      alt=""
    />
    <img
      v-if="gameName === 'riceWithCornAndGreenPeas'"
      class="game-success__img"
      src="https://qazzxswedc.000webhostapp.com/images/dish_5.png"
      alt=""
    />
    <div v-if="gameOver">
      <p class="game-success__text">
        Вітаємо! <br />
        Ти вдало приготував страву до пісного меню
      </p>
      <div class="game-success__btns">
        <Popup />
        <button @click="startGame" class="btn-transparent">
          Спробувати ще раз
        </button>
      </div>
    </div>
    <div v-else>
      <p class="game-success__text">
        Нажаль, ця спроба хибна. <br />
        Але ви можете грати ще!
      </p>
      <div class="game-success__btns-false">
        <button @click="startGame" class="btn-transparent game-success__btn">
          Готувати ще
        </button>
      </div>
    </div>
  </div>
  <a
    v-if="gameOver"
    href="https://www.facebook.com/sharer.php?u=https://postuj.smak.ua"
    class="fb"
    target="_blank"
  >
    <img class="fb__img" src="../assets/images/fb.png" alt="fb" />
    <p>Поділитися</p>
  </a>
</template>

<script>
import Popup from "./Popup";
export default {
  name: "GameSuccess",
  props: ["gameName", "gameOver"],
  components: {
    Popup
  },
  created() {
    if (window.innerWidth <= 767) {
      document.querySelector(".logo__img").style.paddingBottom = "10px";
    }
  },
  methods: {
    startGame() {
      this.$gtag.event("click", {
        event_category: "hutorok",
        event_label: "play_again"
      });
      this.$emit("startGame", {
        progress: "list",
        dishName: this.gameName
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.game-success {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
  &__img {
    max-width: 25%;
    @media (max-width: 767px) {
      max-width: 58%;
    }
  }
  &__text {
    font-family: "Chalkboard SE", sans-serif;
    font-weight: bold;
    font-size: 50px;
    line-height: 71px;
    text-align: center;
    color: #69645a;
    max-width: 1000px;
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      font-size: 38px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 29px;
      margin: 15px 0;
    }
  }
  &__btns {
    display: flex;
    max-width: 580px;
    justify-content: space-around;
    margin: 0 auto;
    &-false {
      display: flex;
      justify-content: center;
    }
    @media (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__btn {
    padding: 25px 60px;
    @media (max-width: 767px) {
      padding: 12px 22px;
    }
  }
}
.fb {
  position: fixed;
  right: 45px;
  bottom: 45px;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  color: #425b96;
  @media (max-width: 600px) {
    right: 5px;
    bottom: 10px;
    margin: 0 auto;
    font-size: 12px;
    line-height: 18px;
  }
  &__img {
    @media (max-width: 600px) {
      width: 20px;
      height: 20px;
    }
  }
}
</style>

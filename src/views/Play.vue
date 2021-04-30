<template>
  <Navigation />
  <div class="page-play">
    <Logo />
    <Choosedish v-if="progress === 'list'" @startGame="toggleScrin" />
    <Game
      v-else-if="progress === 'game'"
      @finishGame="toggleScrin"
      :game="dataGame"
    />
    <GameSuccess
      v-else-if="progress === 'gameSuccess'"
      :gameName="dataGame"
      :gameOver="gameComplite"
      @startGame="toggleScrin"
    />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Choosedish from "@/components/Choosedish.vue";
import Game from "@/components/Game.vue";
import GameSuccess from "@/components/GameSuccess.vue";
import Logo from "@/components/Logo.vue";
export default {
  data() {
    return {
      progress: "list",
      dataGame: null,
      gameComplite: null
    };
  },
  components: {
    Game,
    Choosedish,
    GameSuccess,
    Logo,
    Navigation
  },
  methods: {
    toggleScrin(data) {
      let { progress, dishName, finishGame } = data;
      this.dataGame = dishName;
      this.progress = progress;
      this.gameComplite = finishGame;
    }
  },
  mounted() {
    document.querySelectorAll(".nav__link").forEach(item => {
      item.classList.add("nav__link_black");
    });
  }
};
</script>

<style lang="scss">
.page-play {
  padding-top: 80px;
  background: url("../assets/images/play_bg.jpeg") no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  @media (max-width: 1680px) {
    .logo__img {
      max-width: 150px;
    }
  }
  @media (max-width: 768px) {
    padding-top: 50px;
    background-position: center right;
    .logo__img {
      max-width: 105px;
    }
  }

  .title-h1 {
    margin-bottom: 10px;
  }
}
</style>

<template>
  <Navigation :isHome="true" />
  <div class="home">
    <div class="container">
      <div class="home__wrap">
        <Logo homePage="true" />
        <div class="home__content">
          <div class="home__content-bg"></div>
          <p class="home__content-text">
            Готуйте страви до Великого Посту разом з TM «Хуторок» та вигравайте
            щотижня кошик смаколиків,
          </p>
          <p class="home__content-text">
            а 12 квітня головний приз - сертифікат на <br />
            <span class="home__content-prize">10 000 гривень</span> на омріяну
            побутову техніку!
          </p>
        </div>
        <div class="game-rules">
          <div class="game-rules-item">
            <div class="game-rules__number">1</div>
            <p class="game-rules__text">Обирай страву з пісного меню</p>
          </div>
          <div class="game-rules-item">
            <div class="game-rules__number">2</div>
            <p class="game-rules__text">Збирай правильні інгредієнти</p>
          </div>
          <div class="game-rules-item">
            <div class="game-rules__number">3</div>
            <p class="game-rules__text">Реєструйся та вигравай подарунки!</p>
          </div>
        </div>
        <div class="play">
          <router-link class="play__link" to="/play">
            <span class="play__text" @click="trackStartGame()">Грати</span>
            <svg
              width="15"
              height="16"
              viewBox="0 0 15 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.61196 0.352787C1.16948 -0.474644 0 0.203197 0 1.86558V14.1332C0 15.7973 1.16948 16.4742 2.61196 15.6476L13.3345 9.49828C14.7775 8.67055 14.7775 7.32952 13.3345 6.50199L2.61196 0.352787Z"
                fill="white"
              /></svg
          ></router-link>
        </div>
      </div>
      <div class="advertising">
        <img
          class="certificate"
          src="../assets/images/certificate.png"
          alt="Certificate"
        />
        <img
          class="hutorok"
          src="../assets/images/hutorok_bg.png"
          alt="Hutorok"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import Logo from "@/components/Logo.vue";
export default {
  name: "Home",
  components: {
    Logo,
    Navigation
  },
  methods: {
    trackStartGame() {
      this.$gtag.event("click", {
        event_category: "hutorok",
        event_label: "start_game"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 104px;
  background: url("../assets/images/home_bg.jpg") no-repeat 50%;
  min-height: 100vh;
  height: 100%;
  background-size: cover;
  padding-bottom: 30px;
  overflow: hidden;
  @media (max-width: 1680px) {
    padding-top: 90px;
  }
  @media (max-width: 767px) {
    background-position: center;
    padding-top: 30px;
    .container {
      padding: 0;
    }
  }
  &__wrap {
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 100%;
    justify-content: center;
    // @media (max-height: 667px) and (min-width: 375px) {
    //   padding-top: 20px;
    //   justify-content: flex-start;
    //   height: 70vh;
    // }
  }
  &__content {
    margin-top: 17px;
    position: relative;
    @media (max-width: 1680px) {
      margin-top: 10px;
    }
    @media (max-width: 767px) {
      margin-top: 0;
    }
    @media (max-height: 860px) and (min-width: 620px) {
      margin-top: 0;
    }
    &-bg {
      background: #f7fbed;
      filter: blur(20px);
      height: 269px;
      @media (max-width: 1680px) {
        height: 240px;
      }
      @media (max-width: 767px) {
        height: 130px;
      }
      @media (max-height: 860px) and (min-width: 620px) {
        height: 180px;
      }
    }
    &-text {
      top: 20px;
      max-width: 1040px;
      right: 0;
      left: 0;
      margin: 0 auto;
      position: absolute;
      font-size: 36px;
      line-height: 46px;
      text-align: center;
      color: #4e5c11;
      @media (max-height: 860px) and (min-width: 620px) {
        top: 15px;
      }
      &:nth-child(3) {
        top: 135px;
        @media (max-width: 767px) {
          top: 75px;
        }
        @media (max-height: 860px) and (min-width: 620px) {
          top: 100px;
        }
      }
      @media (max-width: 1680px) {
        font-size: 32px;
        line-height: 40px;
      }
      @media (max-width: 767px) {
        font-size: 15px;
        line-height: 19px;
      }
    }
    &-prize {
      font-weight: bold;
      color: #4e5c11;
    }
  }
}

.game-rules {
  display: flex;
  margin: 0 auto;
  max-width: 832px;
  margin-bottom: 51px;
  @media (max-width: 767px) {
    display: block;
    margin-bottom: 10px;
  }
  @media (max-height: 860px) and (min-width: 620px) {
    margin-bottom: 15px;
  }
  &-item {
    width: 100%;
    @media (max-width: 767px) {
      display: flex;
      align-items: center;
      max-width: 230px;
      margin: 10px auto 10px;
    }
  }
  &__number {
    font-family: "PT Sans", sans-serif;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    font-weight: bold;
    font-size: 48px;
    line-height: 62px;
    text-align: center;
    color: #4e5c11;
    background: radial-gradient(
      86.1% 115.2% at 43.5% -15.2%,
      rgba(255, 255, 255, 0) 0%,
      rgba(105, 100, 90, 0.26) 100%
    );
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.09));
    backdrop-filter: blur(24px);
    border-radius: 90px;
    @media (max-width: 767px) {
      max-width: 40px;
      height: 40px;
      font-size: 16px;
      line-height: 21px;
      margin: 0;
    }
  }
  &__text {
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #71404b;
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 18px;
      color: #71404b;
      margin: 0;
    }
  }
}
.play {
  text-align: center;
  &__link {
    background: #80ab53;
    border-radius: 32px;
    padding: 16px 72px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.002em;
    text-transform: uppercase;
    display: flex;
    max-width: 220px;
    margin: 0 auto;
    align-items: center;
    @media (max-width: 767px) {
      max-width: 150px;
      padding: 12px 40px;
    }
  }
  &__text {
    margin-right: 8px;
  }
}
.advertising {
  position: relative;
}
.certificate {
  max-width: 27%;
  width: 100%;
  position: absolute;
  right: 0;
  bottom: -40px;
  @media (max-width: 1680px) {
    max-width: 23%;
  }
  @media (max-width: 767px) {
    max-width: 40%;
    right: 5px;
    bottom: -40px;
  }
  @media (max-width: 320px) {
    bottom: -70px;
  }
}
.hutorok {
  position: absolute;
  left: -100px;
  max-width: 35%;
  bottom: -50px;
  @media (max-width: 1680px) {
    max-width: 25%;
    left: -25px;
  }
  @media (max-width: 767px) {
    max-width: 40%;
    left: 5px;
    bottom: -60px;
  }
  @media (max-width: 320px) {
    bottom: -95px;
  }
}
</style>

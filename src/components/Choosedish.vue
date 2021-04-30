<template>
  <div class="choose-dish">
    <div class="choose-dish__item">
      <div class="choose-dish__img-wrap">
        <img
          class="choose-dish__img"
          src="../assets/images/dish_1.png"
          :alt="dish_1.name"
        />
      </div>
      <div class="choose-dish__item-wrap">
        <div class="choose-dish__btn">
          <button
            class="btn"
            @click="startGame(dish_1.dishName, 'cook_vinehret')"
          >
            Готувати
          </button>
        </div>
        <h3 class="choose-dish__name">{{ dish_1.name }}</h3>
      </div>
      <ul class="choose-dish__list">
        <li
          class="choose-dish__ingredient"
          v-for="(ingredient, index) in dish_1.ingredients"
          :key="index"
        >
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="choose-dish__item">
      <div class="choose-dish__img-wrap">
        <img
          class="choose-dish__img"
          src="../assets/images/dish_2.png"
          :alt="dish_2.name"
        />
      </div>
      <div class="choose-dish__item-wrap">
        <div class="choose-dish__btn">
          <button
            class="btn"
            @click="startGame(dish_2.dishName, 'cook_salad_bean')"
          >
            Готувати
          </button>
        </div>
        <h3 class="choose-dish__name">{{ dish_2.name }}</h3>
      </div>
      <ul class="choose-dish__list">
        <li
          class="choose-dish__ingredient"
          v-for="(ingredient, index) in dish_2.ingredients"
          :key="index"
        >
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="choose-dish__item">
      <div class="choose-dish__img-wrap">
        <img
          class="choose-dish__img"
          src="../assets/images/dish_3.png"
          :alt="dish_3.name"
        />
      </div>
      <div class="choose-dish__item-wrap">
        <div class="choose-dish__btn">
          <button
            class="btn"
            @click="startGame(dish_3.dishName, 'cook_salad_mushrooms')"
          >
            Готувати
          </button>
        </div>
        <h3 class="choose-dish__name">{{ dish_3.name }}</h3>
      </div>
      <ul class="choose-dish__list">
        <li
          class="choose-dish__ingredient"
          v-for="(ingredient, index) in dish_3.ingredients"
          :key="index"
        >
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="choose-dish__item">
      <div class="choose-dish__img-wrap">
        <img
          class="choose-dish__img"
          src="../assets/images/dish_4.png"
          :alt="dish_4.name"
        />
      </div>
      <div class="choose-dish__item-wrap">
        <div class="choose-dish__btn">
          <button
            class="btn"
            @click="startGame(dish_4.dishName, 'cook_puree_soup')"
          >
            Готувати
          </button>
        </div>
        <h3 class="choose-dish__name">{{ dish_4.name }}</h3>
      </div>
      <ul class="choose-dish__list">
        <li
          class="choose-dish__ingredient"
          v-for="(ingredient, index) in dish_4.ingredients"
          :key="index"
        >
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="choose-dish__item">
      <div class="choose-dish__img-wrap">
        <img
          class="choose-dish__img"
          src="../assets/images/dish_5.png"
          :alt="dish_5.name"
        />
      </div>
      <div class="choose-dish__item-wrap">
        <div class="choose-dish__btn">
          <button
            class="btn"
            @click="startGame(dish_5.dishName, 'cook_rice_corn')"
          >
            Готувати
          </button>
        </div>
        <h3 class="choose-dish__name">{{ dish_5.name }}</h3>
      </div>
      <ul class="choose-dish__list">
        <li
          class="choose-dish__ingredient"
          v-for="(ingredient, index) in dish_5.ingredients"
          :key="index"
        >
          {{ ingredient }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Choosedish",
  data() {
    return {
      dish_1: {
        name: "Пісний вінегрет",
        dishName: "leanVinaigrette",
        ingredients: [
          "Буряк- 3 шт",
          "Картопля - 4 шт",
          "Морква - 1 шт",
          "Зелений горошок - 1 шт",
          "Огірки мариновані — 13 шт",
          "Яблука - 2 шт",
          "Цибуля- 1 шт",
          "Спеції за смаком",
          "Олія соняшникова"
        ]
      },
      dish_2: {
        name: "Пісний салат з квасолі та кукурудзи",
        dishName: "saladOfBeansAndCorn",
        ingredients: [
          "Біла квасоля - 1 банка",
          "Консервована кукурудза - 1 банка",
          "Болгарський перець - 2 шт",
          "Петрушка - 1 п.",
          "Мед - 1 ч. л.",
          "Гірчиця - 1 ст. л.",
          "Перець, сіль - за смаком"
        ]
      },
      dish_3: {
        name: "Салат з грибами та буряком",
        dishName: "saladWithMushroomsAndBeets",
        ingredients: [
          "Буряк - 1 шт.",
          "Картопля - 1 шт.",
          "Гриби мариновані - 200 г",
          " Огірки мариновані - 3 шт.",
          "Цибуля - 5 шт.",
          "Зелений горошок - 100 г",
          "Олія соняшникова - 2 ст.л.",
          "Сіль - за смаком"
        ]
      },
      dish_4: {
        name: "Суп-пюре з консервованою квасолею та томатами",
        dishName: "soupWithCannedBeansAndTomatoes",
        ingredients: [
          "Квасоля консервирована - 2 банки по 400 г",
          "Помідори консервовані - 5-7 шт",
          "Перець болгарський - 1 шт",
          "Цибуля - 1 шт",
          "Морква - 1 шт",
          "Часник - 1 зубчик",
          "Томатна паста - 1-1,5 ст.л.",
          "Вода або овочевий бульйон - 1 литр",
          "Мелений перець - за смаком",
          "Зелень петрушки",
          "Олія соняшникова",
          "Сіль"
        ]
      },
      dish_5: {
        name: "Рис з кукурудзою та зеленим горошком",
        dishName: "riceWithCornAndGreenPeas",
        ingredients: [
          "Рис - 150 г",
          "Вода - 350 мл",
          "Морква - 1 шт.",
          "Кукурудза - 100 г",
          "Горошок зелений - 100 г",
          "Сіль та перець - за смаком"
        ]
      }
    };
  },
  methods: {
    startGame(dishName, analytics) {
      this.$gtag.event("click", {
        event_category: "hutorok",
        event_label: analytics
      });
      this.$emit("startGame", {
        progress: "game",
        dishName
      });
    },
    fetImg() {
      return window.location.origin;
    }
  }
};
</script>

<style lang="scss" scoped>
.choose-dish {
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  flex-wrap: wrap;
  @media (max-width: 1480px) {
    width: 98%;
  }
  &__item {
    max-width: 320px;
    widows: 100%;
    @media (max-width: 1680px) {
      padding-right: 0;
      max-width: 265px;
    }
    @media (max-width: 767px) {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 0;
      max-width: 90%;
      width: 100%;
    }
  }
  &__item-wrap {
    display: flex;
    flex-direction: column-reverse;
  }
  &__img-wrap {
    display: flex;
    justify-content: center;
    @media (max-width: 767px) {
      margin-right: 30px;
    }
  }
  &__img {
    max-width: 220px;
    width: 100%;
    max-height: 220px;
    height: 100%;
    margin-bottom: 15px;
    @media (max-width: 1680px) {
      max-width: 180px;
      max-height: 180px;
    }
    @media (max-width: 767px) {
      min-width: 100px;
      max-height: 100px;
      max-width: 100px;
      min-height: 100px;
    }
  }
  &__name {
    font-family: "FrizQuadrataCTT", sans-serif;
    font-style: italic;
    font-weight: bold;
    font-size: 22px;
    line-height: 112.8%;
    color: #0f175a;
    height: 54px;
    margin-bottom: 15px;
    @media (max-width: 1680px) {
      font-size: 19px;
      height: 40px;
    }
    @media (max-width: 767px) {
      font-size: 20px;
      line-height: 112.8%;
      max-width: 140px;
      height: auto;
    }
  }
  &__list {
    @media (max-width: 767px) {
      display: none;
    }
  }
  &__ingredient {
    font-size: 18px;
    line-height: 135%;
    color: #000000;
    @media (max-width: 1680px) {
      font-size: 16px;
    }
  }
  &__btn {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
}
</style>

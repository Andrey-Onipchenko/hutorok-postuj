<template>
  <h1 v-if="homePage" class="title-h1">Зустрічай ВЕСНУ з</h1>
  <h2 v-else class="title-h1">Найулюбленіші страви до Посту</h2>
  <div class="logo">
    <a
      href="https://foodsales.com.ua/search?search=%D1%85%D1%83%D1%82%D0%BE%D1%80%D0%BE%D0%BA+"
      target="_blank"
    >
      <img class="logo__img" src="../assets/images/logo.png" alt="logo" />
    </a>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: ["homePage"]
};
</script>

<style lang="scss">
.title-h1 {
  font-family: "FrizQuadrataCTT", Arial, Helvetica, sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 80px;
  line-height: 80.9%;
  text-align: center;
  color: #10155e;
  text-shadow: 0px 4px 40px rgba(255, 255, 255, 0.75);
  margin-bottom: 28px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  @media (max-width: 1680px) {
    font-size: 72px;
  }
  @media (max-width: 1024px) {
    font-size: 62px;
  }
  @media (max-width: 767px) {
    font-size: 30px;
    line-height: 80.9%;
    margin-bottom: 5px;
  }
  @media (max-height: 860px) and (min-width: 620px) {
    font-size: 64px;
    margin-bottom: 10px;
  }
}
.logo {
  text-align: center;
  &__img {
    @media (max-width: 767px) {
      max-width: 90px;
    }
    @media (max-height: 860px) and (min-width: 620px) {
      max-width: 120px;
    }
  }
}
</style>

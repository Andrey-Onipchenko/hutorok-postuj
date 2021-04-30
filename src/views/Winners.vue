<template>
  <Navigation />
  <div class="page-winners">
    <Logo />
    <div class="container">
      <h3 class="page-winners__title">Наші переможці</h3>
      <p class="page-winners__subtitle">Розіграш від 29.03.21</p>
      <video class="page-winners__video" loop="" controls="">
        <source src="../assets/video/29_03.mp4" type="video/mp4" />
      </video>
      <ul class="page-winners__list">
        <li class="page-winners__item">1. -1038 - Валентина +38(099)71821**</li>
        <li class="page-winners__item">2. - 124 - Мария +38(093)63562**</li>
        <li class="page-winners__item">3. - 113 - Владимир +38(068)30617**</li>
        <li class="page-winners__item">
          4. - 622 - Тетяна Робота +38(099)05622**
        </li>
        <li class="page-winners__item">
          5. - 190 - Саніна Людмила +38(097)93288**
        </li>
        <li class="page-winners__item">6. - 1077 - Юлія +38(063)80333**</li>
        <li class="page-winners__item">7. - 1699 - Світлана +38(093)03243**</li>
        <li class="page-winners__item">8. - 902 - Олеся +38(050)14810**</li>
        <li class="page-winners__item">9. - 11 - Наталья +38(066)61305**</li>
        <li class="page-winners__item">
          10. - 120 - Марина Илюхина +38(066)12718**
        </li>
      </ul>
      <p class="page-winners__subtitle">Організатор Акції не зміг зв’язатись з переможцем «- 120 - Марина Илюхина», тому додатково визначаємо переможця</p>
      <video class="page-winners__video" loop="" controls="">
        <source src="../assets/video/29_03_2.mp4" type="video/mp4" />
      </video>
      <p class="page-winners__subtitle" style="padding:0">10. – 27 – Юлія +38(098)82745**</p>
      <p class="page-winners__subtitle">Розіграш від 05.04.21</p>
      <video class="page-winners__video" loop="" controls="">
        <source src="../assets/video/05_04.mp4" type="video/mp4" />
      </video>
      <ul class="page-winners__list">
        <li class="page-winners__item">1. - 1064 - Дима Рябушенко +38(068)23491**</li>
        <li class="page-winners__item">2. - 234 - Роман Мошков  +38(099)32572**</li>
        <li class="page-winners__item">3. - 537 - Оксана +38(068)88799**</li>
        <li class="page-winners__item">4. - 838 - Андрій +38(066)44443**</li>
        <li class="page-winners__item">5. - 110 - Карабут Татьяна +38(097)07184**</li>
        <li class="page-winners__item">6. - 1023 - Корниенко Виктория +38(097)26790**</li>
        <li class="page-winners__item">7. - 287 - Вася +38(067)18827**</li>
        <li class="page-winners__item">8. - 579 - Оксана +38(097)34018**</li>
        <li class="page-winners__item">9. - 447 - оксана +38(097)77960**</li>
        <li class="page-winners__item">10. - 1032 - Максим +38(096)45268**</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation.vue";
import Logo from "@/components/Logo.vue";
export default {
  name: "Winners",
  components: {
    Navigation,
    Logo
  },
  mounted() {
    document.querySelectorAll(".nav__link").forEach(item => {
      item.classList.add("nav__link_black");
    });
  }
};
</script>
<style lang="scss" scoped>
.page-winners {
  padding: 80px 0 30px;
  background: url("../assets/images/play_bg.jpeg") no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: 100%;
  font-family: "Chalkboard SE", sans-serif;
  text-align: center;
  &__title {
    font-size: 24px;
    margin: 10px 0 0;
  }
  &__subtitle {
    padding: 20px 0;
    font-size: 18px;
  }
  &__video {
    max-width: 800px;
    width: 100%;
  }
  &__list {
    max-width: 430px;
    font-size: 18px;
    margin: 0 auto;
    text-align: left;
    @media(max-width: 600px){
          font-size: 16px;
    }
  }
}
</style>

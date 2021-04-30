<template>
  <div class="nav">
    <router-link class="nav__link nav__home" v-if="home" to="/"
      >Головна</router-link
    >
    <router-link class="nav__link" to="/rules">Правила</router-link>
    <router-link class="nav__link" to="/winners">Переможці</router-link>
  </div>
</template>

<script>
export default {
  name: "Navigations",
  data() {
    return {
      home: window.location.pathname === "/" ? false : true
    };
  },
  props: ["ishome"]
};
</script>

<style lang="scss" scoped></style>

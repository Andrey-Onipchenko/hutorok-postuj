<template>
  <Authorization v-if="!auth" @authorization="isLogin" />
  <UserStatistic v-if="auth" />
</template>

<script>
import Authorization from "../components/Authorization";
import UserStatistic from "../components/UserStatistic";
export default {
  name: "Statistic",
  components: {
    Authorization,
    UserStatistic
  },
  data() {
    return {
      auth: sessionStorage.login || false
    };
  },
  methods: {
    isLogin(data) {
      this.auth = data.auth;
      sessionStorage.login = data.auth;
    }
  }
};
</script>

<style lang="scss" scoped></style>

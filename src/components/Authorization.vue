<template>
  <form class="auth-form" enctype="multipart/form-data" method="post">
    <p class="auth-form__title">Автрорізація</p>
    <input
      class="auth-form__input"
      v-model="email"
      type="email"
      name="email"
      placeholder="Логін"
    />
    <input
      class="auth-form__input"
      v-model="password"
      type="password"
      name="password"
      placeholder="Пароль"
    />
    <p class="auth-form__error">{{ error }}</p>
    <button class="auth-form__submit" @click="authorization($event)">
      Увiйти
    </button>
  </form>
</template>

<script>
export default {
  name: "Authorization",
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    authorization(event) {
      event.preventDefault();
      const formData = {
        email: this.email,
        password: this.password
      };

      this.postData("http://localhost:8000/auth", formData).then(response => {
        if (response.status) {
          this.$emit("authorization", {
            auth: response.auth
          });
        } else {
          this.error = response.msg;
        }
      });
    },
    async postData(url = "", data = {}) {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data)
      });
      return await response.json();
    }
  }
};
</script>

<style lang="scss" scoped>
.auth-form {
  max-width: 380px;
  width: 100%;
  margin: 4em auto;
  padding: 3em 2em 2em 2em;
  background: #fafafa;
  border: 1px solid #ebebeb;
  box-shadow: rgba(0, 0, 0, 0.14902) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.09804) 0px 1px 2px 0px;
  text-align: center;
  &__title {
    color: #636363;
    font-size: 26px;
  }
  &__input {
    display: block;
    width: 100%;
    margin: 0 auto;
    color: #999;
    font-size: 18px;
    border: none;
    border-bottom: 2px solid #999;
    margin-bottom: 30px;
    outline: transparent;
  }
  &__error {
    color: red;
    min-height: 20px;
  }
  &__submit {
    display: inline-block;
    padding: 12px 24px;
    margin: 5px 0 16px;
    width: 100%;
    vertical-align: middle;
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 1px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #3160b6;
    cursor: pointer;
    transition: all 0.15s ease;
    background: #4a89dc;
    text-shadow: 1px 1px 0 rgba(39, 110, 204, 0.5);
    &:hover {
      background: #357bd8;
    }
  }
}
</style>

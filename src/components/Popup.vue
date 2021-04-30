<template>
  <button v-if="!reg" @click="open($event)" class="popup-open">
    Форма реєстрації
  </button>
  <div
    class="popup-wrapper"
    :class="{
      'popup-active': isActive
    }"
  >
    <div class="popup-inner">
      <button @click="close($event)" class="popup__close">
        <img src="../assets/images/close.svg" alt="close" />
      </button>
      <form v-if="registration" class="popup">
        <h4 class="popup__title">Форма реєстрації</h4>

        <input
          class="popup__input"
          type="text"
          name="user_name"
          placeholder="Ваше ім’я"
          v-model="userName"
        />
        <input
          class="popup__input"
          type="phone"
          name="user_phone"
          placeholder="Номер телефону"
          v-model="userPhone"
          v-maska="'+38(0##)#######'"
        />
        <p class="popup__error">{{ error }}</p>
        <button @click="addUser($event)" class="btn-green">
          Зареєструватись
        </button>
      </form>
      <div v-else>{{ userCreated }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      isActive: false,
      userName: "",
      userPhone: "",
      error: "",
      userCreated: "",
      registration: true,
      reg: false
    };
  },
  methods: {
    open(event) {
      event.preventDefault();
      this.isActive = true;
    },
    close(event) {
      event.preventDefault();
      this.isActive = false;
      this.registration = true;
    },
    addUser(event) {
      event.preventDefault();
      if (this.userName.length < 2 && this.userPhone.length < 2) {
        this.error = "Ви ввели не всi даннi";
      } else {
        const user = {
          username: this.userName,
          phone: this.userPhone
        };
        this.userName = "";
        this.userPhone = "";
        console.log(user);
        this.postData(
          "https://api-sp.umh.com.ua/api/v1/project/hutorok/v2/userdata",
          user
        ).then(response => {
          if (response.code === 201) {
            this.userCreated = response.msg;
            this.registration = false;
            this.reg = true;
            this.registrationAnalytics();
          } else {
            this.error = "Користувач з таким телефоном вже існує";
          }
        });
      }
    },
    registrationAnalytics() {
      this.$gtag.event("click", {
        event_category: "hutorok",
        event_label: "registration"
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
.popup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
}
.popup-active {
  display: flex;
}
.popup-inner {
  min-height: 500px;
  max-width: 1000px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media (max-width: 1024px) {
    max-width: 95%;
  }
  @media (max-width: 600px) {
    min-height: 350px;
  }
}
.popup {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 280px;
  @media (max-width: 600px) {
    min-height: 240px;
  }
  &-open {
    background: #80ab53;
    border-radius: 50px;
    padding: 30px 57px;
    font-weight: 500;
    font-size: 18px;
    line-height: 110.3%;
    color: #ffffff;
    @media (max-width: 1200px) {
      padding: 20px 35px;
    }
    @media (max-width: 767px) {
      padding: 12px 29px;
      max-width: 60%;
      font-size: 14px;
      line-height: 110.3%;
      margin-bottom: 10px;
    }
  }

  &__title {
    font-family: "Chalkboard SE", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 35px;
    line-height: 50px;
    text-align: center;
    color: #80ab53;
    margin-bottom: 50px;
    @media (max-width: 600px) {
      margin-bottom: 0;
    }
  }
  &__close {
    position: absolute;
    top: 50px;
    right: 50px;
    background: transparent;
    @media (max-width: 600px) {
      top: 15px;
      right: 15px;
    }
  }
  &__input {
    height: 38px;
    border: none;
    width: 100%;
    border-bottom: 1px solid #69645a;
    margin-bottom: 30px;
    font-family: "Chalkboard SE", sans-serif;
    background: transparent;
    outline: none;
    &::placeholder {
      font-size: 16px;
      line-height: 20px;
      color: #80ab53;
      opacity: 0.7;
    }
    &:nth-last-child(3) {
      margin-bottom: 0;
    }
    @media (max-width: 600px) {
      margin-bottom: 15px;
    }
  }
  &__error {
    color: red;
    min-height: 20px;
  }
}
</style>

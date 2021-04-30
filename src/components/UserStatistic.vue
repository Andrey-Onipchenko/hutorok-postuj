<template>
  <div class="user-statistic">
    <div class="container">
      <h3 class="user-statistic__title">Статистика реєстрації учасникiв</h3>
      <div class="user-statistic__panel">
        <export-excel
          style="display: inline-block"
          class="user-statistic__btn"
          :data="json_data"
          :fields="json_fields"
          worksheet="My Worksheet"
          name="filename.xls"
        >
          Вивантажити в exel
        </export-excel>

        <button @click="getUsers()" class="user-statistic__btn">
          Вивести на екран
        </button>
      </div>
      <div v-if="users.length">
        <div style="text-align: center; margin-bottom: 15px">
          Загальна кiлькiсть учасникiв {{ users.length }}
        </div>
        <div class="users-out">
          <div class="users-out__head">
            <div class="users-out__cell">№</div>
            <div class="users-out__cell">Iм'я</div>
            <div class="users-out__cell">Телефон</div>
          </div>
          <div v-for="(i, index) in users" :key="i.id" class="users-out__row">
            <div class="users-out__cell">{{ index + 1 }}</div>
            <div class="users-out__cell">{{ i.name }}</div>
            <div class="users-out__cell">{{ i.phone }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserStatistic",
  data() {
    return {
      users: "",
      json_fields: {
        "Iм'я": "name",
        Телефон: "phone"
      },
      json_data: [],
      json_meta: [
        [
          {
            key: "charset",
            value: "utf-8"
          }
        ]
      ]
    };
  },
  methods: {

   getUsers(excel = false){
    let  formData = {
        auth: sessionStorage.login
      };

     this.postData("http://localhost:8000/users",formData).then(data => {
        excel ? (this.json_data = data.user) : (this.users = data.user);
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
  },
  mounted() {
    this.getUsers(true);
  }
};
</script>

<style lang="scss" scoped>
.user-statistic {
  &__title {
    text-align: center;
    font-size: 24px;
  }
  &__panel {
    text-align: center;
  }
  &__btn {
    padding: 10px 30px;
    margin: 15px;
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
    background: transparent;
    border: none;
    border-bottom: 2px solid #3160b6;
    cursor: pointer;
    transition: all 0.15s ease;
    background: #4a89dc;
    &:hover {
      background: #357bd8;
    }
  }
  .users-out {
    border: 1px solid #000;
    max-width: 500px;
    margin: 0 auto;
    &__head {
      display: flex;
      justify-content: space-between;
      .users-out__cell {
        background: #ccc;
      }
    }
    &__row {
      display: flex;
      justify-content: space-between;
    }
    &__cell {
      width: 100%;
      border: 1px solid black;
      padding: 5px 10px;
    }
  }
}
</style>

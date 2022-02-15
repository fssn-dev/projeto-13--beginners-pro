<template>
  <form action="" @submit="cadastrarMargemLucro()">
    <div class="container">
      <div class="input-container">
        <label for="">Margem de lucro em %</label>
        <input type="number" v-model="margemLucro" required />
      </div>
      <div class="non-input">
        <button>Definir</button>
      </div>
    </div>
  </form>
</template>

<script>
// import db from "../../db.json";

export default {
  name: "MargemLucro",
  data() {
    return {
      db: "",
      margemLucro: "",
    };
  },
  methods: {
    cadastrarMargemLucro() {
      this.setMargemLucro();
      this.margemLucro = "";
    },
    setMargemLucro() {
      this.db.db_ml[0].margemLucro = this.margemLucro;

      localStorage.setItem("burgeria_db", JSON.stringify(this.db));
    },
    setDB() {
      this.db = JSON.parse(localStorage.getItem("burgeria_db")) || "";
    },
  },
  created() {
    this.setDB();
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  margin: 5% auto;
  background-color: #9abdac91;
  border-radius: 5px;
  padding: 1%;
  border: 2px solid #2c3e50;
}

.input-container {
  margin: 1.5% 0;
  display: flex;
  padding: 2%;
  min-width: 24rem;
  justify-content: space-between;
  border-radius: 5px;
}

input {
  padding: 1% 2%;
  border-radius: 5px;
  margin-top: -0.7%;
  margin-left: 5%;
  max-width: 100%;
}

label {
  text-align: left;
  width: 50%;
  flex-wrap: wrap;
  min-width: fit-content;
}

.non-input {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

button {
  padding: 10% 30%;
  font-weight: bold;
  color: #2c3e50;
  margin: 5% 0 5% 0;
  font-size: 1.5rem;
}
</style>
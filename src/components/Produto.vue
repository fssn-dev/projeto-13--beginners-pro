<template>
  <form action="" @submit="cadastrarProduto()">
    <div class="container">
      <div class="input-container">
        <label for="">Código Produto</label>
        <input type="text" v-model="idProduto" disabled />
      </div>
      <div class="input-container">
        <label for="">Nome</label>
        <input type="text" v-model="nomeProduto" required />
      </div>
      <div class="input-container">
        <label for="">Descrição</label>
        <input type="text" v-model="descricao" required />
      </div>
      <div class="input-container">
        <label for="">Data Registro</label>
        <input type="text" v-model="dataRegistro" disabled />
      </div>
      <div class="non-input">
        <button @mouseenter="checkIdInput()">Cadastrar</button>
      </div>
    </div>
  </form>
</template>

<script>
import GenerateID from "../services/GenerateID.vue";

export default {
  name: "Produto",
  data() {
    return {
      db: "",
      idProduto: "",
      nomeProduto: "",
      descricao: "",
      dataRegistro: this.getDate(),
    };
  },
  components: GenerateID.methods.generateID,
  methods: {
    cadastrarProduto() {
      this.setProdutos();
      this.idProduto = "";
      this.nomeProduto = "";
      this.descricao = "";
      this.dataRegistro = "";
    },
    setProdutos() {
      this.db.db_produto.push({
        idProduto: this.idProduto,
        nomeProduto: this.nomeProduto,
        descricao: this.descricao,
        dataRegistro: this.dataRegistro,
      });
      localStorage.setItem("burgeria_db", JSON.stringify(this.db));
    },
    checkIdInput() {
      if (!this.idProduto) {
        this.produtoID();
      } else {
        return;
      }
    },
    produtoID() {
      this.idProduto = GenerateID.methods.generateID();
    },
    getDate() {
      let date = new Date(Date.now()).toLocaleString("pt-br", {
        day: "numeric",
        year: "numeric",
        month: "numeric",
      });
      return date;
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
  margin-left: 2%;
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
<template>
  <form action="" @submit="cadastrarFornecedor()">
    <div class="container">
      <div class="input-container">
        <label for="">Código Fornecedor</label>
        <input type="text" v-model="idFornecedor" disabled />
      </div>
      <div class="input-container">
        <label for="">Nome</label>
        <input type="text" v-model="nomeFornecedor" required />
      </div>
      <div class="input-container">
        <label for="">Nome Fantasia</label>
        <input type="text" v-model="nomeFantasia" required />
      </div>
      <div class="input-container">
        <label for="">CNPJ</label>
        <input type="text" v-model="cnpj" required />
      </div>
      <div class="non-input">
        <button @mouseenter="checkIdInput()">Cadastrar</button>
      </div>
    </div>
  </form>
</template>

<script>
import db from "../../db.json";
import GenerateID from "../services/GenerateID.vue";

export default {
  name: "Fornecedor",
  data() {
    return {
      idFornecedor: "",
      nomeFornecedor: "",
      nomeFantasia: "",
      cnpj: "",
    };
  },
  components: GenerateID.methods.generateID,
  methods: {
    cadastrarFornecedor() {
      this.setFornecedores();
      this.idFornecedor = "";
      this.nomeFornecedor = "";
      this.nomeFantasia = "";
      this.cnpj = "";
    },
    setFornecedores() {
      db.db_fornecedor.push({
        idFornecedor: this.idFornecedor,
        nomeFornecedor: this.nomeFornecedor,
        nomeFantasia: this.nomeFantasia,
        CNPJ: this.cnpj,
      });
      localStorage.setItem("burgeria_db", JSON.stringify(db));
    },
    checkIdInput() {
      if (!this.idFornecedor) {
        this.fornecedorID();
      } else {
        return;
      }
    },
    fornecedorID() {
      this.idFornecedor = GenerateID.methods.generateID();
    },
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
<template>
  <form action="" @submit.prevent="">
    <div class="container">
      <div class="input-container">
        <label for="">Produto</label>
        <select
          name="produto"
          id="selectProduto"
          @change="getCodigoProduto()"
          required
        >
          <option
            v-for="produto in produtos"
            v-bind:key="produto.idProduto"
            value="produto"
          >
            {{ produto.nomeProduto }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label for="">Fornecedor</label>
        <select name="fornecedor" id="selectFornecedor" required>
          <option
            v-for="fornecedor in fornecedores"
            v-bind:key="fornecedor.idFornecedor"
            value="produto"
          >
            {{ fornecedor.nomeFantasia }}
          </option>
        </select>
      </div>
      <div class="input-container">
        <label for="">Código Produto</label>
        <input type="text" v-model="codigoProduto" disabled required />
      </div>
      <div class="input-container">
        <label for="">Data Inclusão</label>
        <input type="text" v-model="dataInclusao" disabled />
      </div>
      <div class="input-container">
        <label for="">Data Validade</label>
        <input type="date" v-model="dataValidade" required />
      </div>
      <div class="input-container">
        <label for="">Quantidade</label>
        <input type="number" v-model="quantidade" required />
      </div>
      <div class="input-container">
        <label for="">Preço Custo</label>
        <input type="float" v-model="precoCusto" required />
      </div>
      <div class="non-input">
        <button @click="cadastrarEstoque(), getCodigoProduto()">
          Cadastrar
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "Estoque",
  data() {
    return {
      db: "",
      data: "",
      produtos: "",
      fornecedores: "",
      dataInclusao: this.getDate(),
      codigoProduto: "",
      dataValidade: "",
      quantidade: "",
      precoCusto: "",
      nomeProduto: "",
      fornecedorID: "",
    };
  },
  methods: {
    fetchData() {
      this.data = JSON.parse(localStorage.getItem("burgeria_db"));
      this.db = this.data;
      this.produtos = this.data.db_produto;
      this.fornecedores = this.data.db_fornecedor;
    },
    optionsProdutos() {
      return Object.keys(this.data.db_produto).map((key) => {
        let element = this.data.db_produto[key];
        return `${element.nomeProduto}`;
      });
    },
    optionsFornecedores() {
      return Object.keys(this.data.db_fornecedor).map((key) => {
        let element = this.data.db_fornecedor[key];
        this.fornecedorID = element.idFornecedor;
        return `${element.nomeFantasia}`;
      });
    },
    getDate() {
      let dateNow = new Date(Date.now()).toLocaleString("pt-br", {
        day: "numeric",
        year: "numeric",
        month: "numeric",
      });
      return dateNow;
    },
    getCodigoProduto() {
      let listaProdutos = document.getElementById("selectProduto");
      let index = listaProdutos.options.selectedIndex;

      let responseID = this.data.db_produto[index].idProduto;
      let responseName = this.data.db_produto[index].nomeProduto;

      this.codigoProduto = responseID;
      this.nomeProduto = responseName;
    },
    cadastrarEstoque() {
      this.setEstoque();
      this.codigoProduto = "";
      this.dataValidade = "";
      this.quantidade = "";
      this.precoCusto = "";
    },
    setEstoque() {
      this.db.db_estoque.push({
        idProduto: this.codigoProduto,
        idFornecedor: this.fornecedorID,
        nomeProduto: this.nomeProduto,
        dataInclusao: this.dataInclusao,
        dataValidade: this.dataValidade,
        quantidade: this.quantidade,
        preçoCusto: this.precoCusto,
      });
      localStorage.setItem("burgeria_db", JSON.stringify(this.db));
    },
  },
  created() {
    this.fetchData();
    this.optionsProdutos();
    this.optionsFornecedores();
  },
  mounted() {
    this.getCodigoProduto();
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

input,
select {
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
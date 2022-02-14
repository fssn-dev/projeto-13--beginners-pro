<template>
  <div class="container">
    <div class="pedido-header">
      <div class="input-container">
        <label for="">Buscar</label>
        <input id="buscar-input" type="text" />
      </div>
      <div class="input-container">
        <label for="">Quantidade</label>
        <input id="quantidade-input" type="text" />
        <button id="add-button">+</button>
      </div>
    </div>
    <textarea name="pedido" id="" cols="100" rows="16" width></textarea>
    <div class="non-input">
      <div class="pagamento">
        <button>Dinheiro</button> 
        <button>Débito</button>
        <button>Crédito</button>
        <button>PIX</button>
      </div>
      <button>Gerar Canhoto</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MontarPedido",
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  background-color: #9abdac91;
  border-radius: 5px;
  padding: 1%;
  border: 2px solid #2c3e50;
}
.pedido-header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 6rem;
  /* background-color: #333; */
  /* z-index: 9999; */
  padding: -1rem 0;
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
#buscar-input {
  width: 80rem;
  margin-left: -15%;
  margin: -1% -20% 1% 0;
}

#quantidade-input {
  width: 3rem;
  margin: -1% 0 1% -50%;
}

label {
  text-align: left;
  margin: 0 auto;
  width: 50%;
  flex-wrap: wrap;
  min-width: fit-content;
}

.non-input {
  width: 90%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1% auto;
}

.pagamento {
  width: 60%;
  display: flex;
  justify-content: space-between;
}

button,
#add-button {
  font-weight: bold;
  color: #2c3e50;
}

button {
  padding: 2% 5%;
  margin: 5% 0.5% 5% 0.5%;
  font-size: 1.5rem;
}

#add-button {
  margin: -1% 0 1% 2%;
  /* margin: auto 1%; */
  padding: 0 5%;
}
</style>
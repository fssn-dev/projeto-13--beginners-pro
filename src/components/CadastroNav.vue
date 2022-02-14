<template>
  <nav>
    <ul>
      <router-link to="/cadastro/fornecedor">Fornecedor</router-link>
      |
      <router-link to="/cadastro/produto">Produto</router-link>
      |
      <router-link to="/cadastro/estoque">Estoque</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "CadastroNav",
};
</script>

<style scoped>
nav {
  margin: -1% 0 1% 0;
}
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

a {
  margin: 0 0.5%;
}
</style>
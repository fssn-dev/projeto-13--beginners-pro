<template>
  <CadastroNav />
  <Home />
</template>

<script>
import CadastroNav from "../components/CadastroNav.vue";
import Home from "../views/Home.vue";

export default {
  name: "Cadastro",
  components: {
    CadastroNav,
    Home,
  },
};
</script>

<style scoped>
</style>
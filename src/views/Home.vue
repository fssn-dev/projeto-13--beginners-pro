<template>
  <div class="home">
    <img alt="Burgueria logo" src="../assets/logo.png" />
    <h1>' Burgueria 13</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
template {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  max-height: auto;
  max-width: auto;
}

.home {
  background-color: #ffff00;
  height: 78vh;
  width: auto;
}

h1 {
  font-size: 4rem;
}
</style>
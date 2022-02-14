<template>
  <footer>
    <div class="footer-info-wrapper">
      <ul>
        <li>Avenida Taquaral 1427</li>
        <li>Rua das Minas Claras 14</li>
        <li>Rodovia Armando Tenda Km 14,6</li>
      </ul>
      <ul>
        <li>(11) 97896-2634</li>
        <li>(14) 96735-0294</li>
        <li>(44) 97246-0217</li>
      </ul>
      <ul>
        <li>Gerente: Arnaldo Betumes</li>
        <li>Gerente: Marlon M. K. Rel</li>
        <li>Gerente: Tigor Onça da Silva</li>
      </ul>
    </div>
    <div class="footer-icon-wrapper">
      <a href="https://twitter.com/" target="_blank"
        ><img src="../assets/twitter-square-brands.svg" alt=""
      /></a>
      <a href="https://www.instagram.com/" target="_blank">
        <img src="../assets/instagram-square-brands.svg" alt="" />
      </a>
      <a href="https://www.facebook.com/" target="_blank">
        <img src="../assets/facebook-square-brands.svg" alt=""
      /></a>
      <a href="https://www.linkedin.com/" target="_blank">
        <img src="../assets/linkedin-brands.svg" alt=""
      /></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-info-wrapper {
  display: flex;
  width: 55%;
  height: auto;
  justify-content: space-between;
}

footer {
  position: fixed;
  bottom: 0px;
  background-color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: auto;
  width: 100vw;
  padding: 1% 2%;
  font-weight: bold;
}

ul {
  display: flex;
  flex-direction: column;
}

li {
  color: #fff;
  text-align: left;
}

.footer-icon-wrapper {
  display: flex;
  flex-direction: row;
}

a {
  padding: 0 1%;
}

img {
  height: 50px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(342deg)
    brightness(102%) contrast(102%);
}
</style>
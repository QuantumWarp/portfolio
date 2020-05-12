<template>
  <footer class="footer-section">
    <span class="powered-by">
      Powered by Vue.js
      <img src="@/assets/tech-icons/vuejs.svg">
    </span>

    <span class="copyright">
      &copy; {{ new Date().getFullYear() }} - John Lowther
    </span>
  </footer>
</template>

<style lang="scss" scoped>
.footer-section {
  height: 200px;
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.powered-by {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;

  > img {
    margin-left: 5px;
    height: 25px;
  }
}
</style>

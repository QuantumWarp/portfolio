<template>
  <footer class="footer-section">
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
</style>

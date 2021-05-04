<template>
  <div class="pageNotFound-container">
    <h2 class="pageNotFound-title">404</h2>
    <h3 class="pageNotFound-text">Vous vous êtes perdu ?</h3>
    <h3 class="pageNotFound-text">Essayez une autre adresse ou compétence</h3>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style>
.pageNotFound-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

h2.pageNotFound-title {
  text-align: center;
  padding: 1rem;
}

h3.pageNotFound-text {
  text-align: center;
  padding: 1rem;
}
</style>

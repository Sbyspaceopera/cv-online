<template>
  <h2 class="loader">En attente d'une compétence...</h2>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
h2.loader {
  text-align: center;
  position:relative;
  top:40%;
  padding-left: 3rem;
  padding-right: 3rem;
  animation: fade 1s ease-out infinite alternate;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

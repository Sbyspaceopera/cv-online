<template>
  <header>
    <ItemLeft />
    <router-link class="headLink" to="/">
      <img
        @mouseover="(hover = true), (dishover = false)"
        @mouseleave="(hover = false), (dishover = true)"
        :class="{ scaling: hover, discaling: dishover, logo: true }"
        alt="Logo"
        src="../assets/head.svg"
      />
    </router-link>
    <ItemRight />
  </header>
</template>

<script>
import ItemLeft from "./header/ItemLeft.vue";
import ItemRight from "./header/ItemRight.vue";
export default {
  name: "Header",
  components: {
    ItemRight,
    ItemLeft,
  },
  data() {
    return {
      hover: false,
      dishover: false,
    };
  },
};
</script>

<style>
/* .scaling {
  transform: scale(1.1);
}

.discaling {
  transform: scale(1);
} */

.logo {
  width: 10vw;
  min-width: 6rem;
  height: auto;
  justify-self: center;
  filter: drop-shadow(0 0 5px #ffa500) drop-shadow(0 0 15px #ffa500)
    drop-shadow(0 0 20px #ffa500) drop-shadow(0 0 40px #ffa500)
    drop-shadow(0 0 60px #ff0000) drop-shadow(0 0 10px #ff8d00)
    drop-shadow(0 0 98px #ff0000);
  padding: 1rem;
  /* transition: all 0.5s ease-in-out; */
  animation:logoScale 2s linear alternate infinite;
  animation-delay: 0.02s;
}

@keyframes logoScale {
  from{
    transform: scale(1);
  }to{
    transform: scale(1.04);
  }
}

header {
  display: grid;
  grid-template-columns: 40% 20% 40%;
  height: 20vh;
  perspective: 1500px;
  padding: 3rem;
}

.headLink {
  justify-self: center;
  display: flex;
}
</style>

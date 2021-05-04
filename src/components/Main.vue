<template>
  <main>
    <ContentLeft />
    <!-- <button type="button" :class="{madokaRunes : !traduction, futurFont : traduction}" @click.prevent="handleClick()">
            TRADUIRE
        </button> -->
    <ContentCenter />
    <ContentRight />
  </main>
</template>

<script>
import ContentLeft from "./main/ContentLeft.vue";
import ContentRight from "./main/ContentRight.vue";
import ContentCenter from "./main/ContentCenter.vue";

export default {
  name: "Main",
  methods: {
    handleClick() {
      this.handleTraduction();
    },
  },
  props: ["handleTraduction", "traduction"],
  components: { ContentLeft, ContentRight, ContentCenter },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: 40% 20% 40%;
  grid-template-rows: 20% 80%;
  perspective: 1500px;
  height: 70vh;
  padding: 3rem;
  z-index: 3;
}

button {
  justify-self: center;
  font-size: 2rem;
  text-align: center;
  padding: 1rem;
  width: 100%;
  min-width: 14rem;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  outline: none;
  margin: auto;
  border-style: none;
  background-color: rgba(156, 36, 47, 0.6);
  box-shadow: 0px 0px 20px 0px rgb(156, 36, 47);
  border-radius: 1rem;
}

button:hover {
  cursor: pointer;
}
</style>

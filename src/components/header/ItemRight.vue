<template>
  <div class="item-right">
    <a
      class="link-logo"
      href="https://www.linkedin.com/in/sebastiencorbisier"
      rel="noopener"
      target="_blank"
    >
      <Linkedin />
    </a>
    <a
      class="link-logo"
      href="https://github.com/Sbyspaceopera"
      rel="noopener"
      target="_blank"
    >
      <Github />
    </a>
  </div>
</template>

<script>
import Linkedin from "./itemRight/Linkedin.vue";
import Github from "./itemRight/Github.vue";

export default {
  name: "ItemRight",
  components: {
    Linkedin,
    Github,
  },
};
</script>

<style scoped>
.link-logo {
  align-self: center;
  justify-self: center;
  width: 55%;
}

.linkedin {
  filter: drop-shadow(0 0 5px #ffa500) drop-shadow(0 0 15px #ffa500);
  width: 4rem;
  justify-self: center;
}

.item-right {
  justify-self: center;
  background: linear-gradient(
    0deg,
    rgba(0, 168, 249, 0.6) 9%,
    rgba(0, 174, 181, 0.6) 12%,
    rgba(0, 168, 249, 0.6) 18%,
    rgba(0, 170, 226, 0.6) 60%,
    rgba(0, 174, 181, 0.6) 65%,
    rgba(52, 172, 255, 0.6) 76%,
    rgba(0, 174, 181, 0.6) 88%,
    rgba(0, 168, 249, 0.6) 96%
  );
  background-repeat: repeat;
  background-size: 100% 1000%;
  overflow: visible;

  width: 75%;
  height: 75%;
  transform: rotateX(-5deg) rotateY(-35deg) rotateZ(-7deg);

  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0px 0px 0px 3px #ffffff, 0px 0px 20px 0px rgb(0, 183, 255);
  border-radius: 2rem;

  transition-property: transform;
  transition-duration: 1s;
}

.item-right:hover {
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}
</style>

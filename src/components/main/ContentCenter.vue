<template>
  <div class="content-center">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ContentCenter",
};
</script>

<style>
.content-center {
  justify-self: center;
  position: relative;
  align-self: start;

  width: 100%;
  height: 92%;

  background: rgb(0, 168, 249);
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
  border-radius: 2rem;
  box-shadow: 0px 0px 0px 3px #ffffff, 0px 0px 20px 0px rgb(0, 183, 255);

  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;

  transition-property: transform;
  transition-duration: 1s;

  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.75s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>

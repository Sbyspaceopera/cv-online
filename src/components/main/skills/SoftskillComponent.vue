<template>
  <!-- <transition name="fade" mode="out-in" appear>
    <img class="icon-content-center" :key="softskill.icon" :src="`./../../../assets/${softskill.icon}`" />
    </transition> -->
  <transition name="fade" mode="out-in" appear>
    <h2 :key="softskill.name" class="softskill-name">{{ softskill.name }}</h2>
  </transition>
  <transition name="fade" mode="out-in" appear>
    <div
      :key="softskill.description"
      class="softskill-description"
      v-html="softskill.description"
    ></div>
  </transition>
</template>

<script>
export default {
  name: "SoftskillComponent",
  props: ["softskill"],
};
</script>

<style>
.icon-content-center {
  width: 15%;
}

.softskill-name{
  font-size: 1vw;
  margin: auto;
  text-align: center;
  text-shadow: 0 0 5px #fcb4ff, 0 0 15px #fcb4ff, 0 0 20px #fcb4ff,
    0 0 40px #fcb4ff, 0 0 60px #f944ff;
  letter-spacing: 0.5rem;
  padding:1rem;
}

.softskill-description {
  overflow: scroll;
  height: inherit;
  text-shadow: 0 0 7px #ffa500, 0 0 9px #ffa500;
  padding: 0 1.5rem 3rem 1.5rem;
}

.fade-enter-active {
  animation: fade 0.35s linear;
}

.fade-leave-active {
  animation: fade 0.35s linear reverse;
}

@keyframes fade {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
  }
}

p {
  margin-top: 1rem;
  font-size: 1.2rem;
}

.softskill-description::-webkit-scrollbar {
  width: 7px;
}

.softskill-description::-webkit-scrollbar-track {
  background: transparent;
}

.softskill-description::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 1rem 0 0 1rem;
  box-shadow: -1px 0 5px #ffd280;
}

.softskill-description::-webkit-scrollbar-thumb:hover {
  background: orange;
}

.softskill-description::-webkit-scrollbar-corner {
  background: transparent;
}

.softskill-description::-webkit-scrollbar-button {
  background: transparent;
}
</style>

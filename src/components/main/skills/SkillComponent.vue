<template>
  <transition name="fade" mode="out-in" appear>
    <h2 :key="skill.name" class="skill-name">{{ skill.name }}</h2>
  </transition>
  <progress max="100" :value="level"> {{ level }} </progress>
  <transition name="fade" mode="out-in" appear>
    <div
      :key="skill.description"
      class="skill-description"
      v-html="skill.description"
    ></div>
  </transition>
</template>

<script>
export default {
  name: "SkillComponent",
  props: ["skill", "level"],
};
</script>

<style>
progress {
  margin: auto;
  position: relative;
  left: 10%;
  width: 80%;
  height: 0.8rem;
  -webkit-appearance: none;
}

::-webkit-progress-value {
  background-color: #ffa500;
  border-radius: 1rem 0 0 1rem;
  box-shadow: 0 0 7px #ffa500;
  transition: width 1s ease-out;
}

::-webkit-progress-bar {
  background-color: #eee;
  border-radius: 1rem;
  box-shadow: 0 0 7px #eee;
}

.skill-name {
  font-size: 1vw;
  margin: auto;
  text-align: center;
  text-shadow: 0 0 5px #fcb4ff, 0 0 15px #fcb4ff, 0 0 20px #fcb4ff,
    0 0 40px #fcb4ff, 0 0 60px #f944ff;
  letter-spacing: 0.5rem;
  padding:1rem;
}

.skill-description {
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
  }
  to {
    opacity: 1;
  }
}

p {
  margin-top: 1rem;
  font-size: 1.2rem;
}

.skill-description::-webkit-scrollbar {
  width: 7px;
}

.skill-description::-webkit-scrollbar-track {
  background: transparent;
}

.skill-description::-webkit-scrollbar-thumb {
  background: white;
  border-radius: 1rem 0 0 1rem;
  box-shadow: -1px 0 5px #ffd280;
}

.skill-description::-webkit-scrollbar-thumb:hover {
  background: orange;
}

.skill-description::-webkit-scrollbar-corner {
  background: transparent;
}

.skill-description::-webkit-scrollbar-button {
  background: transparent;
}
</style>

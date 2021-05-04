<template>
  <div class="content-right">
    <h2>SOFTSKILLS</h2>
    <div class="skills">
      <div class="cell" v-for="(skill, index) in skills" :key="index">
        <router-link
          :to="skill.name"
          class="skill"
          @mouseover="(hover = selectItem(index)), (dishover = false)"
          @mouseleave="(hover = false), (dishover = true)"
        >
          <img
            :class="{
              skillHover: index === activeItem,
              skillDishover: dishover,
            }"
            :src="skill.image"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import agileScrum from "../../assets/group_48px.svg";
import smile from "../../assets/insert_emoticon_48px.svg";
import rpg from "../../assets/feather.svg";
import jeuxVideos from "../../assets/videogame_asset_48px.svg";
import musique from "../../assets/headset_48px.svg";
import cinema from "../../assets/local_movies_48px.svg";
import sciences from "../../assets/school_48px.svg";
/* import curieux from "../../assets/help_48px.svg"; */

export default {
  name: "ContentRight",
  data() {
    return {
      skills: [
        { name: "AgileSCRUM", image: agileScrum },
        { name: "Souriant", image: smile },
        { name: "RPG", image: rpg },
        { name: "JeuxVideos", image: jeuxVideos },
        { name: "Musique", image: musique },
        { name: "Cinema", image: cinema },
        { name: "Sciences", image: sciences },
        /* { name: "Curieux", image: curieux }, */
      ],
      hover: false,
      dishover: false,
      activeItem: null,
    };
  },
  methods: {
    selectItem(i) {
      this.activeItem = i;
    },
  },
};
</script>

<style scoped>
img {
  filter: drop-shadow(0 0 5px #ffa500) drop-shadow(5px 0 3px rgba(0, 0, 0, 0.5));
  transition: transform 0.5s;
}
.skillHover {
  transform: scale(1.2);
}
.skillDishover {
  transform: scale(1);
}

h2 {
  font-size: 1.7vw;
  margin: auto;
  text-align: center;
  text-shadow: 0 0 5px #fcb4ff, 0 0 15px #fcb4ff, 0 0 20px #fcb4ff,
    0 0 40px #fcb4ff, 0 0 60px #f944ff;

  letter-spacing: 0.5rem;
}
.content-right {
  justify-self: center;
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
  width: 75%;
  transform: rotateX(-5deg) rotateY(-35deg) rotateZ(0deg);
  box-shadow: 0px 0px 0px 3px #ffffff, 0px 0px 20px 0px rgb(0, 183, 255);
  border-radius: 2rem;
  height: 100%;

  display: grid;
  grid-template-rows: 10% 90%;

  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  transition-property: transform position;
  transition-duration: 1s;
}

.content-right:hover {
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.skills {
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 25% 25% 25% 25%;
  justify-content: center;
  align-items: center;
}

.cell {
  display: flex;
  justify-content: center;
  align-items: center;
}

.skill {
  width: 30%;
  align-self: center;
  justify-self: center;
}

.skill > * {
  width: 100%;
}
</style>

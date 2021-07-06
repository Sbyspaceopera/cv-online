<template>
  <div class="content-left">
    <h2 class="hardskills">HARDSKILLS</h2>
    <div class="skills">
      <div class="cell" v-for="(skill, index) in skills" :key="index">
        <router-link
          :to="skill.name"
          class="skill"
          @mouseover="(hover = selectItem(index)), (dishover = false)"
          @mouseleave="(hover = false), (dishover = true)"
        >
          <img
            style="width:100%;"
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
import javascript from "../../assets/Unofficial_JavaScript_logo_2.svg";
import reactJs from "../../assets/React-icon.svg";
import vueJs from "../../assets/Vue.js_Logo_2.svg";
import css3 from "../../assets/CSS3_logo_and_wordmark.svg";
import html5 from "../../assets/HTML5_logo_and_wordmark.svg";
import sass from "../../assets/sass-1.svg";
import git from "../../assets/git-scm-icon.svg";
import npm from "../../assets/Npm-logo.svg";
import babel from "../../assets/Babel_Logo.svg";
import webpack from "../../assets/webpack.svg";
import design from "../../assets/design.svg";
import jest from "../../assets/Jest-logo-vector-01.svg";
import nodejs from "../../assets/Node.js_logo.svg";
import python from "../../assets/Python-logo-notext.svg";
import php from "../../assets/php-logo.svg";

export default {
  name: "ContentLeft",
  data() {
    return {
      skills: [
        { name: "JavaScript", image: javascript },
        { name: "React", image: reactJs },
        { name: "VueJs", image: vueJs },
        { name: "CSS3", image: css3 },
        { name: "HTML5", image: html5 },
        { name: "Sass", image: sass },
        { name: "Git", image: git },
        { name: "NPM", image: npm },
        { name: "Babel", image: babel },
        { name: "Webpack", image: webpack },
        { name: "DesignTools", image: design },
        { name: "Jest", image: jest },
        { name: "NodeJs", image: nodejs },
        { name: "Python", image: python },
        { name: "PHP", image: php },
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

<style>
img {
  filter: drop-shadow(0 0 5px #ffa500)
    drop-shadow(-5px 0 3px rgba(0, 0, 0, 0.5));
  transition: transform 0.5s;
}
.skillHover {
  transform: scale(1.2);
}
.skillDishover {
  transform: scale(1);
}

h2.hardskills {
  font-size: 1.7vw;
  margin: auto;
  text-align: center;
  text-shadow: 0 0 5px #fcb4ff, 0 0 15px #fcb4ff, 0 0 20px #fcb4ff,
    0 0 40px #fcb4ff, 0 0 60px #f944ff;

  letter-spacing: 0.5rem;
}

.content-left {
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
  transform: rotateX(-5deg) rotateY(35deg) rotateZ(0deg);
  box-shadow: 0px 0px 0px 3px #ffffff, 0px 0px 20px 0px rgb(0, 183, 255);
  border-radius: 2rem;
  height: 100%;

  display: grid;
  grid-template-rows: 10% 90%;

  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;

  transition-property: transform;
  transition-duration: 1s;
}

.content-left:hover {
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.skills {
  height: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
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
  width: 60%;
  align-self: center;
  justify-self: center;
}

.skill > * {
  width: 100%;
}
</style>

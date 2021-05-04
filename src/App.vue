<!-- Layout.vue -->
<template>
  <div style="height:100%;width:100%;">
    <div style="height:100%;width:100%;" id="background"></div>
    <div style="height:100%;width:100%;" id="midground"></div>

    <div class="littleScreen futurFont">
      <img style="width:10rem;" src='./assets/head.svg' alt='Logo afro' />
      <h1>Ce site n'est pour l'instant disponible qu'en version de bureau.</h1>
      <p> Vous  pouvez toujours jetter un oeil sur mon Linkedin en attendant: <a href="https://www.linkedin.com/in/sebastiencorbisier/" rel="noopener" target="_blank">https://www.linkedin.com/in/sebastiencorbisier/</a></p>
    </div>

    <div class="app-container">
      <Header :class="{ madokaRunes: traduction, futurFont: !traduction }" />
      <Main
        :class="{ madokaRunes: traduction, futurFont: !traduction }"
        :handleTraduction="handleTraduction"
        :traduction="traduction"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer,
  },
  data() {
    return {
      traduction: false,
      littleScreen: false
    };
  },
  methods: {
    handleTraduction() {
      this.traduction = !this.traduction;
    },
  },
  created(){
    const windowWidth = document.body.clientWidth

    if(windowWidth < 1200){
      this.littleScreen = true;
    }else{
      this.littleScreen = false
    }

  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Audiowide&display=swap");

.littleScreen{
  text-align: center;
  padding:1rem;
  width:100%;
  height:100%;
  display:none;

}

.littleScreen > * {
  margin: 0 auto;  
}

.futurFont {
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500;
  color: #fff;
  font-family: "Audiowide", cursive;
}

@font-face {
  font-family: MadokaRunes;
  src: url("./assets/MadokaRunes-2.0.ttf") format("ttf");
}

.madokaRunes {
  text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500;
  color: #fff;
  font-family: MadokaRunes;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}
body {
  height: 100%;
  width:100%;
}
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
  font-weight: normal;
}

ol,
ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

#background {
  background: black url(./assets/background.png) repeat 5% 5%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -3;

  animation-name: STAR-MOVE;
  animation-duration: 800s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay:1ms;
  will-change: auto;
}

#midground {
  background: url(./assets/midground.png) repeat 20% 20%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
  will-change: auto;

  animation-name: STAR-MOVE;
  animation-duration: 600s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-delay:1ms;
}

@keyframes STAR-MOVE {
  from {
    background-position: 5% 5%;
  }
  to {
    background-position: 1300% 600%;
  }
}

@media screen and (max-width: 1199px) {
  .app-container{
    display:none;
  }

  .littleScreen{
    display:block;
    flex-direction: column;
    justify-items: center;
    flex-wrap: wrap;
  }

  .littleScreen a{
    color:orange;
  }

  .littleScreen > h1, p{
    word-wrap: break-word;
  }
}
</style>

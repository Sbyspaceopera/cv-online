<template>
  <div class="item-left">
    <h2 class="name">
      <span class="decorations">-</span> SEBASTIEN COR<span class="blink"
        >B</span
      >ISIER <span class="decorations">-</span>
    </h2>
    <h3 class="post">
      <span class="decorations">✸</span> <span class="blink2">F</span>ront-End
      Junior<span class="decorations">✸</span>
    </h3>
  </div>
</template>

<script>
export default {
  name: "ItemLeft",
};
</script>

<style>
.decorations {
  text-shadow: 0 0 5px #fcb4ff, 0 0 15px #fcb4ff, 0 0 20px #fcb4ff,
    0 0 40px #fcb4ff, 0 0 60px #f944ff;
}

h2.name {
  font-size: 1.5vw;
  color: white;
  text-align: center;
  margin-top: 1.5rem;
}
h3.post {
  color: white;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.5vw;
}

.linkedin {
  filter: drop-shadow(0 0 5px #ffa500) drop-shadow(0 0 15px #ffa500);
  width: 4rem;
  justify-self: center;
}

.item-left {
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
  height: 75%;
  transform: rotateX(-5deg) rotateY(35deg) rotateZ(7deg);
  box-shadow: 0px 0px 0px 3px #ffffff, 0px 0px 20px 0px rgb(0, 183, 255);
  border-radius: 2rem;

  transition-property: transform;
  transition-duration: 1s;
}

.item-left:hover {
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
}

.blink {
  animation: blinky 4.5s linear alternate-reverse infinite;
  animation-delay: 0.03s;
}

@keyframes blinky {
  0%,
  19.99%,
  25.01%,
  29.99%,
  36%,
  41%,
  43%,
  100% {
    opacity: 1;
    text-shadow: 0 0 7px #ffa500, 0 0 9px #ffa500;
    color: white;
  }
  20%,
  25%,
  30%,
  35%,
  40%,
  42% {
    text-shadow: none;
    color: lightgray;
    opacity: 0.8;
  }
}

.blink2 {
  animation: blinky2 4.5s linear alternate infinite;
  animation-delay: 0.03s;
}

@keyframes blinky2 {
  0%,
  19.99%,
  25.01%,
  29.99%,
  36%,
  41%,
  43%,
  100% {
    text-shadow: none;
    color: lightgray;
    opacity: 0.8;
  }
  20%,
  25%,
  30%,
  35%,
  40%,
  42% {
    opacity: 1;
    text-shadow: 0 0 7px #ffa500, 0 0 9px #ffa500;
    color: white;
  }
}
</style>

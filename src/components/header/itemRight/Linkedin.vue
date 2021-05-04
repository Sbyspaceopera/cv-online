<template>
  <svg
    @mouseover="(hover = true), (dishover = false)"
    @mouseleave="(hover = false), (dishover = true)"
    :class="{ changeColor: hover, changeColorReverse: dishover }"
    viewBox="0 0 500 503"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="linkedin">
      <path
        id="linkedin-logo"
        d="M326.262 188.353H177.553C170.433 188.353 164.659 193.953 164.659 200.856V350.356C164.659 357.259 170.433 362.851 177.553 362.851H326.262C333.382 362.851 339.157 357.252 339.157 350.356V200.856C339.157 193.953 333.382 188.353 326.262 188.353ZM191.576 334.385V255.826H217.688V334.385H191.576ZM204.639 245.104H204.471C195.704 245.104 190.041 239.07 190.041 231.529C190.041 223.821 195.879 217.955 204.814 217.955C213.742 217.955 219.244 223.821 219.412 231.529C219.405 239.07 213.742 245.104 204.639 245.104ZM311.847 334.385H285.735V292.365C285.735 281.804 281.951 274.6 272.511 274.6C265.293 274.6 260.997 279.457 259.112 284.152C258.425 285.827 258.25 288.175 258.25 290.522V334.392H232.138C232.138 334.392 232.482 263.205 232.138 255.833H258.25V266.955C261.719 261.601 267.935 253.99 281.783 253.99C298.959 253.99 311.84 265.217 311.84 289.345V334.385H311.847Z"
        fill="white"
      />
      <g :class="{ circleGroup: hover }" id="circle-group">
        <circle
          :class="{ circleAnimated: hover, circleReverse: dishover }"
          id="circle"
          cx="252.507"
          cy="274.385"
          r="151.714"
          stroke="white"
          stroke-width="20"
        />
        <path
          :class="{ vector1Animated: hover, vector1AnimatedReverse: dishover }"
          id="vector-1"
          d="M249.207 130.792C294.753 131.3 327.851 147.018 348.028 165.124C375.141 189.454 395.301 232.901 396.812 282.002"
          stroke="white"
          stroke-width="20"
        />
        <path
          :class="{ vector2Animated: hover, vector2AnimatedReverse: dishover }"
          id="vector-2"
          d="M245.796 115.867V162.847"
          stroke="white"
          stroke-width="20"
        />
        <path
          :class="{ vector3Animated: hover, vector3AnimatedReverse: dishover }"
          id="vector-3"
          d="M275.198 12L267.528 119.383L318.663 136.002M318.663 136.002L336.56 95.0939M318.663 136.002L359.571 175.631M359.571 175.631L445.221 119.383M359.571 175.631L385.138 225.487M385.138 225.487L436.273 202.477M385.138 225.487L396.643 261.282H495.077"
          stroke="white"
          stroke-width="15"
        />
        <path
          :class="{ vector4Animated: hover, vector4AnimatedReverse: dishover }"
          id="vector-4"
          d="M86 294.519C89.5501 330.346 110.289 372.5 142.248 399.345C174.207 426.191 207.947 440.06 245.796 440.253"
          stroke="white"
          stroke-width="20"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "Linkedin",
  /* mounted: function() {
    const circle = document.querySelector("#circle");
    const vector1 = document.querySelector("#vector-1");
    const vector2 = document.querySelector("#vector-2");
    const vector3 = document.querySelector("#vector-3");
    const vector4 = document.querySelector("#vector-4");

    console.log("circle " + circle.getTotalLength());
    console.log("vector1 " + vector1.getTotalLength());
    console.log("vector2 " + vector2.getTotalLength());
    console.log("vector3 " + vector3.getTotalLength());
    console.log("vector4 " + vector4.getTotalLength());
  }, */
  data() {
    return {
      hover: false,
      dishover: false,
    };
  },
};
</script>

<style>
svg {
  filter: drop-shadow(0 0 5px #ffa500) drop-shadow(5px 0 3px rgba(0, 0, 0, 0.5));
  width: 100%;
  height: auto;
}

svg.changeColor {
  animation: changeColor 1s linear forwards;
}

@keyframes changeColor {
  from {
    filter: drop-shadow(0 0 5px #ffa500)
      drop-shadow(5px 0 3px rgba(0, 0, 0, 0.5));
  }
  to {
    filter: drop-shadow(0 0 15px #f944ff)
      drop-shadow(5px 0 3px rgba(0, 0, 0, 0.5));
  }
}

svg.changeColorReverse {
  animation: changeColorReverse 1s linear forwards;
}

@keyframes changeColorReverse {
  from {
    filter: drop-shadow(0 0 15px #f944ff)
      drop-shadow(5px 0 3px rgba(0, 0, 0, 0.5));
  }
  to {
    filter: drop-shadow(0 0 5px #ffa500)
      drop-shadow(5px 0 3px rgba(0, 0, 0, 0.5));
  }
}

#circle-group {
  filter: drop-shadow(0 0 15px #f944ff)
    drop-shadow(5px 0 3px rgba(0, 0, 0, 0.5));
}

#vector-1 {
  stroke-dasharray: 237;
  stroke-dashoffset: 237;
  transform-origin: center;
  transform-box: view-box;
}

#vector-1.vector1AnimatedReverse {
  animation: vector1AnimatedReverse 1s linear forwards;
}
@keyframes vector1AnimatedReverse {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 237;
  }
}

.vector1Animated {
  animation: vector1Animated 1s linear forwards;
}
@keyframes vector1Animated {
  from {
    stroke-dashoffset: 237;
  }
  to {
    stroke-dashoffset: 0;
  }
}

#vector-2 {
  stroke-dasharray: 47;
  stroke-dashoffset: 47;
  transform-origin: center;
  transform-box: view-box;
}
#vector-2.vector2AnimatedReverse {
  animation: vector2AnimatedReverse 1s linear forwards;
}
@keyframes vector2AnimatedReverse {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 47;
  }
}
.vector2Animated {
  animation: vector2Animated 1s linear forwards;
}
@keyframes vector2Animated {
  from {
    stroke-dashoffset: 47;
  }
  to {
    stroke-dashoffset: 0;
  }
}

#vector-3 {
  stroke-dasharray: 614;
  stroke-dashoffset: 614;
  transform-origin: center;
  transform-box: view-box;
}
#vector-3.vector3AnimatedReverse {
  animation: vector3AnimatedReverse 1s linear forwards;
}
@keyframes vector3AnimatedReverse {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 614;
  }
}
.vector3Animated {
  animation: vector3Animated 2s linear forwards;
}
@keyframes vector3Animated {
  from {
    stroke-dashoffset: 614;
  }
  to {
    stroke-dashoffset: 0;
  }
}

#vector-4 {
  stroke-dasharray: 236;
  stroke-dashoffset: 236;
  transform-origin: center;
  transform-box: view-box;
}

#vector-4.vector4AnimatedReverse {
  animation: vector4AnimatedReverse 1s linear forwards;
}
@keyframes vector4AnimatedReverse {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 236;
  }
}
.vector4Animated {
  animation: vector4Animated 1s linear forwards;
}
@keyframes vector4Animated {
  from {
    stroke-dashoffset: 236;
  }
  to {
    stroke-dashoffset: 0;
  }
}

#circle {
  stroke-dasharray: 953;
  stroke-dashoffset: 953;
  transform-origin: center;
  transform-box: view-box;
}

#circle.circleReverse {
  animation: circleAnimatedOut 1s linear forwards;
}

.circleAnimated {
  animation: circleAnimated 1s linear forwards;
}

@keyframes circleAnimated {
  from {
    stroke-dashoffset: 953;
  }
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes circleAnimatedOut {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 953;
  }
}
</style>

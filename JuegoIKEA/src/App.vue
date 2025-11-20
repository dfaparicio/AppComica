<template>
  


    <q-carousel
   
      class="carrusel"
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
    >
      <q-carousel-slide
        v-for="(escena, index) in escenas"
        :key="index"
        :name="index + 1"
      >
        <div class="absolute-full">
          <CardFondo :imagen="escena.fondo" :titulo="escena.titulo">
            <div class="Contenido">
              <div class="Billy relative-position">
                <div><img :src="escena.imgBilly" /></div>
              </div>
              <div class="Caja">
                <img :src="escena.imgIkea" />
              </div>
              <DivMensaje class="BuBilly" :texto="escena.bubbleBilly" />
              <DivMensaje2 class="BuIkea" :texto="escena.bubbleIkea" />
              <DivMensaje3 class="Narrador" :texto="escena.narrador" />
            </div>
          </CardFondo>
        </div>
      </q-carousel-slide>

      <template v-slot:control>
        <q-carousel-control
          position="top-right"
          :offset="[18, 18]"
          class="text-white rounded-borders"
          style="background: rgba(0, 0, 0, 0.3); padding: 4px 8px"
        >
          <q-toggle
            class="text-white"
            dense
            dark
            color="orange"
            v-model="autoplay"
            label="Auto Play"
          />
        </q-carousel-control>

        <q-carousel-control
          position="bottom-right"
          :offset="[18, 18]"
          class="q-gutter-xs"
        >
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_back"
            @click="$refs.carousel.previous()"
          />
          <q-btn
            push
            round
            dense
            color="orange"
            text-color="black"
            icon="arrow_forward"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>
    </q-carousel>

</template>

<script setup>
import { ref } from "vue";
import CardFondo from "./components/CardFondo.vue";
import DivMensaje from "./components/DivMensaje.vue";
import DivMensaje2 from "./components/DivMensaje2.vue";
import DivMensaje3 from "./components/DivMensaje3.vue";
import CardInicio from "./components/CardInicio.vue";
import BotonIniciar from "./components/BotonIniciar.vue";

// IMG
import Fondo from "./assets/Fondo.png";
import HolaBilly from "./assets/HolaBilly.png";
import HolaCaja from "./assets/HolaCaja.png";
import BillyIng from "./assets/BillyIng.png";
import IkeaFeliz from "./assets/IkeaFeliz.png";
import Comienzo from "./assets/Comienzo.png";
import Llevando from "./assets/Llevando.png";
import Arreglando from "./assets/Arreglando.png";
import Colocando from "./assets/Colocando.png";
import Completo from "./assets/Completo.png";
import Mejorando from "./assets/Mejorando.png";
import Asustado from "./assets/Asustado.png";
import BillyAsustado from "./assets/BillyAsustado.png";
import Llorando from "./assets/Llorando.png";
import LlorandoIkea from "./assets/LlorandoIkea.png";
import Respira from "./assets/Respira.png";

const slide = ref(1);
const autoplay = ref(false);
const Intro = ref(true);

function MostarCarrusel() {
  Intro.value = false;
}

const escenas = [
  {
    titulo: "EL MARTILLO LLEGA A LA TIENDA",
    bubbleBilly: "¡Hola IKEA! Estoy listo para ensamblarte y protegerte.",
    bubbleIkea: "…Espero estar lista para esto…",
    narrador:
      "Billy, el martillo valiente, llega decidido mientras IKEA, la estantería, todavía empaquetada, observa nerviosa lo que le espera.",
    imgBilly: HolaBilly,
    imgIkea: HolaCaja,
    fondo: Fondo,
  },
  {
    titulo: "PRIMEROS GOLPES Y CONFUSIÓN",
    bubbleBilly: "¡Vamos IKEA, mantente firme! Esto es solo un pequeño ajuste.",
    bubbleIkea: "¡Aaah! Mis tablas se mueven demasiado…",
    narrador:
      "Billy da los primeros golpes para ensamblar a IKEA, pero la estantería siente cada impacto y se tambalea ligeramente, mostrando la fragilidad del proceso.",
    imgBilly: BillyIng,
    imgIkea: IkeaFeliz,
    fondo: Fondo,
  },
  {
    titulo: "UN ERROR PEQUEÑO, UN GRAN TAMBALÉO",
    bubbleBilly: "¡Ups! Creo que esa tabla va en otro lado…",
    bubbleIkea: "¡Ay! Me tambaleo… ten cuidado, Billy.",
    narrador:
      "Billy intenta corregir el error, y IKEA se tambalea un poco, mostrando que ensamblar requiere paciencia y precisión.",
    imgBilly: BillyIng,
    imgIkea: Comienzo,
    fondo: Fondo,
  },
  {
    titulo: "MUDANZA TEMERARIA",
    bubbleBilly: "¡Aguanta IKEA! ¡Voy a protegerte hasta la nueva casa!",
    bubbleIkea: "¡No me dejes caer, Billy!",
    narrador:
      "Durante la mudanza, Billy sostiene a IKEA con cuidado mientras la estantería siente cada sacudida, temiendo romperse.",
    imgBilly: BillyIng,
    imgIkea: Llevando,
    fondo: Fondo,
  },
  {
    titulo: "PRIMEROS RAYONES Y SUSTOS",
    bubbleBilly: "¡Tranquila IKEA! Es solo un rayón, nada grave.",
    bubbleIkea: "¡Billy! Me lastimaste un poco… estoy un poco asustada.",
    narrador:
      "Billy intenta arreglar los golpes y rayones, mientras IKEA siente dolor pero confía en su amigo martillo.",
    imgBilly: BillyIng,
    imgIkea: Arreglando,
    fondo: Fondo,
  },
  {
    titulo: "AJUSTES FINALES",
    bubbleBilly:
      "¡Listo IKEA! Estás casi perfecta, firme y lista para cualquier cosa.",
    bubbleIkea: "Gracias Billy… me siento mucho mejor ahora.",
    narrador:
      "Billy termina los ajustes y asegura que IKEA esté estable, lista para almacenar libros, juguetes y recuerdos.",
    imgBilly: BillyIng,
    imgIkea: Colocando,
    fondo: Fondo,
  },
  {
    titulo: "DESCANSO EN LA NUEVA HABITACIÓN",
    bubbleBilly: "Respira IKEA… lo hicimos bien por hoy.",
    bubbleIkea: "Sí… gracias por cuidarme, Billy.",
    narrador:
      "Después de un día largo, Billy y IKEA descansan en la nueva habitación, disfrutando del logro de estar ensamblados y seguros.",
    imgBilly: Respira,
    imgIkea: Completo,
    fondo: Fondo,
  },
  {
    titulo: "PEQUEÑOS INCIDENTES",
    bubbleBilly: "¡Cuidado IKEA! Ese juguete casi te derriba.",
    bubbleIkea: "¡Ay! Gracias Billy… eres mi héroe.",
    narrador:
      "A pesar de los pequeños golpes diarios, Billy protege a IKEA y la estantería empieza a acostumbrarse a su nuevo hogar.",
    imgBilly: BillyIng,
    imgIkea: Mejorando,
    fondo: Fondo,
  },
  {
    titulo: "DESPEDIDA INESPERADA",
    bubbleBilly: "¿Qué pasa IKEA? ¡No me digas que te llevan…",
    bubbleIkea: "Billy… me van a donar a otra familia… estoy un poco asustada.",
    narrador:
      "Billy se entera de que IKEA será donada, y la estantería siente miedo y emoción al mismo tiempo por su nueva vida.",
    imgBilly: BillyAsustado,
    imgIkea: Asustado,
    fondo: Fondo,
  },
  {
    titulo: "NUEVA FAMILIA, NUEVA VIDA",
    bubbleBilly:
      "No importa dónde estés IKEA… siempre te protegeré en espíritu.",
    bubbleIkea:
      "Gracias Billy… esta nueva familia me arregla y me cuida, ¡me siento completa!",
    narrador:
      "IKEA es donada a una nueva familia que la arregla y la cuida con cariño. Billy, el martillo valiente, se despide orgulloso, sabiendo que hizo un gran trabajo.",
    imgBilly: Llorando,
    imgIkea: LlorandoIkea,
    fondo: Fondo,
  },
];
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}

html,
body {
  width: 100%;
  min-height: 100%;
  overflow-x: hidden;
  background: white;
}

/* ---------- APP ---------- */
#app {
  width: 100%;
  max-width: 1920px;
  min-height: 100%;
  background: white;
}

.carrusel {
  width: 100%;
  height: 100vh;
}

.Contenido {
  display: flex;
  justify-content: center;
  gap: 35%;
}

.BuBilly {
  position: absolute;
  left: 10%;
  top: 30%;
}

.BuIkea {
  position: absolute;
  right: 10%;
  top: 30%;
}
.Narrador {
  position: absolute;
  top: 15%;
  left: 40%;
}

.intro-container {
  position: relative;
  width: 100vw;
  height: 100vh;
}
.boton-wrapper {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
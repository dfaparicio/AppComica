<template>
  <div>
    <q-carousel
      class="carrusel"
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      ref="carousel"
      infinite
    >
      <q-carousel-slide :name="1">
        <div class="absolute-full">
          <DivMensaje
            texto="Hola, soy Billy,               Hoy me asignaron ensamblar una estantería de IKEA. Todo parecía
              simple… hasta que vi esa montaña de tablas y tornillos. ¿Quién
              diseñó esto, un troll?"
          />
          <CardFondo :imagen="Fondo" titulo="EL MARTILLO VALIENTE E IKEA">
            <div class="Contenido">
              <div class="Billy">
                <div><img :src="HolaBilly" /></div>
              </div>
              <div class="Caja">
                <img :src="HolaCaja" />
              </div>
            </div>
          </CardFondo>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="2">
        <div class="absolute-full">
          <DivMensaje texto="Hola" />
          <CardFondo :imagen="FondoD" titulo="EL MARTILLO VALIENTE E IKEA">
            <div class="Contenido">
              <div class="Billy">
                <div><img :src="Explicando" /></div>
              </div>
              <div class="Caja">
                <DivMensaje2 texto="Hola" />
                <img :src="Feliz" />
              </div>
            </div>
          </CardFondo>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="3">
        <div class="absolute-full">
          <DivMensaje texto="Hola" />
          <CardFondo :imagen="Fondo" titulo="EL MARTILLO VALIENTE E IKEA">
            <div class="Contenido">
              <div class="Billy">
                <div><img :src="HolaBilly" /></div>
              </div>
              <div class="Caja">
                <DivMensaje2 texto="Hola" />
                <img :src="Feliz" />
              </div>
              >
            </div>
          </CardFondo>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="4">
        <div class="absolute-full">
          <DivMensaje texto="Hola" />
          <CardFondo :imagen="Fondo" titulo="EL MARTILLO VALIENTE E IKEA">
            <div class="Contenido">
              <div class="Billy">
                <div><img :src="HolaBilly" /></div>
              </div>
              <div class="Caja">
                <DivMensaje2 texto="Hola" />
                <img :src="Feliz" />
              </div>
            </div>
          </CardFondo>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="5">
        <div class="absolute-full">
          <DivMensaje texto="Hola" />
          <CardFondo :imagen="Fondo" titulo="EL MARTILLO VALIENTE E IKEA">
            <div class="Contenido">
              <div class="Billy">
                <div><img :src="HolaBilly" /></div>
              </div>
              <div class="Caja">
                <DivMensaje2 texto="Hola" />
                <img :src="Feliz" />
              </div>
            </div>
          </CardFondo>
        </div>
      </q-carousel-slide>

      <q-carousel-slide :name="6">
        <div class="absolute-full">
          <DivMensaje texto="Hola" />
          <CardFondo :imagen="Fondo" titulo="EL MARTILLO VALIENTE E IKEA">
            <div class="Contenido">
              <div class="Billy">
                <div><img :src="HolaBilly" /></div>
              </div>
              <div class="Caja">
                <DivMensaje2 texto="Hola" />
                <img :src="Feliz" />
              </div>
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
  </div>
</template>

<script setup>
import { ref } from "vue";
import CardFondo from "./components/CardFondo.vue";
import DivMensaje from "./components/DivMensaje.vue";
import DivMensaje2 from "./components/DivMensaje2.vue";

// IMG
import Fondo from "./assets/Fondo.png";
import FondoD from "./assets/FondoDesespero.png";
import HolaBilly from "./assets/HolaBilly.png";
import HolaCaja from "./assets/HolaCaja.png";
import Explicando from "./assets/ExplicandoBilly.png";
import Feliz from "./assets/Feliz.png";

const slide = ref(1);
const autoplay = ref(false);
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
  justify-content: space-around;
}
.Billy {
  position: relative;
}

.comic-bubble {
  position: absolute;
  top: 45%;
  left: 15%;
}

.comic-bubble2 {
  position: absolute;
  right: 25%;
}
</style>

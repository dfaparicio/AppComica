<template>
  <div>
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 100vh; overflow: hidden"
      class="shadow-2 rounded-borders"
    >
      <!-- ========= ENCABEZADO ========= -->
      <q-header bordered class="bg-white">
        <q-toolbar
          class="text-primary items-center q-gutter-md row justify-center q-pa-md"
        >
          <q-avatar>
            <img :src="Logo" />
          </q-avatar>

          <div class="text-h3">IVAverso</div>
        </q-toolbar>
      </q-header>

      <!-- ======== PIE DE PÁGINA ====== -->
      <q-footer bordered class="bg-grey-3 text-primary">
        <q-tabs
          no-caps
          active-color="primary"
          indicator-color="transparent"
          class="text-grey-8"
          v-model="tab"
        >
          <q-tab name="parati" label="Para tí" />
          <q-tab name="tendencias" label="Tendencias" />
        </q-tabs>
      </q-footer>

      <!-- ======= CUERPO  ======= -->
      <q-page-container>
        <q-page>
          <!-- ======= Contenido  ======= -->

          <!-- Contenido PARA TI -->
          <div v-show="tab === 'parati'">
            <div class="contenedor-cards">
              <CardParaTi
                v-for="(card, index) in infoCards"
                :key="index"
                :card="card"
              />
            </div>
          </div>

          <!-- Contenido TENDENCIAS -->
          <div v-show="tab === 'tendencias'" class="column justify-center q-gutter-xl">
            <div><h3 class="text-center">TENDENCIAS</h3></div>

            <div class="column justify-center q-gutter-md">
              <!-- LIKES -->
              <div class="row justify-center q-gutter-md">
                <CardsLikes
                  v-for="(t, i) in top"
                  :key="i"
                  :colorFondo="'white'"
                  :textoColor="'black'"
                  :item="t"
                />
              </div>

              <!-- COMPARTIDOS -->
              <div class="row justify-center q-gutter-md">
                <CardsLikes
                  v-for="(t, i) in top"
                  :key="i"
                  :colorFondo="'white'"
                  :textoColor="'black'"
                  :item="t"
                />
              </div>

              <!-- GLOBAL -->
              <div class="row justify-center q-gutter-md">
                <CardsLikes
                  v-for="(t, i) in top"
                  :key="i"
                  :colorFondo="'white'"
                  :textoColor="'black'"
                  :item="t"
                />
              </div>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>


<script setup>
import { ref } from "vue";
import Logo from "./assets/Logo.png";
import CardsLikes from "./components/CardsLikes.vue";
import CardParaTi from "./components/CardParaTi.vue";
import cardsParati from "./data/cards.js";

const infoCards = ref(cardsParati.value);

const tab = ref("parati");

const top = [
  {
    emoji: "🥇",
    title: "Primer Lugar",
    img: Logo,
    lorem: "Descripción del primer lugar",
  },
  {
    emoji: "🥈",
    title: "Segundo Lugar",
    img: Logo,
    lorem: "Descripción del segundo lugar",
  },
  {
    emoji: "🥉",
    title: "Tercer Lugar",
    img: Logo,
    lorem: "Descripción del tercer lugar",
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

.q-avatar {
  width: 150px;
  height: auto;
}
</style>

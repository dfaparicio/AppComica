<template>
  <div>
    <q-layout view="lHh lpr lFf" container style="height: 100vh; overflow: hidden" class="shadow-2 rounded-borders">
      <!-- ========= ENCABEZADO ========= -->
      <q-header bordered class="bg-white">
        <q-toolbar class="text-primary items-center q-gutter-md row justify-center q-pa-md">
          <q-avatar>
            <img :src="LogoPag" />
          </q-avatar>

          <div class="text-h3">IVAverso</div>
        </q-toolbar>
      </q-header>

      <!-- ======== PIE DE PÁGINA ====== -->
      <q-footer bordered class="bg-grey-3 text-primary">
        <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" v-model="tab">
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

            <div class="contenedor-cards row q-gutter-md justify-evenly q-pa-lg">
              <CardParaTi v-for="card in infoCards" :key="card.nombreUsuario" :card="card" />
            </div>
          </div>

          <!-- Contenido TENDENCIAS -->
          <div v-show="tab === 'tendencias'" class="column justify-center q-gutter-xl">
            <div>
              <h3 class="text-center">TENDENCIAS</h3>
            </div>

            <div class="row justify-around q-gutter-md">

              <!-- LIKES -->
              <div class=" ordenar column justify-center items-center q-gutter-md">
                <div>
                  <h3 class="q-pb-xl">Likes</h3>
                </div>
                <div>
                  <CardsLikes v-for="(item, i) in Likes" :key="i" :item="item" :imgTopLeft="LikeImg"
                    :imgTopRight="LikeImg" :imgBottomLeft="LikeImg" :imgBottomRight="LikeImg" />
                </div>
              </div>

              <!-- COMENTARIOS -->
              <div class=" ordenar column justify-center items-center q-gutter-md">
                <div>
                  <h3 class="q-pb-xl">Comentarios</h3>
                </div>
                <div>
                  <CardsLikes v-for="(item, i) in Comentarios" :key="i" :item="item" :imgTopLeft="ComentarioImg"
                    :imgTopRight="ComentarioImg" :imgBottomLeft="ComentarioImg" :imgBottomRight="ComentarioImg" />
                </div>
              </div>

              <!-- COMAPRTIDOS -->
              <div class=" ordenar column justify-center items-center q-gutter-md">
                <div>
                  <h3 class="q-pb-xl">Compartidos</h3>
                </div>
                <div>
                  <CardsLikes v-for="(item, i) in Compartidos" :key="i" :item="item" :imgTopLeft="CompartidoImg"
                    :imgTopRight="CompartidoImg" :imgBottomLeft="CompartidoImg" :imgBottomRight="CompartidoImg" />
                </div>
              </div>
            </div>

            <!-- GLOBAL -->
            <div class=" column justify-center items-center q-gutter-md">
              <div>
                <h3 class="q-pb-xl">Global</h3>
              </div>
              <div>
                <CardsLikes v-for="(item, i) in Global" :key="i" :item="item" :imgTopLeft="GlobalImg"
                  :imgTopRight="GlobalImg" :imgBottomLeft="GlobalImg" :imgBottomRight="GlobalImg" />
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

// DIEGO
import LogoPag from "./assets/Logo.png";
import CardsLikes from "./components/CardsLikes.vue";
import LikeImg from "./assets/Likes.png";
import ComentarioImg from "./assets/Comentarios.png";
import CompartidoImg from "./assets/Compartidos.png";
import GlobalImg from "./assets/Global.png";

// ANDRES
import CardParaTi from "./components/CardParaTi.vue";
const infoCards = ref(cardsParati.value);
import cardsParati from "./data/cards.js";

const tab = ref("parati");
import { Likes, Comentarios, Compartidos, Global } from "./data/CardsTop.js";
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

h3 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.text-h3 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.ordenar{
  margin: 0 !important;
}
</style>

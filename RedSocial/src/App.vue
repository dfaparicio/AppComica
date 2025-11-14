<template>
  <div>
    <div class="q-pa-md">
      <q-layout
        view="lHh lpr lFf"
        container
        style="height: 400px"
        class="shadow-2 rounded-borders"
      >
        <!-- ========= ENCABEZADO ========= -->
        <q-header bordered class="bg-grey-3 text-primary">
          <q-toolbar>
            <q-toolbar-title class="text-center">
              <q-avatar>
                <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
              </q-avatar>
              Quasar Framework
            </q-toolbar-title>
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
          <q-page class="q-pa-md">
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
            <div v-show="tab === 'tendencias'">
              <h4>Tendencias</h4>
              <p>Aquí van las cosas populares del momento.</p>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";

const tab = ref("parati");

import CardParaTi from "./components/CardParaTi.vue";
import cardsParati  from "./data/cards.js";

const infoCards = ref(cardsParati.value);

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
}
</style>

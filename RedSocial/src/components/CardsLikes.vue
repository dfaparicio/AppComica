<template>
  <q-card class="my-card">

    <q-img :src="item.fotoPerfil" class="card-img">

      <img :src="Like" class="like-icon like-top-left" />
      <img :src="Like" class="like-icon like-top-right" />
      <img :src="Like" class="like-icon like-bottom-left" />
      <img :src="Like" class="like-icon like-bottom-right" />

      <div class="absolute-bottom text-subtitle2 text-center">

        <div class="flex items-center">
          <div :class="colorTexto + ' ' + tamañoEmoji">
            {{ item.emoji }}
          </div>

          <div :class="colorTexto + ' ' + tamañoLetra">
            {{ item.title }}
          </div>
        </div>

        <div :class="colorTexto + ' ' + tamañoLetra">
          {{ item.nombreUsuario.toUpperCase() }}
        </div>

      </div>

    </q-img>

  </q-card>
</template>



<script setup>

import { QImg, QCard } from "quasar";
import Like from "@/assets/Likes.png";

defineProps({
  item: {
    type: Object,
    required: true
  },
  colorTexto: {
    type: String,
    default: "text-white"
  },
  colorFondo: {
    type: String,
    default: "bg-black"
  },
  tamañoLetra: {
    type: String,
    default: "text-h6"
  },
  tamañoEmoji: {
    type: String,
    default: "text-h3"
  }
});
</script>

<style scoped>
.my-card {
  width: 250px;
}

.card-img {
  height: 250px;
}

.like-icon {
  position: absolute;
  width: 26px;
  height: 26px;
  z-index: 20;
  object-fit: contain;
}

.like-top-left {
  top: 2px;
  left: 2px;
  transform: rotate(-50deg);
}

.like-top-right {
  top: 2px;
  right: 2px;
   transform: rotate(50deg);
}

.like-bottom-left {
  bottom: 2px;
  left: 2px;
   transform: rotate(50deg);
}

.like-bottom-right {
  bottom: 2px;
  right: 2px;
  transform: rotate(-50deg);
}
</style>

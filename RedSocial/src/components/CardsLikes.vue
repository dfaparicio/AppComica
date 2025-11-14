<template>
  <q-card
    :style="{ background: colorFondo, color: textoColor }"
    class="my-card"
  >
    <div class="img-placeholder">
      <div class="absolute-bottom text-h6 bg-black text-white q-pa-sm">
        {{ item.emoji }} {{ item.title }}
      </div>
    </div>

    <q-card-section>
      {{ item.lorem }}
    </q-card-section>
  </q-card>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  colorFondo: {
    type: String,
    default: "white",
  },
  textoColor: {
    type: String,
    default: "black",
  },
});
</script>

<style scoped>
.my-card {
  max-width: 350px;
  min-height: 300px;
  margin: auto;
  cursor: pointer;
}

.img-placeholder {
  width: 100%;
  height: 200px;
  background: #ccc;
  position: relative;
}
</style>

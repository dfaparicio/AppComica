<template>
  <q-card class="my-card">

    <q-img :src="item.fotoPerfil" class="card-img">


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
</style>

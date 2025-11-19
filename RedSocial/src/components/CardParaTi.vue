<template>
  <div class="cardParati">
    <div class="nombre margin">
      <img :src="infoCard.fotoPerfil" alt="perfil" class="perfil" />
      <p>@{{ infoCard.nombreUsuario }}</p>
    </div>

    <div class="img margin">
      <img :src="infoCard.imagenPublicacion" alt="recibo" class="recibo" />
    </div>

    <div class="descripcion margin">
      <p>{{ infoCard.descripcion }}</p>
    </div>

    <div class="hashtags">
      <span class="tag" v-for="(tag, index) in infoCard.hashtags" :key="index">
        {{ tag }}
      </span>
    </div>

    <hr />

    <div class="interaccion">
      <div
        class="like"
        :class="{ active: infoCard.liked}"
        @click="toggleLike()"
      >
        ❤️ {{ infoCard.likes }}
      </div>

      <div class="comentario">
        💬 {{ infoCard.comentarios }}
      </div>

      <div class="compartido">
        🔄 {{ infoCard.compartidos }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";

const props = defineProps({
  card: {
    type: Object,
    required: true,
  },
});

const infoCard = reactive({ ...props.card });

if (!infoCard.id) {
  infoCard.id = infoCard.nombreUsuario;
}

let cardsGuardadas = JSON.parse(localStorage.getItem("cards")) || {};

if (cardsGuardadas[infoCard.id]) {
  const guardado = cardsGuardadas[infoCard.id];

  for (const key in guardado) {
    if (key in infoCard) {
      infoCard[key] = guardado[key];
    }
  }
}

function toggleLike() {
  infoCard.liked = !infoCard.liked;
  infoCard.likes += infoCard.liked ? 1 : -1;
}

watch(
  infoCard,
  (nuevo) => {
    const copia = JSON.parse(JSON.stringify(nuevo));

    cardsGuardadas[infoCard.id] = copia;
    localStorage.setItem("cards", JSON.stringify(cardsGuardadas));
  },
  { deep: true }
);
</script>


<style scoped>
#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.contenedor-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
  justify-content: center;
}

.cardParati {
  width: 300px;
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.cardParati .margin {
  margin-bottom: 10px;
}

.nombre {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
}

.nombre img {
  width: 40px;
}

.perfil {
  background-color: rgb(183, 183, 183);
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

p {
  margin: 0;
}

.img {
  display: grid;
  justify-content: center;
  align-items: center;
}

.recibo {
  width: 100%;
  width: 270px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
}

.hashtags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.interaccion {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
}

.like {
  font-size: 22px;
  cursor: pointer;
  transition: color 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  user-select: none;
  transform-origin: center;
}

.like.active {
  color: #1877f2;
  animation: pop 0.25s ease;
}

@keyframes pop {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.3); }
  100% { transform: scale(1); }
}
</style>

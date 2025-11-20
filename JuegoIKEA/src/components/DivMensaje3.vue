<template>
  <div class="comic-bubble" :class="bgClass" :style="{ color: color }">
    <p class="bubble-text" :class="textClass">{{ texto }}</p>
  </div>
</template>

<script setup>
defineProps({
  texto: {
    type: String,
    required: true,
  },
  textClass: {
    type: String,
    default: "text-black",
  },
  bgClass: {
    type: String,
    default: "bg-white",
  },
  color: {
    type: String,
    default: "",
  },
});
</script>

<style scoped>
.comic-bubble {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: 20px;
  max-width: 350px;
  width: 90%;
}

.bubble-text {
  text-align: center;
  font-size: 1.1rem;    
  letter-spacing: 1px;   
  line-height: 1.3;
  word-wrap: break-word;
  font-family: "Luckiest Guy", cursive;
  text-shadow: none;
}
</style>

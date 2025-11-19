<template>
  <div class="comic-bubble2">
    <p :class="textClass">{{ texto }}</p>
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
    default: "",
  },
  color: {
    type: String,
    default: "#fff",
  },
});
</script>

<style scoped>
.comic-bubble2 {
  position: relative;
  display: inline-block;
  max-width: 300px;
  padding: 1rem 1.5rem;
  background-color: var(--bubble-color, #fff);
  border-radius: 25px;
  font-size: 1rem;
  line-height: 1.4;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  margin: 1rem;
}

.comic-bubble2::after {
  content: "";
  position: absolute;
  bottom: 10px;
  left: -10px;
  border-width: 10px 20px 10px 0;
  border-style: solid;
  border-color: transparent var(--bubble-color, #fff) transparent transparent;
  transform: rotate(90deg);
}
</style>

<template>
  <div class="comic-bubble">
    <p :class="textClass">{{ texto }}</p>
  </div>
</template>

<script setup>
defineProps({
  texto: {
    type: String,
    required: true
  },
  textClass: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: '#fff'
  }
})
</script>

<style scoped>
.comic-bubble {
  position: relative;
  display: inline-block;
  max-width: 300px;
  padding: 1rem 1.5rem;
  background-color: var(--bubble-color, #fff);
  border-radius: 25px;
  font-size: 1rem;
  line-height: 1.4;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
  margin: 1rem;
}

.comic-bubble::after {
  content: '';
  position: absolute;
  bottom: 0px;
  right: -5px;
  border-width: 20px 15px 0 15px;
  border-style: solid;
  border-color: var(--bubble-color, #fff) transparent transparent transparent;
  transform: rotate(70deg);
}
</style>

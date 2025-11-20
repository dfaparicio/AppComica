<template>
  <div class="comic-bubble" :style="`--bubble-color: ${color}`">
    <p class="bubble-text" :class="textClass">{{ texto }}</p>
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
    default: '#ffffff'
  }
})
</script>

<style scoped>
.comic-bubble {
  position: relative;
  display: inline-flex;      
  justify-content: center;
  align-items: center;
  background-color: var(--bubble-color, #fff);
  padding: 1rem 1.5rem;
  border-radius: 20px;
  border: 3px solid #000;
  box-shadow: 3px 3px 0px #000;
  max-width: 350px;            
  width: auto;                   
  margin: 1.2rem;
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
<template>
  <button class="start-button" @click="onClick">
    {{ texto }}
  </button>
</template>

<script setup>
defineProps({
  texto: {
    type: String,
    default: "Comenzar historia"
  },
  onStart: {           
    type: Function,
    required: true
  }
})

function onClick() {
  onStart()             
}
</script>

<style scoped>
.start-button {
  background-color: #ffcc00; 
  color: #000;              
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.8rem 2rem;
  border: 3px solid #000;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 4px 4px 0 #000; 
  transition: transform 0.1s, box-shadow 0.1s;
}

.start-button:hover {
  background-color: #ffdb4d; 
  transform: translateY(-2px);
  box-shadow: 6px 6px 0 #000; 
}

.start-button:active {
  transform: translateY(2px);
  box-shadow: 2px 2px 0 #000;
}
</style>

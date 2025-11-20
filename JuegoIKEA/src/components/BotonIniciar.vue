<template>
  <button class="boton" @click="onClick">
    {{ texto }}
  </button>
</template>

<script setup>
const { texto, onStart } = defineProps({
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
.boton {
  background: #ffeb3b;                
  color: #000;
  font-weight: 900;                    
  font-size: 1.4rem;                   
  padding: 1rem 2.5rem;
  border: 4px solid #000;               
  border-radius: 30px;                  
  cursor: pointer;
  box-shadow: 6px 6px 0px #000;         
  transition: 0.15s ease;
  font-family: "Luckiest Guy", cursive;
  letter-spacing: 1px;
}

.boton:hover {
  transform: translateY(-4px) rotate(-1deg);
  background: #fff176;                  
  box-shadow: 8px 8px 0px #000;
}

.boton:active {
  transform: translateY(3px) rotate(1deg);
  box-shadow: 3px 3px 0px #000;
}
</style>

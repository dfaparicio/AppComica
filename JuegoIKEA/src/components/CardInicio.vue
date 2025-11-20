<template>
  <div
    class="full-screen-background"
    :style="{ backgroundImage: `url(${fondo})` }"
  >
    <h1 class="main-title">{{ titulo }}</h1>
  </div>
</template>

<script setup>
defineProps({
  titulo: {
    type: String,
    default: "El Martillo Valiente e IKEA"
  },
  fondo: {
    type: String,
    default: "/path/to/tu-fondo.jpg"
  }
})
</script>

<style scoped>
.full-screen-background {
  width: 100vw;
  height: 100vh;
  background-size: cover;       
  background-position: center;  
  display: flex;
  justify-content: center;      
  align-items: center;          
  position: relative;
}

.main-title {
  color: white;                
  font-size: 4rem;          
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.7); 
  text-align: center;
  padding: 1rem;
}
</style>

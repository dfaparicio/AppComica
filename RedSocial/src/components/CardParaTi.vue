    <template>
    <div class="cardParati">
        <div class="nombre">
        <img :src="card.fotoPerfil" alt="perfil" class="perfil-img" />
        <p>@{{ card.nombreUsuario }}</p>
        </div>

        <div class="img">
        <img :src="card.imagenPublicacion" alt="recibo" class="recibo-img" />
        </div>

        <div class="descripcion">
        <p>{{ card.descripcion }}</p>
        </div>

        <div class="hashtags">
        <span class="tag" v-for="(tag, index) in card.hashtags" :key="index">
            {{ tag }}
        </span>
        </div>

        <hr>

        <div class="interaccion">
        <div class="like"> {{ card.likes }} </div>
        <div class="comentario"> {{ card.comentarios }} </div>
        <div class="compartido"> {{ card.compartidos }} </div>
        </div>
    </div>
    </template>

<script setup>
    defineProps({
        card: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>
    .nombre{
        display: grid;
        grid-template-columns: 10% 90%;
        justify-content: center;
        align-items: center;
    }

    .nombre img{
        width: 40px;
    }

    .nombre p{
        margin: 0;

    }

    .img{
        display: grid;
        justify-content: center;
        align-items: center;
    }

    
</style>

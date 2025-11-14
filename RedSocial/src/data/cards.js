import { ref } from "vue";

const cardsParatiData = ref([
  {
    nombreUsuario: "recibo_master",
    fotoPerfil: "https://cdn-icons-png.flaticon.com/512/14330/14330320.png",
    imagenPublicacion: "https://media-cdn.tripadvisor.com/media/photo-s/11/8a/89/72/scontrino.jpg",
    descripcion: "🔥 Recibo de 1.8 metros. Encontré un yogur de sabor 'galaxia'.",
    hashtags: ["#ReciboLargo", "#SuperMercado", "#TicketInfluencer"],
    likes: 842,
    comentarios: 126,
    compartidos: 57
  },
  {
    nombreUsuario: "ticket_hunter",
    fotoPerfil: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png ",
    imagenPublicacion: "https://media-cdn.tripadvisor.com/media/photo-s/12/bd/d2/f3/este-es-el-voucher-de.jpg",
    descripcion: "Compré solo una gaseosa y el recibo salió de 40 cm 😂",
    hashtags: ["#ReciboRaro", "#SoloUnaCosa", "#WTF"],
    likes: 502,
    comentarios: 88,
    compartidos: 21
  },
  {
    nombreUsuario: "cuponqueen",
    fotoPerfil: "https://cdn-icons-png.flaticon.com/512/4540/4540789.png",
    imagenPublicacion: "https://media-cdn.tripadvisor.com/media/photo-s/15/fe/5c/51/photo0jpg.jpg",
    descripcion: "Apliqué 12 cupones y el recibo parecía un pergamino 😅",
    hashtags: ["#Cupones", "#AhorroTotal", "#TicketMega"],
    likes: 1330,
    comentarios: 310,
    compartidos: 98
  },
  {
    nombreUsuario: "mercado_pro",
    fotoPerfil: "https://cdn-icons-png.flaticon.com/512/10507/10507320.png",
    imagenPublicacion: "https://img.restaurantguru.com/r418-Chifa-Fung-Shing-menu.jpg",
    descripcion: "Compré ingredientes para una receta y terminé con 32 items 🙃",
    hashtags: ["#CocinaFail", "#ReciboGigante"],
    likes: 622,
    comentarios: 74,
    compartidos: 19
  }
]);

export default cardsParatiData;
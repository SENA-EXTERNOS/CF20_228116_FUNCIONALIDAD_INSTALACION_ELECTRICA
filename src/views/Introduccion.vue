<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    
    .row.container.justify-content-around.align-items-center

      .row.col-der-introd 
        .col-lg-5
            figure
                img(data-aos="fade-right")(src='@/assets/curso/temas/img-introduccion.png', alt='Texto que describa la imagen').img-introduccion.png

        .col-lg-7

            p.txt-introd.p-3 En este componente de formación se van a desarrollar las competencias necesarias para que el aprendiz pueda ser un actor principal en el proceso de instalación de redes de datos, incluidas las eléctricas, como parte del proceso de implementación de una plataforma de tecnologías de información. <br><br> Las generalidades de la instalación de redes de datos, los métodos de instalación de redes, los métodos para instalación de fibra óptica y las herramientas para la instalación de redes se presentan como complementos del componente formativo. 


    .row.container.justify-content-around.align-items-center

        p En el siguiente video conocerá, de forma general, la temática que estudiará a lo largo del componente formativo. ¡Muchos éxitos en este proceso de aprendizaje!

        figure
          .video(data-aos="fade-left")
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

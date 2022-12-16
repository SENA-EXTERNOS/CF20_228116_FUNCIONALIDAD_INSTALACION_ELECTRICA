<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En este componente formativo se realizó el proceso de adquisición de conocimientos teóricos con el objetivo conocer y realizar las actividades pertinentes al desarrollo de los informes que se deben presentar en todos los proyectos, dentro de estos encontramos cómo desarrollar un informe técnico, cuáles son sus componentes y su estructura, lo mismo con el informe de instalación que otorga una visión general de las instalaciones realizadas y, como complemento de estos, se presenta el informe de cableado, terminando así con las propuestas económicas y de costos de cada uno de estos.
    
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/img-sintesis.png", alt="alt").img-sintesis
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

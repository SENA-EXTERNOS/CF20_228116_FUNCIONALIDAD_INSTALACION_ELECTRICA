export default {
  global: {
    componenteFormativo: 'Funcionalidad de la instalación eléctrica',
    descripcionCurso:
      'En este componente formativo se desarrollarán los conceptos del proceso de funcionamiento de las redes eléctricas. Para ello se estudiarán los procedimientos para hacer regatas, tendido y unión de tubería, procedimientos para elaborar instalaciones eléctricas, los informes de  la instalación y una propuesta que se deben conocer para lograr una instalación exitosa de las redes de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/img-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/cuadrado-der-banner.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/cuadro-izq-banner.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Informe técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Informe de instalación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Instalación de cableado estructurado',
            hash: 'instalacion-de-cableado-estructurado',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Cálculo propuesta y costo',
            hash: 'calculo-propuesta-y-costo',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Instalación de redes',
      referencia:
        'Ramos, A. (s.f.). Instalación y mantenimiento de redes informáticas. Aspectos fundamentales sobre redes [Documento web]. Instituto Técnico Integral.',
      tipo: 'Artículo ',
      link:
        'https://www.trabajosocial.unlp.edu.ar/uploads/docs/instalacion_y_mantenimiento_de_redes_informaticas__aspectos_fundamentales_sobre_redes_.pdf',
    },
    {
      tema: 'Análisis de precios unitarios',
      referencia:
        'Rico, B. (2019, diciembre 13). Presupuesto de las instalaciones eléctricas [Documento web].',
      tipo: 'Artículo ',
      link:
        'https://supermalla.com/instalaciones-electricas/presupuesto-de-las-instalaciones-electricas/',
    },
    {
      tema: 'Propuesta económica ',
      referencia:
        'Restrepo, J. (2021). Presupuesto cableado estructurado para realizar a todo costo construcción UCI polivalente para pacientes adultos de la ESE Hospital Departamental San Antonio de Padua, La Plata – Huila.',
      tipo: 'Propuesta económica',
      link:
        'https://esesanantoniodepadua.gov.co/wp-content/uploads/2021/04/PRESUPUESTO-CABLEADO-ESTRUCTURADO-UCI-LA-PLATA.-feb2021.xls',
    },
    {
      tema: 'Herramientas para instalar redes ',
      referencia:
        'Rubio, S. (2014). <em>Estudio de herramientas para la gestión de las redes domésticas.</em> [Proyecto de grado de Ingeniería Técnica en Informática de Sistemas, Universitat Politècnica de València]',
      tipo: 'Proyecto de grado',
      link:
        'https://riunet.upv.es/bitstream/handle/10251/39562/Memoria.pdf?sequence=1',
    },
    {
      tema: 'Técnicas de empalme ',
      referencia:
        'Faradayos (2015). Tipos de empalmes eléctricos y pasos para realizarlos. [Blog]',
      tipo: 'Artículo',
      link:
        'https://www.faradayos.info/2013/12/empalmes-cables-electricos-derivacion-cola-rata-prolongacion.html',
    },
  ],
  glosario: [
    {
      termino: 'Alimentador',
      significado:
        'Todos los conductores de un circuito entre el equipo de acometida, la fuente de un sistema derivado independiente u otra fuente de suministro de energía eléctrica y el dispositivo de protección contra sobre corrientes del circuito ramal final.',
    },
    {
      termino: 'Automóvil eléctrico',
      significado:
        'Son vehículos impulsados por uno o más motores eléctricos que se alimentan de la energía almacenada en una batería eléctrica.',
    },
    {
      termino: 'Cable',
      significado:
        'Conjunto de alambres sin aislamiento entre sí y entorchado por medio de capas concéntricas.',
    },
    {
      termino: 'Circuito ramal',
      significado:
        'Conductores de un circuito entre el dispositivo final de protección contra sobre corriente y la salida o salidas.',
    },
    {
      termino: 'Electricidad ',
      significado:
        'es un conjunto de fenómenos producidos por el movimiento e interacción entre las cargas eléctricas positivas y negativas de los cuerpos físicos.',
    },
    {
      termino: 'Equipo eléctrico',
      significado:
        'son aquellos elementos o productos destinados a convertir la energía eléctrica en otro tipo de energía, ya sea energía mecánica, calórica o lumínica, o viceversa, y los dispositivos creados para llevar a cabo tal fin, como elementos de control, protección, transporte y medición de energía eléctrica.',
    },
    {
      termino: 'Empalme',
      significado:
        'Conexión eléctrica destinada a unir dos partes de conductores, para garantizar continuidad eléctrica y mecánica.',
    },

    {
      termino: 'Embornamiento',
      significado:
        'Es  la técnica  que permite   conectar los conductores eléctricos a los tornillos que para este fin tienen los aparatos eléctricos tales como porta-lámparas, tomacorrientes .',
    },
    {
      termino: 'Norma Técnica Colombiana (NTC)',
      significado:
        'Norma técnica aprobada o adoptada como tal por el organismo nacional de normalización.',
    },
    {
      termino: 'RETIE',
      significado:
        'Acrónimo del <em>Reglamento Técnico de Instalaciones Eléctricas</em> adoptado por Colombia.',
    },
  ],
  referencias: [
    {
      referencia:
        'Bernal-Zuluaga, M. J., y Jiménez-Mendoza, D. F. (2012). Propuesta de gestión de riesgos para Scada en sistemas eléctricos. Ingenierías USBmed, 3(2), 12–21.',
      link: 'https://doi.org/10.21500/20275846.270',
    },
    {
      referencia:
        'Hernández-Reverol, D., Fuentes-Méndez, L., y Torres-Granadillo, F. (2011). Propuesta metodológica para la evaluación y selección de proyectos tecnológicos. <em>Revista de ciencias sociales,</em> 4(1).',
      link: 'https://doi.org/10.31876/rcs.v4i1.25026',
    },
    {
      referencia:
        'Ortiz ,J ,P. O. (2014). <em>Guía Técnica de Cableado Estructurado en Edificios.</em> Editorial Académica Española.',
      link: '',
    },
    {
      referencia:
        'Cortés, A. (2012). <em>Gestión de Redes Orientado a la Telemática y Cableado Estructurado.</em> Editorial Académica Española.',
      link: '',
    },
    {
      referencia:
        'Villanueva-Cruz, J. A., Centro Nacional de Investigación y Desarrollo Tecnológico, García-Hernández, C. F., Pérez-Díaz, J. A., Cahue-Díaz, G., González-Serna, J. G., Instituto de Investigaciones Eléctricas, Instituto Tecnológico de Estudios Superiores de Monterrey - Campus Cuernavaca, Redes, Instalaciones y Servicios a Computadoras, y Centro Nacional de Investigación y Desarrollo Tecnológico. (2011). Security in AODV Protocol Routing for Mobile ad hoc Networks. <em>Ingeniería Investigación y Tecnología,</em> 12(1), 15–24. ',
      link: 'https://doi.org/10.22201/fi.25940732e.2011.12n1.003',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "es",
  messages: {
    en: {
      homePage: "This is the home page!",
      about: "About me",
      cv: "CV",
      pubs: "Publications",
      teaching: "Teaching",
      talks: "Selected talks",
      other: "Other projects",
    },
    es: {
      homePage: "¡Este es el inicio!",
      about: {
        title: "Sobre mí",
        description: "Intereses · Áreas de investigación · Contacto",
      },
      cv: {
        title: "CV",
        description: "Educación · Experiencia · Servicio",
      },
      pubs: {
        title: "Publicaciones",
        description: "Artículos · Capítulos",
      },
      teaching: {
        title: "Docencia",
        description: "Cursos · Programas",
      },
      talks: {
        title: "Charlas selectas",
        description: "Mis últimas charlas académicas",
      },
      other: {
        title: "Otros proyectos",
        description: "Proyectos fuera de mi investigación principal",
      },
    },
  },
}));

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "es",
  messages: {
    en: {
      homePage: "¡Este es el inicio!",
      about: {
        title: "About me",
        description: "Interests · Research areas · Contact",
      },
      cv: {
        title: "CV",
        description: "Education · Experience · Service",
      },
      pubs: {
        title: "Publications",
        description: "Articles · Book chapters",
      },
      teaching: {
        title: "Teaching",
        description: "Courses · Programs",
      },
      talks: {
        title: "Selected talks",
        description: "Latest selected talks",
      },
      other: {
        title: "Other projects",
        description: "Projects outside my main research",
      },
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

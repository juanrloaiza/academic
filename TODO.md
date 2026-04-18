# TODO

## Hacia el MVP

- [x] Construir el sitio de docencia
  - [x] Implementar lógica para programas
  - [x] Arreglar el markdown de la descripción
- [x] Arreglar las imágenes del blog
- [x] Construir el sitio de otros proyectos
- [x] Hacer los botones de redes sociales
- [x] Implementar diseño en celulares
- [x] Terminar de pasar las publicaciones
  - [x] Implementar capítulos de libro y libro
- [x] Arreglar el estilo de los links en About y Others
      - [X] Decidir una paleta de color
- [x] Decidir un subtítulo para la navegación

## Extra

- [x] Implementar estilos de tema oscuro
- [ ] Implement stricter zod schemas in collection definitions
- [ ] Have translations for course abstracts
- [ ] Blog and course sections are fairly similar (title with small description). Consider same styles?
- [x] Upload favicon
- [x] Make publication info smaller
- [x] Add SEO
- [x] Translate missing strings

## Refactor

- [-] Pubs and teaching items have abstracts with the same styles. We can abstract to a component.
- [x] Pubs and teaching items reveal the abstract with a button. We can abstract to a component.
- [x] Pubs are passed entirely to component, not bound to the component. Binding would simplify syntax.

## Future

- [ ] Check if [nuxt-content-assets](https://github.com/davestewart/nuxt-content-assets/issues/90) supports Nuxt Content V3.

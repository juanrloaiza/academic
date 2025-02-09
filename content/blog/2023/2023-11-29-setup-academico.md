---
title: Mi setup académico
date: 2023-11-29T03:25:12.000Z
tags: 
  - Tech
  - Academia
excerpt: Qué programas uso para escribir textos académicos, desde mi editor de texto hasta mi configuración de Zotero.
---

A lo largo de los años he usado una variedad de sistemas, programas y mecanismos para mi trabajo académico. Escribí mis tesis de máster y de doctorado en LaTeX, sincronizando entre equipos con Git y manejando mi bibliografía con Zotero y JabRef. Pero quien haya usado LaTeX sabe que puede ser un dolor de cabeza, y que una simple lista de elementos puede llevar toda una mañana (aunque sea una buena excusa para no sentirnos tan mal al procrastinar). Con todo eso, desde entonces he estado buscando un nuevo *setup* que me sirva para mi trabajo académico. La idea es que sea simple, portátil, e idealmente que no dependa de software propietario (e.g., Microsoft Word). Aquí entonces está mi configuración actual, que por el momento me tiene muy satisfecho y quizás pueda servirle a alguien.

## TL;DR

La lista de programas y complementos que uso es:

- Visual Studio Code
- Pandoc Citer

- Pandoc (Markdown)
- Zotero
- Better BibTeX
- Inciteful

- Syncthing

## Escritura: Markdown, Pandoc y Visual Studio Code

Lo primero en la vida de cualquier persona dedicada a la academia es con qué escribir. En mi caso, atrás quedaron mis días de pasar horas luchando con LaTeX. En mi configuración actual uso [Markdown](https://es.wikipedia.org/wiki/Markdown) como formato principal de escritura. Markdown es un formato simple para escribir archivos de texto, similar (pero mucho más sencillo) que escribir en HTML. La razón para preferir Markdown es que puedo escribir sin distracciones de formato en un archivo ligero y fácil de sincronizar. Dado que los archivos de Markdown (de extensión `.md`) son archivos de texto como los archivos de Notepad, son tremendamente livianos y no pierden su formato al pasarlos de un equipo a otro.

Para escribir en Markdown, cualquier editor de texto simple funciona. Sin embargo, el que más me ha gustado es [Visual Studio Code](https://code.visualstudio.com/). Esta es una de las pocas piezas de software propietario que uso, aunque es gratuita y de código abierto. Si quisiese ser más estricto, podría reemplazarlo por su clon completamente libre y de código abierto, [VSCodium](https://vscodium.com/). En cualquier caso, Visual Studio Code, a pesar de tener énfasis en ser un editor de código para programación, tiene extensiones geniales para manejar archivos en Markdown y otras ventajas que mencionaré más tarde.

Una vez tengo un texto escrito en Markdown, uso [Pandoc](https://pandoc.org/) para exportarlo. Pandoc es un programa para convertir entre formatos de texto y presentaciones populares. Usando Pandoc, puedo pasar de Markdown (archivos `.md`) a PDF (o incluso archivos de Word `.docx` si lo necesito para enviarle algún texto a alguien que quiera comentarlo con las herramientas de Word). Lo genial de usar Pandoc para pasar de Markdown a PDF es que Pandoc pasa primero de Markdown a LaTeX y usa LaTeX para producir el PDF final. Esto permite usar comandos de LaTeX en el archivo de Markdown y el procesador de LaTeX los reconocerá adecuadamente, lo que implica que tenemos lo mejor de los dos mundos: la simplicidad de Markdown con el poder de LaTeX. Incluso tengo algunas plantillas propias en LaTeX para producir archivos con el formato que yo prefiero, reusando la misma base y concentrándome en el contenido al escribirlo en Markdown.

## Bibliografía: Zotero con Better BibTeX

Lo segundo en la vida de cualquier persona dedicada a la academia es el manejo de la bibliografía. No es sorprendente que mi gestor bibliográfico de preferencia es [Zotero](https://www.zotero.org/). Es software libre, de código abierto, con una comunidad académica activa que ha desarrollado complementos y mantiene las normas de citación y referencia bien actualizadas. Este sí es un programa que recomiendo a cualquier persona, incluso las menos preocupadas por cuestiones tecnológicas, y no me cabe en la cabeza cómo puede alguien hacer una vida académica sin un programa así.

Mi configuración de Zotero usa dos complementos. El primero es [Better BibTeX](https://retorque.re/zotero-better-bibtex/), un complemento que hace más fácil manejar archivos de bibliografía compatibles con LaTeX. Mi estrategia es usar colecciones de Zotero (i.e., carpetas) para cada artículo que voy escribiendo, y exportar estas colecciones en un archivo `.bib` en la carpeta del artículo en proceso. Better BibTeX me permite mantener este archivo automáticamente actualizado con los cambios que haya en la colección de Zotero, con lo que todo el manejo del archivo `.bib` queda en manos de Zotero. Adicional a esto, uso la extensión [Pandoc Citer](https://marketplace.visualstudio.com/items?itemName=notZaki.pandocciter) para VSCode que autorrellena las referencias en los archivos Markdown en los que escribo. Así, mis carpetas de escritura lucen más o menos así:

    Artículo/
     ├── articulo.md # Archivo de Markdown
     ├── articulo.pdf # Generado por Pandoc
     ├── articulo.bib # Bibliografía administrada por Zotero + Better BibTeX
     └── articulo.docx # Generado por Pandoc, en caso de necesidad

El segundo complemento que uso en Zotero es el [plugin](https://github.com/inciteful-xyz/inciteful-zotero-plugin) de [Inciteful](https://inciteful.xyz). Inciteful es un sitio excelente para revisiones de literatura, que permite crear grafos de citaciones, listados con bibliografía relacionada, y muchas otras funciones. Si bien existe también [Connected Papers](https://www.connectedpapers.com/), este último es ahora limitado a cinco grafos al mes en su versión gratuita, mientras que Inciteful es completamente grauito, de código libre y abierto. Con el complemento de Zotero, puedo generar redes fácilmente en Inciteful con cualquier referencia que tenga guardada. Incluso puedo generar grafos con toda la colección de bibliografía de un artículo, para encontrar referencias centrales que pueda haber omitido y que sea importante revisar.

## Sincronización: Syncthing

Finalmente, agrego un apartado final para mencionar cómo sincronizo todos estos archivos. Hasta hace muy poco, mi equipo principal de trabajo era un ThinkPad E480 que conseguí con descuento cuando era estudiante de doctorado. En este ThinkPad uso Linux como sistema operativo, específicamente Fedora con KDE. Me encanta Linux (aunque no faltará quien venga a corregirme porque es *GNU/Linux*) y me encanta Fedora, y no planeo volver a Windows si puedo evitarlo. Quizás en otra nota cuente mis andanzas por el mundo de Linux y el *distro hopping*.

A pesar de mi cariño por Linux y Fedora, hace unos meses adopté un MacBook Air del 2017 que mi pareja me dejó. La razón por la que lo recibí es por la constante frustración que me provoca que el mundo académico y laboral dependa tanto de archivos de Microsoft Word (.docx), Excel (.xlsx), o a veces de la suite de Adobe. Si bien hay alternativas como Microsoft 365 (que es en línea) o LibreOffice, es fácil que el formato de los documentos se altere, que no todas las funciones estén disponibles, y en general me provocaba un dolor de cabeza lidiar con estos archivos haciendo malabares informáticos. El MacBook además es algo más liviano, tiene una pantalla excelente y desafortunadamente tiene mejor soporte para la mayoría de aplicaciones (o al menos mis quejas son recibidas como más razonables que cuando las hago desde Linux). 

Dicho eso, mi configuración actual está pensada para poder escribir en cualquiera de los dos equipos y que se mantengan sincronizados sin problema. Para esto uso [Syncthing](https://syncthing.net/). Syncthing es un programa de software libre y abierto que permite sincronizar carpetas. Está disponible para muchísimos sistemas, incluyendo no solo MacOS y Linux, sino también Android. Lo mejor es que es muy configurable, lo que me da muchísima flexibilidad. Con Syncthing, sincronizo mi MacBook Air, mi ThinkPad, mi tableta (en donde tomo apuntes o escribo cuando viajo), y un servidor personal que mantengo que funciona como centro de respaldo, entre otras cosas. Con esto mis archivos están siempre actualizados en todos mis equipos sin que la ausencia de soluciones como Dropbox o Google Drive en Linux me afecte (y de nuevo, priorizando el software libre).

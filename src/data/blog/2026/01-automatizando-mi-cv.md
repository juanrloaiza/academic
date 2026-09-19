---
title: Automatizando mi CV con Typst y GitHub Actions
date: 2026-09-19T03:00:00.000Z
tags:
  - Tech
  - Typst
summary: Cómo automaticé generar mi CV automáticamente cuando actualizo mis datos.
slug: automatizando-mi-cv
---

_Puedes ver todo el código que discuto aquí en este [repositorio de GitHub](https://github.com/juanrloaiza/cv)._

Desde que descubrí [Typst](https://typst.app/) en 2025, he migrado muchos de mis archivos a este lenguaje. Entre esos estaba mi CV. Desde hace tiempo había querido implementar mi CV de manera que pudiera separar los datos de la presentación, y así poder actualizar los datos esquemáticamente y que alguna plantilla produjera el PDF correspondiente. Por un tiempo intenté con LaTeX, pero es terrible para manejar datos externos como JSON o YAML. Luego intenté con HTML, pero manejar el formato de un documento con páginas separadas es una pesadilla. Typst resultó ser perfecto para la tarea: recibe archivos JSON, YAML, CSV e incluso archivos de BibLaTeX, y ofrece mucho control para generar documentos en PDF en lugar de páginas web.

Entonces eso hice: migré mi CV a Typst, mis datos a archivos YAML, CSV y BibLaTeX, y empecé a llevar registro en un repositorio de Git. Pero luego se me ocurrió la siguiente idea: puedo automatizar la generación de mi CV directamente en GitHub y mantener una versión siempre actualizada de mi CV allí.

La idea es entonces la siguiente:

- Hago cambios a los archivos, generalmente actualizando algún dato (e.g., una nueva charla documentada en un CSV o una nueva publicación agregada al archivo BibLaTeX correspondiente).
- En lugar de generar un PDF en mi computador, hago push a estos datos a GitHub.
- GitHub genera dos versiones en PDF del CV usando GitHub Actions, una en español y otra en inglés.
- GitHub lanza estas dos versiones como un _release_ y reescribe el último _release_ disponible.

Esto ofrece la ventaja de tener un [único enlace](https://github.com/juanrloaiza/cv/releases/download/latest/LoaizaCV_es.pdf) junto con un único punto de actualización.

## Prefacio: Introducción breve a GitHub Actions

Si ya conoces GitHub Actions, puedes pasar a la siguiente sección. Si no, lo cuento rápidamente.

[GitHub Actions](https://docs.github.com/es/actions) en un sistema de GitHub que permite ejecutar acciones en la nube. GitHub genera una máquina virtual temporal, y corre los comandos que especifiques. Como todo lo de GitHub, está pensado para el desarrollo de software. Por ejemplo, se usa para correr tests en la nube cuando se sube código al repositorio, o para generar versiones de lanzamiento de un paquete.

Una acción de GitHub Actions se configura mediante un archivo YAML que guardamos en la carpeta `.github/workflows` en nuestro repositorio. Allí especificamos alguna información básica y cuándo debe correr esta acción. Existen ya varias acciones preprogramadas disponibles en [GitHub Marketplace](https://github.com/marketplace) con instrucciones de cómo usarlas. Sobre cuándo correr la acción, podemos decirle a GitHub que corra esta acción cada vez que hacemos push al repositorio (que es lo que hago con mi CV), que permita ejecutarla manualmente, periódicamente, etc.

## Typst y GitHub Actions

La idea general es entonces generar el CV usando Typst directamente en la nube usando GitHub Actions. Para eso, configuré la siguiente acción que ejecuta los siguientes pasos:

1. Toma el repositorio en su estado actual (checkout).

   ```yaml
   - uses: actions/checkout@v4
   ```

2. Instala Typst.

   ```yaml
   - uses: typst-community/setup-typst@v5
   ```

3. Instala FontAwesome y PT Sans (las fuentes que usa mi CV).

   ```yaml
   - name: Install Font Awesome
     run: |
       curl -sSL -o fa.zip https://github.com/FortAwesome/Font-Awesome/releases/download/6.7.2/fontawesome-free-6.7.2-desktop.zip
       unzip -q fa.zip -d fa
       mkdir -p fonts
       find fa -name "*.otf" -exec cp {} fonts/ \;

   - name: Install PT Sans
     run: |
       mkdir -p fonts
       base=https://github.com/google/fonts/raw/main/ofl/ptsans
       for f in Regular Bold Italic BoldItalic; do
         curl -sSL -o "fonts/PT_Sans-Web-$f.ttf" "$base/PT_Sans-Web-$f.ttf"
       done
   ```

4. Genera el PDF de mi CV.

   ```yaml
   - name: Compile PDFs
     run: typst compile --font-path fonts main.typ LoaizaCV.pdf
   ```

La acción luce así:

```yaml
steps:
  - uses: actions/checkout@v4
  - uses: typst-community/setup-typst@v5
  - name: Install Font Awesome
    run: |
      curl -sSL -o fa.zip https://github.com/FortAwesome/Font-Awesome/releases/download/6.7.2/fontawesome-free-6.7.2-desktop.zip
      unzip -q fa.zip -d fa
      mkdir -p fonts
      find fa -name "*.otf" -exec cp {} fonts/ \;
  - name: Install PT Sans
    run: |
      mkdir -p fonts
      base=https://github.com/google/fonts/raw/main/ofl/ptsans
      for f in Regular Bold Italic BoldItalic; do
        curl -sSL -o "fonts/PT_Sans-Web-$f.ttf" "$base/PT_Sans-Web-$f.ttf"
      done
  - name: Compile PDFs
    run: typst compile --font-path fonts main.typ LoaizaCV.pdf
```

Con esto ya tengo un PDF de mi CV. Ahora podemos sacarlo como un [_release_](https://docs.github.com/es/repositories/releasing-projects-on-github/managing-releases-in-a-repository) de GitHub agregando lo siguiente a esta acción.

```yaml
- name: Delete previous release and tag
  env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  run: gh release delete latest --cleanup-tag --yes || true

- name: Create release
  env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  run: |
    gh release create latest LoaizaCV.pdf \
      --title "Latest" \
      --notes "Automatic build of ${GITHUB_SHA::7}" \
      --target "$GITHUB_SHA" \
```

Esto genera una versión de mi CV disponible para el público en un enlace fijo `https://github.com/juanrloaiza/cv/releases/download/latest/LoaizaCV.pdf`.

Finalmente, le decimos a GitHub Actions que haga todo esto cada vez que hago push al repositorio:

```yaml
name: Rolling release

on:
  push:
    branches: [main]

permissions:
  contents: write
```

Con esto la acción completa queda así:

```yaml
name: Rolling release

on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: typst-community/setup-typst@v5

      - name: Install Font Awesome
        run: |
          curl -sSL -o fa.zip https://github.com/FortAwesome/Font-Awesome/releases/download/6.7.2/fontawesome-free-6.7.2-desktop.zip
          unzip -q fa.zip -d fa
          mkdir -p fonts
          find fa -name "*.otf" -exec cp {} fonts/ \;

      - name: Install PT Sans
        run: |
          mkdir -p fonts
          base=https://github.com/google/fonts/raw/main/ofl/ptsans
          for f in Regular Bold Italic BoldItalic; do
            curl -sSL -o "fonts/PT_Sans-Web-$f.ttf" "$base/PT_Sans-Web-$f.ttf"
          done

      - name: Compile PDFs
        run: typst compile --font-path fonts main.typ LoaizaCV.pdf

      - name: Delete previous release and tag
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: gh release delete latest --cleanup-tag --yes || true

      - name: Create release
        env:
          GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          gh release create latest LoaizaCV_*.pdf \
            --title "Latest" \
            --notes "Automatic build of ${GITHUB_SHA::7}" \
            --target "$GITHUB_SHA" \
```

## Generando el CV en dos idiomas

Ahora bien, yo quiero que mi CV se genere tanto en inglés como en español. Para lograr esto, necesitamos varias cosas:

1. Typst debe detectar el idioma con alguna variable configurable.
2. Basado en ese idioma, debe traducir varios de los textos del CV.

Lo primero podemos lograrlo con una variable simple en Typst (aunque volveré a eso en un momento). Para lo segundo, tomando un patrón recurrente en la internacionalización de páginas web, implementé una función de traducción que toma un archivo de traducciones (en mi caso un YAML) y nos devuelve la versión correspondiente según el idioma en el que estemos.

```typst
#let lang = "es"
#let translations = yaml("i18n/translations.yml")
#let t = key => translations.at(key).at(lang)
```

Así, cuando necesito una versión en inglés de, por ejemplo, la palabra "Educación", puedo obtenerla de la siguiente manera:

```typst
#t("education") // "Educación" o "Education" dependiendo de la configuración de #lang y #t()
```

Eso permite generar fácilmente un CV en español o en inglés cambiando la variable `lang`. Pero recordemos que Typst correrá en la nube, y por lo tanto no tendremos cómo cambiar la variable en el documento una vez hagamos push al repositorio. ¿Cómo controlamos entonces la variable de idioma?

Typst ofrece un módulo [System](https://typst.app/docs/reference/foundations/sys) que nos permite fijar variables como argumentos al compilador. Podemos entonces configurar la variable `lang` de la siguiente manera:

```typst
#let lang = sys.inputs.at("lang", default: "es")
```

Esto hace que por defecto, el CV se genere en español, pero que podamos controlar la variable usando `--input lang=...` como argumento cuando compilamos el documento.

```bash
typst compile --input lang=es main.typ LoaizaCV_es.pdf # Genera un PDF en español
typst compile --input lang=en main.typ LoaizaCV_en.pdf # Genera un PDF en inglés
```

Ahora solo tenemos que cambiar ligeramente la acción que corre el compilador de Typst para que corra con ambos idiomas, y la parte que hace el release para que tome ambas versiones del CV:

```yaml
- name: Compile PDFs
  run: |
    typst compile --font-path fonts --input lang=es main.typ LoaizaCV_es.pdf
    typst compile --font-path fonts --input lang=en main.typ LoaizaCV_en.pdf

...
- name: Create release
  env:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  run: | # Toma todos los archivos LoaizaCV_*.pdf
    gh release create latest LoaizaCV_*.pdf \ 
      --title "Latest" \
      --notes "Automatic build of ${GITHUB_SHA::7}" \
      --target "$GITHUB_SHA" \
```

¡Y listo! Ahora cada vez que hacemos push al repositorio, se genera automáticamente una versión en español y una versión en inglés del CV.

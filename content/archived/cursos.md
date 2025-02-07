---
layout: main
lang: es
mirror: en/teaching.html
title: Docencia
---
Abajo encontrarán una descripción breve de los cursos que he dictado. Para más información o una copia de los programas
de asignatura, no dude en contactarme.

{% assign universities = site.data.courses | group_by: 'university' %}
{% for university in universities %}

### {{ university.name }}

{% for item in university.items %}

{% for course in item.courses %}

#### {{ course.name }}

{{ course.description[page.lang] }}

{% if course.pdf %}
<div class="col-1">
  <a href="{{ site.baseurl }}{{ course.pdf }}"><img src="{{ site.baseurl }}/img/icons/pdf.png" width="32" /></a>
</div>
{% endif %}

{% endfor %}
{% endfor %}

{% endfor %}
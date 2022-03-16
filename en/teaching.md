---
layout: main
lang: en
mirror: es/cursos.html
title: Teaching
---
Below you will find a brief description of the courses I have taught. If you are interested in more information or in having a copy of the syllabi, do not hesitate to contact me.


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
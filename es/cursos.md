---
layout: main
lang: es
mirror: en/teaching.html
title: Cursos y docencia
---

{% assign universities = site.data.courses | group_by: 'university' %}
{% for university in universities %}

## {{ university.name }}
<div style="padding-left: 1em" markdown="1">
{% for item in university.items %}

{% for course in item.courses %}

### {{ course.name }}
{{ course.semesters | join: ", "}}

<div class="row">
<div class="col" markdown="1">
{{ course.description[page.lang] }}
</div>
  {% if course.website %}
  <div class="col-1">
  <a href="{{ course.website }}"><img src="{{ site.baseurl }}/img/icons/web.png" width="32" /></a>

  </div>
  {% endif %}
  {% if course.pdf %}
  <div class="col-1">
  <a href="{{ course.pdf }}"><img src="{{ site.baseurl }}/img/icons/pdf.png" width="32" /></a>

  </div>
  {% endif %}

</div>
  {% endfor %}
{% endfor %}
</div>
{% endfor %}
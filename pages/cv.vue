<script setup lang="ts">
const { locale } = useI18n();

const { data: education } = await useAsyncData(() =>
	queryCollection('cv')
		.where('type', '=', 'education')
		.order('startYear', 'DESC')
		.all()
);

const { data: employment } = await useAsyncData(() =>
	queryCollection('cv')
		.where('type', '=', 'employment')
		.order('startYear', 'DESC')
		.all()
);

const { data: service } = await useAsyncData(() =>
	queryCollection('cv')
		.where('type', '=', 'service')
		.order('startYear', 'DESC')
		.all()
);
</script>

<template>
	<PageTitle title="CV" />

	<h3 class="font-bold text-2xl mb-3">{{ $t('education') }}</h3>

	<div v-for="ed in education" class="grid grid-cols-8 items-baseline mb-4">
		<div class="col-span-1 text-base">
			<CVDates :start="ed.startYear" :end="ed.endYear" />
		</div>
		<div class="col-span-7">
			<strong class="font-semibold">{{ ed.role[locale] }}</strong>
			<br />
			{{ ed.faculty }}, {{ ed.institution }}
			<br />
			<span class="text-base">
				{{$t('thesis')}}: "{{ ed.thesis.title }}"
				<br />
				{{$t('supervisors')}}: {{ ed.thesis.supervisors?.join(', ') }}
				<br />
				<span v-if="ed.thesis.examiners">
					{{$t('examiners')}}: {{ ed.thesis.examiners?.join(', ') }}
					<br />
				</span>
				{{$t('qualification')}}:
				{{ ed.thesis.qualification }}
			</span>
		</div>
	</div>

	<h3 class="font-bold text-2xl mb-3 mt-8">{{ $t('employment') }}</h3>

	<div v-for="emp in employment" class="grid grid-cols-8 items-baseline mb-4">
		<div class="col-span-1 text-base">
			<CVDates :start="emp.startYear" :end="emp.endYear" />
		</div>
		<div class="col-span-7">
			<strong class="font-semibold">{{ emp.role[locale] }}</strong>
			<br />
			{{ emp.faculty }}, {{ emp.institution }}
			<br />
		</div>
	</div>

	<h3 class="font-bold text-2xl mb-3 mt-8">{{ $t('service') }}</h3>

	<div v-for="srv in service" class="grid grid-cols-8 items-baseline mb-4">
		<div class="col-span-1 text-base">
      <CVDates :start="srv.startYear" :end="srv.endYear" />
		</div>
		<div class="col-span-7">
			<strong class="font-semibold">{{ srv.role[locale] }}</strong>
			<br />
			<span v-if="srv.faculty">{{ srv.faculty }},</span>
			{{ srv.institution }}
			<br />
		</div>
	</div>
</template>

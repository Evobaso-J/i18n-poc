<template>
  <div>
    {{ $t("ra.action.add") }}
    <br />
    {{ $t("common.label.pricePerHour") }}
    <br />
    <template v-for="locale in availableLocales" :key="locale.code">
      <NuxtLink :to="switchLocalePath(locale.code)">
        {{ locale.code }}
      </NuxtLink>
      <br />
    </template>
  </div>
</template>

<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";

const { locales, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() =>
  (locales.value.filter((l) => typeof l !== "string") as LocaleObject[]).filter(
    (l) => l.code !== locale.value
  )
);
</script>

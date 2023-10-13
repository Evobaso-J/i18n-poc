<template>
  <div>
    {{ $t("common.name") }}
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

const availableLocales = computed(() => {
  const filteredLocales = (
    locales.value.filter((l) => typeof l !== "string") as LocaleObject[]
  ).filter((l) => l.code !== locale.value);
  console.log("FILTERED LOCALES", filteredLocales);
  return filteredLocales;
});
</script>

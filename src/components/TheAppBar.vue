<template>
  <v-app-bar app color="info" flat>
    <v-tabs centered class="ml-n9" color="accent">
      <v-tab v-for="link in links" :key="link">
        {{ link }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "Dashboard", "Profile", "About"],
  }),
};
</script>


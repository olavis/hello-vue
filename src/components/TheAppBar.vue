<template>
  <v-app-bar app color="info" flat>
    <div class="d-flex align-center">
      <!--v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      /-->

      <!--v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-light.png"
        width="100"
      /-->
    </div>

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


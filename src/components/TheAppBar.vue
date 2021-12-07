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

    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'accent' : 'transparent'"
      size="32"
    ></v-avatar>

    <v-tabs centered class="ml-n9" color="accent">
      <v-tab v-for="link in links" :key="link">
        {{ link }}
      </v-tab>
    </v-tabs>

    <v-avatar
      class="hidden-sm-and-down"
      color="accent shrink"
      size="32"
    ></v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    links: ["Home", "Dashboard", "Profile", "About"],
  }),
};
</script>


<template>
  <v-app id="inspire">
    <TheAppBar />

    <v-main class="grey lighten-4">
      <ThreeColumns />
    </v-main>
  </v-app>
</template>

<script>
import TheAppBar from "./components/TheAppBar";
import ThreeColumns from "./components/ThreeColumns";

export default {
  name: "App",

  components: {
    TheAppBar,
    ThreeColumns,
  },

  data: () => ({
    //
  }),
};
</script>

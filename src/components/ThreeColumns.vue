<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268">
          <Palette />
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="8">
        <v-sheet min-height="70vh" rounded="lg">
          <h1 class="display-3 font-weight-medium mb-3">Stor overskrift</h1>
          <p class="subheading font-weight-regular">Hello</p>
        </v-sheet>
      </v-col>

      <v-col cols="12" sm="2">
        <v-sheet rounded="lg" min-height="268">
          <!-- -->
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Palette from "./Palette.vue";
export default {
  components: {
    Palette,
  },
};
</script>
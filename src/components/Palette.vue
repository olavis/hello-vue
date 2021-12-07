<template>
  <v-container>
    <v-sheet rounded="lg" min-height="268">
      <div class="static" v-if="isPaletteActive">
        <p class="overline accent">Accent</p>
        <p class="overline secondary">Secondary</p>
        <p class="overline primary">Primary</p>
        <p class="overline info">Info</p>
        <p class="overline error">Error</p>
        <p class="overline success">Success</p>
        <p class="overline warning">Warning</p>
      </div>
    </v-sheet>

    <v-sheet rounded="lg" min-height="268">
      <div class="static" v-if="isPaletteActive">
        <p class="overline grey lighten-5">Light 5</p>
        <p class="overline grey lighten-4">Light 4</p>
        <p class="overline grey lighten-3">Light 3</p>
        <p class="overline grey lighten-2">Light 2</p>
        <p class="overline grey lighten-1">Light 1</p>
        <p class="overline grey darken-1">Dark 1</p>
        <p class="overline grey darken-2">Dark 2</p>
        <p class="overline grey darken-3">Dark 3</p>
        <p class="overline grey darken-4">Dark 4</p>
      </div>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    isPaletteActive: true,
  }),
};
</script>
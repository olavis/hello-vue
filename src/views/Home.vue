<template>
  <div class="home">
    <ThreeColumns />
  </div>
</template>

<script>
// @ is an alias to /src
import ThreeColumns from "@/components/ThreeColumns.vue";

export default {
  name: "Home",
  components: {
    ThreeColumns,
  },
};
</script>

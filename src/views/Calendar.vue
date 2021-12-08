<template>
  <div class="calendar">
    <h1>Pick up a <s>developer</s> card</h1>
    <p>(Pick up a card to pick up a developer)</p>
    <CardGrid />
  </div>
</template>

<script>
import CardGrid from "../components/CardGridCalendar.vue";
export default {
  components: {
    CardGrid,
  },
};
</script>

<template>
  <div class="container">
    <ListView :calendarNotes="notes" />
  </div>
</template>

<script>
import ListView from "@/components/ListView.vue";
export default {
  components: {
    ListView
  },
  data() {
    return {
      notes: JSON.parse(localStorage.getItem('calendarNotes')) || {}
    };
  }
};
</script>

<style scoped>

</style>

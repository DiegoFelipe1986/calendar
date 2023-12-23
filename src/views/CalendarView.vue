<template>
  <div>
    <CalendarView :notes="notes" />
  </div>
</template>

<script>
import CalendarView from '@/components/CalendarView.vue';
export default {
  components: {
    CalendarView,
  },
  props: ['notes'],
};
</script>

<style scoped>
</style>

<template>
  <div>
    <NavbarComponent></NavbarComponent>
    <router-view :notes="notes" />
  </div>
</template>

<script>

import NavbarComponent from "@/components/NavbarComponent.vue";
export default {
  components: {

    NavbarComponent
  },
  data() {
    return {
      notes: {},
    };
  },
};
</script>

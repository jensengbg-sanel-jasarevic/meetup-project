<template>
  <div class="previous-events">
    <Event v-for="event in preEvents" :key="event.id" :event="event" />
  </div>
</template>

<script>
import Event from '@/components/Event.vue'
export default {
  name: 'PreviousEvents',

  components: {
      Event
    },

  created() {
    this.$store.dispatch("getPreviousEvents");
  },

  computed: {
    preEvents() {
      return this.$store.state.previousEvents
    },
  }

}
</script>

<style scoped>
.previous-events {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.2rem;
}
</style>
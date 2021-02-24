<template>
  <div class="upcoming-events">
    <Event v-for="event in pullUpcomingEvents" :key="event.id" :event="event" />
  </div>
</template>

<script>
import Event from '@/components/Event.vue'
export default {
  name: 'Home',
  
  components: {
  Event
  },

  created() {
    this.$store.dispatch("getUpcomingEvents");
  },

  computed: {
    pullUpcomingEvents() {
      return this.$store.state.upcomingEvents;
    },
  }
 
}
</script>

<style scoped>
.upcoming-events {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.2rem;
}
</style>


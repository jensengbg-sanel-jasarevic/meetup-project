<template>
  <div> 
    <h1>Events</h1>
    <div class="upcoming-events">
    <Event v-for="event in pullUpcomingEvents" :key="event.id" :event="event"/>
    </div>
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
h1 {
text-align: center;
}
.upcoming-events {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>


<template>
  <div class="upcoming-events">
    <Event v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
import Event from '@/components/Event.vue'

export default {
  name: 'Home',
  
  components: {
  Event
  },

  computed: {
  events() {
    return this.$store.state.upcomingEvents;
    },
  }

}
</script>

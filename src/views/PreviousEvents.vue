<template>
  <div> 
    <h1>Review events</h1>
    <div class="previous-events">
    <Event v-for="event in pullPreviousEvents" :key="event.id" :event="event"/>
    </div>
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
    pullPreviousEvents() {
      return this.$store.state.previousEvents
    }
  }

}
</script>

<style scoped>
h1 {
  text-align: center;
}
.previous-events {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0.1rem;
}
@media(max-width: 1000px) {
    .previous-events {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
@media(max-width: 800px) {
    .previous-events {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
<template>
      <div  v-if="event" class="attend-event-box">
            <h1>Attend event</h1>
            <img class="attend-event-image" v-bind:src="event.image" />
            <div class="attend-event-details">{{ event.details }} </div>
            <div class="attend-event-attendees">{{ event.attendees }} </div>

            <button class="back-btn" @click="$router.go(-1)">Back</button>
            <button class="add-attend-btn" @click="addNewAttending()">Click to confirm</button>            
        </div>
</template>

<script>
export default {
  name: 'AttendEvent',
  
  // Lifecycle hook needed if page refresh
  created() {
    this.$store.dispatch("getUpcomingEvents"); 
  // Is needed to get the event data so it can display in template
  },

  computed: {
    event() {
      let id = this.$route.params.id;
      return this.$store.state.upcomingEvents.find((event) => event.id == id);
    },  
  },
  
   methods: {
    addNewAttending() {
      // Add attending, then get latest attending data to update site
      this.$store.dispatch("addNewAttending", this.event);
      this.$store.dispatch("getAttending")
    },
  },
}
</script>

<style scoped>
.attend-event-image {
  width: 200px;
  height: 200px;
}
</style>
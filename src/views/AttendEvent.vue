<template>
      <div  v-if="event" class="attend-event-box">
            <p class="attend-event-details">{{ event.date }}</p>
            <h1>{{ event.title }}</h1>
            <img class="attend-event-image" v-bind:src="event.image" />
            <h2>Details</h2>
            <div class="attend-event-details">{{ event.details }} </div>
            <h2>Attendees ({{ event.attendees }})</h2>

            <button class="back-btn" @click="$router.go(-1)">Back</button>
            <AttendBtn @click.native="addNewAttending" />
        </div>
</template>

<script>
import AttendBtn from '@/components/AttendBtn.vue'

export default {
  name: 'AttendEvent',

  components: {
      AttendBtn
  },

  // Lifecycle hook needed if page refresh
  created() {
    this.$store.dispatch("getUpcomingEvents");
    this.$store.dispatch("getAttending");  
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
      this.$store.dispatch("addNewAttending", this.event );
      this.$store.dispatch("getAttending")
    },
  }

}
</script>

<style scoped>
.attend-event-image {
  width: 200px;
  height: 200px;
}
</style>
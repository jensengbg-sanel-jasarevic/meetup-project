<template>
      <div v-if="event" class="signup-event-box">
            <p class="signup-event-details">{{ event.date }}</p>
            <h1 class="signup-event-title">{{ event.title }}</h1>
            <img class="signup-event-image" :src="event.image" />
            <h2>Details</h2>
            <div class="signup-event-details">{{ event.details }}</div>
            <h2 class="signup-event-attendees">Attendees ({{ event.attendees }})</h2>

            <button class="goback-btn" @click="$router.go(-1)">Back</button>
            <SignUpBtn @click.native="addNewSignUp" />
        </div>
</template>

<script>
import SignUpBtn from '@/components/SignUpBtn.vue'
export default {
  name: 'SignUpEvent',
  
  components: {
      SignUpBtn
  },

  // Lifecycle hook needed if page refresh
  created() {
    this.$store.dispatch("getUpcomingEvents");
    this.$store.dispatch("getSignedUpEvents");  
  },

  computed: {
    event() {
      let eventID = this.$route.params.id;
        return this.$store.state.upcomingEvents.find((event) => event.id == eventID);
    },
  },
  
  methods: {
    addNewSignUp() {
      this.$store.dispatch("addNewSignUpEvent", this.event);
    },
  }

}
</script>

<style scoped>
.upcoming-event-image {
  width: 200px;
  height: 200px;
}
</style>
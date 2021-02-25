<template>
      <div v-if="event" class="signup-event-box">
            <p class="signup-event-details">{{ event.date }}</p>
            <h1 class="signup-event-title">{{ event.title }}</h1>
            <img class="signup-event-image" :src="event.image" />
            <h2>Details</h2>
            <div class="signup-event-details">{{ event.details }}</div>
            <h2 class="signup-event-attendees">Attendees ({{ event.attendees }})</h2>
            
            <SignUpBtn @click.native="addNewSignUp" />
            <button class="goback-btn" @click="$router.go(-1)">Back to events</button>
        </div>
</template>

<script>
import SignUpBtn from '@/components/SignUpBtn.vue'
export default {
  name: 'SignUpEvent',
  
  components: {
      SignUpBtn
  },

  // Lifecycle hook needed if refresh browser 
  // Get latest data for specific event via store > localstorage 
  created() {
    this.$store.dispatch("getUpcomingEvents");
    this.$store.dispatch("getSignedUpEvents");  
  },

  // Get correct event from the store > state 
  // Computed property runs after lifecycle hook "created()" has get all necessary data from localstorage
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
.signup-event-box {
  margin-top: 1%;
  margin-right: 20%;
  margin-left: 20%;
}
.signup-event-image {
  max-width: 100%;
  border-radius: 5px;
}
.goback-btn {
  display: block;
  margin : 0 auto;
  background-color: #405DE6;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 10px 12px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 1%;
  outline: none;
}
</style>
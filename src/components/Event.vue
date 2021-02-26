<template>
      <div v-if="event" class="event-box" >
          <div class="event-info">
          <img class="event-image" :src="event.image" alt="">
          <p class="event-date">{{ event.date }}</p>
          <h4 class="event-title">{{ event.title }}</h4>
          <p class="event-city">{{ event.city }}</p>
          </div>

         <div v-if="event.upcoming">
          <button @click="routerToSignUp(event.id)" class="upcoming-event-btn">More info</button>
            <span v-if="signedUpForEvent" class="event-signed">Event signed up!</span>
         </div>

         <div v-if="!event.upcoming">
          <button @click="routerToReview(event.id)" class="previous-event-btn">Reviews</button>
         </div>
     </div>
</template>

<script>
export default {
  name: 'Event',

  props: {
    event: Object
  },
  created() {
    this.$store.dispatch("getUpcomingEvents");
    this.$store.dispatch("getSignedUpEvents");  
  },
  
  computed: {
    pullUpcomingEvents() {
      return this.$store.state.upcomingEvents;
    },
    pullAllSignedUpEvents() {
      return this.$store.state.signedUp;
    },
    signedUpForEvent() {
      return this.pullAllSignedUpEvents.find((signedUp) => signedUp.id === this.event.id);
    }
  },
  
  methods: {
    routerToSignUp(eventID) {
      this.$router.push("/signupevent/" + eventID);
    },   
    routerToReview(eventID) {
      this.$router.push("/reviewevent/" + eventID);
    },
  }
  
}
</script>

<style scoped>
.event-box {
  margin-left: 5%;
}
p, h4 {
  margin: 5px;
}
.event-image {
  border-radius: 10px;
  height: 200px;
  width: 300px;
}
.upcoming-event-btn, .previous-event-btn {
  margin : 0 auto;
  background-color: #42b983;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 10px 12px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 1%;
  margin-bottom: 2%;
  outline: none;
}
.event-signed {
  text-align: center;
  background-color: #FFAE42;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 5px 5px;
  font-size: 1em;
  display: table;
  margin-bottom: 1%;
}
</style>
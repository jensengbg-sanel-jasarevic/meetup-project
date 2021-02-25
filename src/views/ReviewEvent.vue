<template>
    <div class="review-event-box">
        <div class="review-event-date">{{ event.date }}</div>
        <h1 class="review-event-title">{{ event.title }}</h1>
        <img class="review-event-image" :src="event.image" />
        <h4>Category</h4>
        <div class="review-event-category">{{ event.category }}</div>
        <h3>Details</h3>
        <div class="review-event-details">{{ event.details }}</div>
        <h3 class="review-event-attendees">Attended ({{ event.attendees }})</h3>
        <h3 class="review-event-posts">Review event</h3>
        <ReviewInput :event="event" />
        <button class="goback-btn" @click="$router.go(-1)">Back to events</button>
  </div>
</template>

<script>
import ReviewInput from '@/components/ReviewInput.vue'
export default {
  name: 'ReviewEvent',

  components: {
    ReviewInput,
  },

  // Lifecycle hook needed if refresh browser 
  // Get latest data for specific event via store > localstorage 
  created() {
    this.$store.dispatch("getPreviousEvents"); 
    this.$store.dispatch("getReviews"); 
  },
  
  // Get correct event from the store > state 
  // Computed property runs after lifecycle hook "created()" has get all necessary data from localstorage 
  computed: {
    event() {
      let eventID = this.$route.params.id;
        return this.$store.state.previousEvents.find((event) => event.id == eventID);
    }
  }, 
  
}
</script>

<style scoped>
.review-event-box {
  margin-top: 1%;
  margin-right: 20%;
  margin-left: 20%;
}
.review-event-image {
  max-width: 100%;
  border-radius: 5px;
}
.review-event-posts {
  text-align: center;
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
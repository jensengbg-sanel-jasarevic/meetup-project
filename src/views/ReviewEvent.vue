<template>
    <div class="review-event-box">
        <div class="review-event-date">{{ event.date }}</div>
        <h1 class="review-event-title">{{ event.title }}</h1>
        <img class="review-event-image" :src="event.image" />
        <h4>Category</h4>
        <div class="review-event-category">{{ event.category }}</div>
        <h3>Details</h3>
        <div class="review-event-details">Details {{ event.details }}</div>
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

  created() {
    this.$store.dispatch("getPreviousEvents"); 
    this.$store.dispatch("getReviews"); 
  },

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
  margin-left: 20%;
  margin-right: 20%;
}
.review-event-image {
  max-width: 100%;
}
.review-event-posts {
  text-align: center;
}
.goback-btn {
  display: block;
  margin : 0 auto;
  background-color: #FFAE42;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 10px 12px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 1%;
}
</style>
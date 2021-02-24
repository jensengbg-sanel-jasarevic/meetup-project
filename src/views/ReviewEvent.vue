<template>
      <div class="review-event-box">
        <div class="review-event-date">{{ event.date }}</div>
        <h1 class="review-event-title">{{ event.title }}</h1>
        <img class="review-event-image" :src="event.image" />
        <h4>Category</h4>
        <div class="review-event-category">{{ event.category }}</div>
        <h2>Details</h2>
        <div class="review-event-details">Details {{ event.details }}</div>
        <h2 class="review-event-attendees">Attended ({{ event.attendees }})</h2>
        
        <ReviewInput :event="event" />
        <button class="goback-btn" @click="$router.go(-1)">Back</button>
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
.review-event-image {
  width: 200px;
  height: 200px;
}
</style>
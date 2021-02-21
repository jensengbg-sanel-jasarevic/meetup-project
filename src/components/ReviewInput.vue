<template>
  <div v-if="getAllReviews" class="all-reviews">
    <form @submit.prevent="addNewReview">
    <label for="review" :id="event.id">
    <input v-model="inputReviewText" :id="event.id" type="text" class="review-input">
    </label>

    <button type="submit" >Leave a review</button>
    </form>

    <EventReviews v-for="review in reviewsForSpecificEvent" :key="review.reviewId" :review="review" />
  </div>
</template>

<script>
import EventReviews from '@/components/EventReviews.vue'

export default {
  name: 'ReviewInput',
  
  data() {
    return {
      inputReviewText: "",
    };
  },

  props: {
    event: Object,
  },

 components: {
  EventReviews
  },

  computed: {
    getAllReviews() {
      return this.$store.getters.getterReviews;
    },
    
    reviewsForSpecificEvent() {
      return this.getAllReviews.filter((review) => review.eventId === this.event.id);
    },
  },

  methods: {
    async addNewReview() {
      const newReview = {
        reviewText: this.inputReviewText,
        reviewId: Math.floor(Math.random() * 101),
        eventId: this.event.id,
      };      
      this.$store.dispatch("addNewReview", newReview);
      this.inputReviewText = "";    
      },
    },

}
</script>

<style scoped>
.review-input {
  height: 45px;
}
</style>
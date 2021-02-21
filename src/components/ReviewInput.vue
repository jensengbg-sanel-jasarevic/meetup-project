<template>
  <div v-if="getAllReviews" class="all-reviews">
    <input v-model="inputReview" type="text"  class="review-input">
        
    <button @click="addNewReview">Leave a review</button>

    <p>{{ reviewsForSpecificEvent }}</p>
  </div>
</template>

<script>

export default {
  name: 'ReviewInput',

  props: {
    event: Object,
  },

  data() {
    return {
      inputReview: "",
    };
  },

  computed: {
    getAllReviews() {
      return this.$store.getters.getterReviews;
    },
    
    reviewsForSpecificEvent() {
      let specificEventReviews = this.getAllReviews.filter((review) => review.eventId === this.event.id);
      return specificEventReviews;  
    },
  },

  methods: {
    async addNewReview() {
      const newReview = {
        review: this.inputReview,
        reviewId: Math.floor(Math.random() * 101),
        eventId: this.event.id,
      };      
      this.$store.dispatch("addNewReview", newReview);
      this.inputReview = "";    },
    },

}
</script>

<style scoped>

</style>
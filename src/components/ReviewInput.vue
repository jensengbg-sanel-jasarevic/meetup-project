<template>
  <div v-if="getAllReviews" class="all-reviews">
    <form @submit.prevent="addNewReview">
    <label for="review" :id="event.id">
    <input v-model="inputValue" :id="event.id" type="text" class="review-input">
    </label>

    <button type="submit">Post review</button>
    </form>

    <EventReviews v-for="review in reviewsForSpecificEvent" :key="review.reviewID" :review="review" />
  </div>
</template>

<script>
import EventReviews from '@/components/EventReviews.vue'
export default {
  name: 'ReviewInput',
  
  data() {
    return {
      inputValue: "",
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
      return this.getAllReviews.filter((review) => review.eventID === this.event.id);
    },
  },

  methods: {
    async addNewReview() {
      const newReview = {
        reviewText: this.inputValue,
        reviewID: Math.floor(Math.random() * 101),
        eventID: this.event.id,
      };      
      this.$store.dispatch("addNewReview", newReview);
      this.inputValue = "";    
      },
    },

}
</script>

<style scoped>
.review-input {
  height: 45px;
}
</style>
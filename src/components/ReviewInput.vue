<template>
  <div class="review-input-box">
    <form @submit.prevent="addNewReview">
    <label for="review">
    <textarea v-model="inputValue" rows="4" />
    </label>
    <button type="submit" class="review-submit-btn">Post review</button>
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
form {
  display: flex;
  flex-direction: column;
}
textarea{
  min-width: 25vw;
  display: block;
  margin : 0 auto;
  padding: 1.1em;
  border-radius: 8px;
  color: #555555;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;    
}
.review-submit-btn {
  display: block;
  margin : 0 auto;
  background-color: #42b983;
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
<template>
      <div class="review-event-box">

       <button class="back-btn" @click="$router.go(-1)">Back</button>

      <ReviewInput :event="event" />
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
      if (this.$route) {
        let id = this.$route.params.id;
        return this.$store.state.previousEvents.find((event) => event.id == id);
      }
    }
  }, 
  
}
</script>

<style scoped>

</style>
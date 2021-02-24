<template>
      <div class="review-event-box">
      <!--<div class="review-event-date">{{ event.date }} </div>-->
       
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
      let id = this.$route.params.id;
        return this.$store.state.previousEvents.find((event) => event.id == id);
    }
  }, 
  
}
</script>

<style scoped>

</style>
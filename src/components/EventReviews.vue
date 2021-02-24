<template>
  <div class="event-reviews-box">
      <p class="review-text">{{review.reviewText}}</p>
  </div>
</template>

<script>
export default {
  name: 'EventReviews',

  props: {
    review: Object,
  },

}
</script>

<style scoped>

</style>
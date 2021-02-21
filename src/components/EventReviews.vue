<template>
  <div class="">
      <p>{{review.reviewText}}</p>
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
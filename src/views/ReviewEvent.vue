<template>
      <div class="review-event-box">

       <button class="back-btn" @click="$router.go(-1)">Back</button>

      <ReviewInput  />
  </div>
</template>

<script>
import ReviewInput from '@/components/ReviewInput.vue'

export default {
  name: 'ReviewEvent',

  components: {
    ReviewInput,
  },
 
  
}
</script>

<style scoped>

</style>
<template>
   <div class="">

    <button @click="addNewReview">Leave a review</button>
 
  </div>
</template>

<script>

export default {
  name: 'ReviewInput',


  methods: {
    async addNewReview() {
      this.$store.dispatch("addNewReview");
    },
  },

}
</script>

<style scoped>

</style>
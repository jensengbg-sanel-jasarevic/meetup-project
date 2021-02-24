<template>
      <div class="sign-btn-box">
            <button class="sign-btn">Sign up for event</button>
            <p v-if="checkSignedUp" class="signed-up">Confirmation: Signed up for this event!</p> 
        </div>
</template>

<script>
export default {
  name: 'SignUpBtn',

  computed: {
    checkSignedUp() {
      let eventID = this.$route.params.id;
      let result = this.$store.state.attending.find((event) => event.id == eventID)
        return result
    }
  },
  
}
</script>

<style scoped>

</style>
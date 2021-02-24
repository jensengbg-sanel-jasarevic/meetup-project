<template>
      <div class="attend-btn-box">
            <button class="attend-btn">Register for event</button>
            <p v-if="checkIfAttending" class="event-registered">This event is registered!</p> 
        </div>
</template>

<script>
export default {
  name: 'AttendBtn',

  computed: {
    checkIfAttending() {
      let id = this.$route.params.id;
      let checkAttending = this.$store.state.attending.find((event) => event.id == id)
        return checkAttending
    }
  },
  
}
</script>

<style scoped>

</style>
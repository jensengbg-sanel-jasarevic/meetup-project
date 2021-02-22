<template>
      <div v-if="event" class="event-box" >

          <div class="info">
          <img class="e-image" :src="event.image" alt="">
          <p class="e-date">{{ event.date }}</p>
          <h4 class="e-title">{{ event.title }}</h4>
          <p class="e-city">{{ event.city }}</p>
          </div>

         <div v-if="event.upcoming">
          <button @click="routerToAttend(event.id)" class="attend-button">More info</button>
         </div>
         
         <div v-if="!event.upcoming">
          <button @click="routerToReviews(event.id)" class="review-button">Reviews</button>
         </div>

     </div>
</template>

<script>

export default {
  name: 'Event',

  props: {
    event: Object,
  },
  
 methods: {
    routerToAttend(eventId) {
      this.$router.push("/attendevent/" + eventId);
    },   
    routerToReviews(eventId) {
      this.$router.push("/reviewevent/" + eventId);
    },
  }
}
</script>

<style scoped>
.e-image {
    height: 200px;
    width: 200px;
}
</style>
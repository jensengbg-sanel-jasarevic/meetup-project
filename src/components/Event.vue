<template>
      <div v-if="event" class="event-box" >

          <div class="event-info">
          <img class="event-image" :src="event.image" alt="">
          <p class="event-date">{{ event.date }}</p>
          <h4 class="event-title">{{ event.title }}</h4>
          <p class="event-city">{{ event.city }}</p>
          </div>

         <div v-if="event.upcoming">
          <button @click="routerToAttend(event.id)" class="upcoming-event-btn">More info</button>
         </div>
         
         <div v-if="!event.upcoming">
          <button @click="routerToReviews(event.id)" class="previous-event-btn">Reviews</button>
         </div>

     </div>
</template>

<script>
export default {
  name: 'Event',

  props: {
    event: Object
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
.event-image {
    height: 200px;
    width: 200px;
}
</style>
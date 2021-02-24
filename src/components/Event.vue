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
    routerToAttend(eventID) {
      this.$router.push("/signupevent/" + eventID);
    },   
    routerToReviews(eventID) {
      this.$router.push("/reviewevent/" + eventID);
    },
  }
  
}
</script>

<style scoped>
.event-image {
    border-radius: 10px;
    height: 200px;
    width: 300px;
}
</style>
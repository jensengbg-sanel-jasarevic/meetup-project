<template>
      <div v-if="event" class="event-box" >

          <div class="info">
          <img class="e-image" :src="event.image" alt="">
          <p class="e-event">{{ event.event }}</p>
          <p class="e-city">{{ event.city }}</p>
          <p class="e-date">{{ event.date }}</p>
          </div>

          <router-link v-bind:to="'/attendevent/' + event.id">
          <button class="attend-button" v-if="event.upcoming">Click to attend event</button>
          </router-link>

          <router-link v-bind:to="'/reviewevent/' + event.id">
          <button class="review-button" v-if="!event.upcoming">Click to review event</button>
          </router-link>

     </div>
</template>

<script>

export default {
  name: 'Event',

  props: {
    event: Object,
  },
 
}
</script>

<style scoped>
.e-image {
    height: 200px;
    width: 200px;
}
</style>
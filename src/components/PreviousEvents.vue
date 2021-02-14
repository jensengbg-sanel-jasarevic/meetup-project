<template>
  <section class="pre-events">
      <div class="event-box" v-for="event in events" :key="event.id" :event="event">

        <img class="e-image" :src="event.image" alt="">
        <p class="e-event">{{ event.event }}</p>
        <p class="e-city">{{ event.city }}</p>
        <p class="e-date">{{ event.date }}</p>
        <p class="e-details">{{ event.details }}</p>
        <p class="e-attended">{{ event.attended }}</p>
        
        <Review />
      </div>
  </section>
</template>

<script>
import Review from '@/components/Review.vue'
// @ is an alias to /src

export default {
  name: 'PreviousEvents',

   data() {
    return {
      events: 
      [
        {id: 1, image: "https://vuejs.org/images/logo.png", event: "eventValue", date: "dateValue", city: "cityValue", details: "detailsValue", attended: 0, category: "categoryValue", upcoming: false, reviews: [] },
        {id: 12, image: "https://vuejs.org/images/logo.png", event: "eventValue", date: "dateValue", city: "cityValue", details: "detailsValue", attended: 0, category: "categoryValue", upcoming: false, reviews: [] },
        {id: 123, image: "https://vuejs.org/images/logo.png", event: "eventValue", date: "dateValue", city: "cityValue", details: "detailsValue", attended: 0, category: "categoryValue", upcoming: false, reviews: [] },
        {id: 1234, image: "https://vuejs.org/images/logo.png", event: "eventValue", date: "dateValue", city: "cityValue", details: "detailsValue", attended: 0, category: "categoryValue", upcoming: false, reviews: [] },
        {id: 12345, image: "https://vuejs.org/images/logo.png", event: "eventValue", date: "dateValue", city: "cityValue", details: "detailsValue", attended: 0, category: "categoryValue", upcoming: false, reviews: [] },
        {id: 123456, image: "https://vuejs.org/images/logo.png", event: "eventValue", date: "dateValue", city: "cityValue", details: "detailsValue", attended: 0, category: "categoryValue", upcoming: false, reviews: [] },
      ],
    };
  },

  components: {
      Review
  }
  
}
</script>

<style scoped>
.e-image {
    width: 50%;
}

.pre-events {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.2rem;
}

</style>
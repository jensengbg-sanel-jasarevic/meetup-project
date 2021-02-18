<template>
  <div class="upcoming-events">
    <Event  />
  </div>
</template>

<script>
import Event from '@/components/Event.vue'

export default {
  name: 'Home',
  
  components: {
  Event
  },


}
</script>

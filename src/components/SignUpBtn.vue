<template>
      <div>
        <div v-if="checkIfSignedUp" class="signed-up-event">
          <span>Event signed up!</span> 
        </div>

        <div v-else class="sign-event">
          <button @click="addNewSignUp" class="sign-btn">Sign up for event</button>
        </div>            
      </div>
</template>

<script>
export default {
  name: 'SignUpBtn',
  
  props: {
    event: Object
  },

  computed: {
    checkIfSignedUp() {
      let eventID = this.$route.params.id;
      let signedUp = this.$store.state.signedUp.find((event) => event.id == eventID)
        return signedUp
     }
  },
  
  methods: {
    addNewSignUp() {
      this.$store.dispatch("addNewSignUpEvent", this.event);
    },
  }
  
}
</script>

<style scoped>
.signed-up-event > span{
  text-align: center;
  background-color: #FFAE42;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 10px 12px;
  font-size: 1em;
  display: table;
  margin: 0 auto;
}
.sign-btn {
  display: block;
  margin : 0 auto;
  background-color: #42b983;
  border-radius: 8px;
  border: none;
  color: white;
  padding: 10px 12px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 1%;
  outline: none;
}
</style>
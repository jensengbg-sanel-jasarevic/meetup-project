import Vue from 'vue'
import Vuex from 'vuex'
import { setUpcomingEvents, setPreviousEvents, getLocalStorageReviews, getLocalStorageSignedUp } from "@/localstorage_data/localstorageData.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    upcomingEvents: [], 
    previousEvents: [],
    reviews: [],
    signedUp: []
  },
  mutations: {
    pushUpcomingEvents(state, data) {
      state.upcomingEvents = data;
    },
    pushPreviousEvents(state, data) {
      state.previousEvents = data;
    },
    pushReviews(state, data) {
      state.reviews = data;
    },    
    pushSignedUpEvents(state, data) {
      state.attending = data;
    },
    addToReviews(state, newReview) {
      state.reviews.push(newReview);
      localStorage.setItem("reviews", JSON.stringify(state.reviews));
    },
    addToSignedUp(state, newSignUp) {
      if (!state.signedUp.find((event) => event.id === newSignUp.id)) {
      state.signedUp.push(newSignUp);
      localStorage.setItem("signed-up", JSON.stringify(state.signedUp));
      }
    },    

  },
  actions: {
    async getUpcomingEvents(ctx) {
      try {
        setUpcomingEvents()

        let res = await localStorage.getItem("upcoming-events")
        let data = JSON.parse(res)
        ctx.commit('pushUpcomingEvents', data)
      
      } catch (err) {
        console.error(err)
      }
    },

    async getPreviousEvents(ctx) {
      try {
        setPreviousEvents()

        let res = await localStorage.getItem("previous-events")
        let data = JSON.parse(res)
        ctx.commit('pushPreviousEvents', data)
      
      } catch (err) {
        console.error(err)
      }
    },

    async getReviews(ctx) {
      let localStorageReviews = await getLocalStorageReviews();
      if (localStorageReviews) {
        ctx.commit("pushReviews", localStorageReviews);
      }
    }, 

    async getSignedUpEvents(ctx) {
      let localStorageSignedUpEvents = await getLocalStorageSignedUp();
      if (localStorageSignedUpEvents) {
        ctx.commit("pushSignedUpEvents", localStorageSignedUpEvents);
      }
    },

    addNewReview(context, newReview) {
      context.commit("addToReviews", newReview);
    },

    addNewSignUpEvent(context, newSignUp) {
      context.commit("addToSignedUp", newSignUp);
    },
          
  },
  modules: {
  },

  getters: { 
    getterReviews: state => {
      return state.reviews;
    }
  }

})
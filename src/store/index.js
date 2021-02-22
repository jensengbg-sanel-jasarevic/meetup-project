import Vue from 'vue'
import Vuex from 'vuex'
import { setUpcomingEvents, setPreviousEvents, getLocalStorageReviews, getLocalStorageAttending } from "@/localstorage_data/localstorageData.js";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    upcomingEvents: [], 
    previousEvents: [],
    reviews: [],
    attending: []
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
    pushAttending(state, data) {
      state.attending = data;
    },
    addToReviews(state, newReview) {
      state.reviews.push(newReview);
      localStorage.setItem("reviews", JSON.stringify(state.reviews));
    },
    addToAttending(state, newAttending) {
      if (!state.attending.find((event) => event.id === newAttending.id)) {
      state.attending.push(newAttending);
      localStorage.setItem("attending", JSON.stringify(state.attending));
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

    async getAttending(ctx) {
      let localStorageAttending = await getLocalStorageAttending();
      if (localStorageAttending) {
        ctx.commit("pushAttending", localStorageAttending);
      }
    },

    addNewReview(context, newReview) {
      context.commit("addToReviews", newReview);
    },

    addNewAttending(context, newAttending) {
      context.commit("addToAttending", newAttending);
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
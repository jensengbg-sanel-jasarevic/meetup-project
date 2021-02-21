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
          
  },
  modules: {
  },

  getters: { 
    getterReviews: state => {
      return state.reviews;
    }
  }

})
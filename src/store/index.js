import Vue from 'vue'
import Vuex from 'vuex'
import { setUpcomingEvents, setPreviousEvents, getLocalStorageAttending } from "@/localstorage_data/localstorageData.js";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    upcomingEvents: [], 
    previousEvents: [],
    attending: []
  },
  mutations: {
    pushUpcomingEvents(state, data) {
      state.upcomingEvents = data;
    },
    pushPreviousEvents(state, data) {
      state.previousEvents = data;
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
    async getAttending(ctx) {
      let localStorageAttending = await getLocalStorageAttending();
      if (localStorageAttending) {
        ctx.commit("pushAttending", localStorageAttending);
      }
    },
          
  },
  modules: {
  }
})

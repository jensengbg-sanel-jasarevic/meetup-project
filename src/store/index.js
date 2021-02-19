import Vue from 'vue'
import Vuex from 'vuex'
import { setUpcomingEvents, setPreviousEvents } from "@/localstorage_data/localstorageData.js";


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

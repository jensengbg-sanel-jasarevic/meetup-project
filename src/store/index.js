import Vue from 'vue'
import Vuex from 'vuex'
import { setUpcomingEvents, setPreviousEvents } from "@/localstorage_data/localstorageData.js";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    upcomingEvents: [], 
    previousEvents: [],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

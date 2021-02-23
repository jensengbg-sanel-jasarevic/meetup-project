import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockPreviousEvent,  } from "./mockData"
import Vuex from 'vuex';
import PreviousEvents from "@/views/PreviousEvents.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe('PreviousEvents.vue', () => {
    let store;
    let state;
    let actions;

    beforeEach(() => {
      actions = {
        getPreviousEvents: jest.fn(),
        getReviews: jest.fn()
      };
      state = {
        previousEvents: [ mockPreviousEvent() ]
      };      

      store = new Vuex.Store({
        state,
        actions
      });
      
    });
  
    it('should when created dispatch two actions to Vuex store', () => {
      // Arrange
      shallowMount(PreviousEvents, {
        localVue,
        store
      });
  
      // Act
      const actualOne = actions.getPreviousEvents
      const actualTwo = actions.getReviews
  
      // Assert
      expect(actualOne).toHaveBeenCalled();
      expect(actualTwo).toHaveBeenCalled();
    });
  
    it('should when mounted render data from Vuex store state via computed property', () => {
      // Arrange
      const wrapper = shallowMount(PreviousEvents, {
        localVue,
        store
      })
      const expected = [ mockPreviousEvent() ]
      
      // Act
      const actual = wrapper.vm.preEvents
  
      // Assert
      expect(actual).toStrictEqual(expected);
    });
  
    it('should when component mounted have child component with name "Event"', () => {
      // Arrange
      const wrapper = mount(PreviousEvents, {
        localVue,
        store
      })
      const expected = true
      
      // Act
      const actual = wrapper.findComponent({
        name: "Event",
      });
  
      // Assert
      expect(actual.exists()).toBe(expected);
    });
  
  })
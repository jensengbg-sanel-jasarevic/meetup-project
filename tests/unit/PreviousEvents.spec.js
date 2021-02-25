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
      };
      state = {
        previousEvents: [ mockPreviousEvent() ]
      };      

      store = new Vuex.Store({
        state,
        actions
      });
      
    });
  
    it('should when created dispatch action to Vuex store', () => {
      // Arrange
      shallowMount(PreviousEvents, {
        localVue,
        store
      });
  
      // Act
      const actual = actions.getPreviousEvents
  
      // Assert
      expect(actual).toHaveBeenCalled();
    });
  
    it('should when mounted render correct data from Vuex store state via computed property', () => {
      // Arrange
      const wrapper = shallowMount(PreviousEvents, {
        localVue,
        store
      })
      const expected = [ mockPreviousEvent() ]
      
      // Act
      const actual = wrapper.vm.pullPreviousEvents
  
      // Assert
      expect(actual).toStrictEqual(expected);
    });
  
    it('should when mounted have child component with name "Event"', () => {
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
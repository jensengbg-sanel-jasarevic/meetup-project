import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockPreviousEvent, mockEventObj } from "./mockData"
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import PreviousEvents from "@/views/PreviousEvents.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter()

describe('PreviousEvents.vue', () => {
    let store;
    let actions;

    beforeEach(() => {
      actions = {
        getPreviousEvents: jest.fn(),
        getReviews: jest.fn()
      };

      store = new Vuex.Store({
        state: {
          previousEvents: [ mockPreviousEvent() ]
        },
        actions
      });
      
    });
  
    it('should when created dispatch two actions to Vuex store', () => {
      // Arrange
      shallowMount(PreviousEvents, {
        localVue,
        store,
        router
      });
  
      // Act
      const actualOne = actions.getPreviousEvents
      const actualTwo = actions.getReviews
  
      // Assert
      expect(actualOne).toHaveBeenCalled();
      expect(actualTwo).toHaveBeenCalled();
    });
  
    it('should when mounted get correct data from the Vuex store state ', () => {
      // Arrange
      const wrapper = shallowMount(PreviousEvents, {
        localVue,
        store,
        router,
        computed: {
          preEvents() {
            return store.state.previousEvents
          }
        }
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
        store,
        router,
        computed: {
          preEvents() {
            return mockEventObj()
          }
        }
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
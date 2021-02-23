import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockUpcomingEvent, mockEventObj } from "./mockData"
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter()

 describe('Home.vue', () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      getUpcomingEvents: jest.fn(),
      getAttending: jest.fn()
    };
    
    store = new Vuex.Store({
      state: {
        upcomingEvents: [ mockUpcomingEvent() ]
      },
      actions
    });
    
  });

  it('should when created dispatch two actions to Vuex store', () => {
    // Arrange
    shallowMount(Home, {
      localVue,
      store,
      router
    });

    // Act
    const actualOne = actions.getUpcomingEvents
    const actualTwo = actions.getAttending

    // Assert
    expect(actualOne).toHaveBeenCalled();
    expect(actualTwo).toHaveBeenCalled();
  });

  it('should when mounted get correct data from the Vuex store state', () => {
    // Arrange
    const wrapper = shallowMount(Home, {
      localVue,
      store,
      router,
      computed: {
        events() {
          return store.state.upcomingEvents
        }
      }
    })
    
    const expected = [ mockUpcomingEvent() ]
    
    // Act
    const actual = wrapper.vm.events

    // Assert
    expect(actual).toStrictEqual(expected);
  });

    it('should when component mounted have child component with name "Event"', () => {
    // Arrange
    const wrapper = mount(Home, {
      localVue,
      store,
      router,
      computed: {
        events() {
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

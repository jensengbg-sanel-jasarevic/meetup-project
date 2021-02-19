import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import { mockUpcomingEventData, mockEventData } from "./mockData"
import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter()

 describe('Home.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      getUpcomingEvents: jest.fn(),
      getAttending: jest.fn()
    };
    store = new Vuex.Store({
      state: {
        upcomingEvents: [ mockUpcomingEventData() ]
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
    const actualOne = actions.getAttending
    const actualTwo = actions.getUpcomingEvents

    // Assert
    expect(actualOne).toHaveBeenCalled();
    expect(actualTwo).toHaveBeenCalled();
  });

  it('should when mounted get data from the Vuex store state ', () => {
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
    
    const expected = [ mockUpcomingEventData() ]
    
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
          return mockEventData()
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

import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import { mockEventData } from "./mockData"
import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter()


// Shoould get data from the Vuex store (should be array with upcoming events)

 describe('Home.vue', () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      getUpcomingEvents: jest.fn(),
      getAttending: jest.fn()
    };
    store = new Vuex.Store({
      state: {},
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

    it('should when component is mounted have a component with name "Event"', () => {
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

import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockUpcomingEvent } from "./mockData"
import Vuex from 'vuex';
import Home from "@/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

 describe('Home.vue', () => {
  let store;
  let state;
  let actions;

  beforeEach(() => {
    state = {
      upcomingEvents: [ mockUpcomingEvent() ]
    };
    actions = {
      getUpcomingEvents: jest.fn(),
    };
    
    store = new Vuex.Store({
      state,
      actions
    });
    
  });

  it('should when mounted dispatch action to Vuex store', () => {
    // Arrange
    shallowMount(Home, {
      localVue,
      store
    });

    // Act
    const actual = actions.getUpcomingEvents

    // Assert
    expect(actual).toHaveBeenCalled();
  });

  it('should when mounted render data from Vuex store state via computed property', () => {
    // Arrange
    const wrapper = shallowMount(Home, {
      localVue,
      store
    })
    const expected = [ mockUpcomingEvent() ]
    
    // Act
    const actual = wrapper.vm.pullUpcomingEvents

    // Assert
    expect(actual).toStrictEqual(expected);
  });

    it('should when component mounted have child component with name "Event"', () => {
    // Arrange
    const wrapper = mount(Home, {
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

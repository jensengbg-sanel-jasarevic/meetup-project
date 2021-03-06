import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockEvent } from "./mockData"
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
      upcomingEvents: [ mockEvent() ],
      signedUp: [ mockEvent() ]
    };
    actions = {
      getUpcomingEvents: jest.fn(),
      getSignedUpEvents: jest.fn()
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

  it('should when mounted render correct data from Vuex store state via computed property', () => {
    // Arrange
    const wrapper = shallowMount(Home, {
      localVue,
      store
    })
    const expected = [ mockEvent() ]
    
    // Act
    const actual = wrapper.vm.pullUpcomingEvents

    // Assert
    expect(actual).toStrictEqual(expected);
  });

    it('should when mounted have child component with name "Event"', () => {
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

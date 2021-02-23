import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockPreviousEvent } from "./mockData"
import Vuex from 'vuex';
import ReviewEvent from "@/views/ReviewEvent.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const $route = {
  path: '/reviewevent/:id',
  params: {
    id: "555"
  }
}

describe('ReviewEvent.vue', () => {
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

  it('should check if computed property renders correct event data', () => {
    // Arrange
    const wrapper = shallowMount(ReviewEvent, {
      localVue,
      store,
      mocks: {
        $route
      }
    })
    const expected = mockPreviousEvent()
    
    // Act
    const actual = wrapper.vm.event

    // Assert
    expect(actual).toStrictEqual(expected);
  })

  it('should when created dispatch two actions to Vuex store', () => {
    // Arrange
    shallowMount(ReviewEvent, {
      localVue,
      store,
      mocks: {
        $route
      }
    });

    // Act
    const actualOne = actions.getPreviousEvents
    const actualTwo = actions.getReviews

    // Assert
    expect(actualOne).toHaveBeenCalled();
    expect(actualTwo).toHaveBeenCalled();
  });

  it('should have a button with class name ".back-btn"', () => {
    // Arrange
    const wrapper = shallowMount(ReviewEvent, {
      localVue,
      store,
      mocks: {
        $route
      }
    })
    const expected = true
    
    // Act
    const buttonElement = wrapper.find('.back-btn')
    const actual = buttonElement.exists()

    // Assert
    expect(actual).toBe(expected);
  })

  it('should when component is mounted have a component with name "ReviewInput"', () => {
    // Arrange
    const wrapper = mount(ReviewEvent, {
      localVue,
      store,
      mocks: {
        $route
      },      
    });
    const expected = true
    
    // Act
    const actual = wrapper.findComponent({
      name: "ReviewInput",
    });

    // Assert
    expect(actual.exists()).toBe(expected);
  });

})
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import { mockPreviousEvent, mockEventObj } from "./mockData"
import ReviewEvent from "@/views/ReviewEvent.vue";

// It should have a go-back button
// It should check if route id is the same as vuex store previous event 

const localVue = createLocalVue();
localVue.use(Vuex);

 describe('ReviewEvent.vue', () => {
  let actions;
  let store;

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

  it('Should have a go-back button', () => {
    // Arrange
    //const wrapper = shallowMount(ReviewEvent);
    //const expected;
    
    // Act


    // Assert
  });

    it('should when component is mounted have a component with name "ReviewInput"', () => {
    // Arrange
    const wrapper = mount(ReviewEvent, {
      localVue,
      store
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
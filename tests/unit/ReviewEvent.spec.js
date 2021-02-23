import { shallowMount, mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import { mockPreviousEvent, mockEventObj } from "./mockData"
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import ReviewEvent from "@/views/ReviewEvent.vue";
import ReviewInput from "@/components/ReviewInput.vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
localVue.use(Vuex);
const router = new VueRouter();

 describe('ReviewEvent.vue', () => {
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

  it('should check if route id is the same as vuex store previous event', async () => {
    // Arrange

    // Act

    // Assert
  });

  it('should have a go-back button', () => {
    // Arrange
    
    // Act

    // Assert
  });

    it('should when component is mounted have a component with name "ReviewInput"', () => {
    // Arrange
    const wrapper = mount(ReviewEvent, {
      localVue,
      router,
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
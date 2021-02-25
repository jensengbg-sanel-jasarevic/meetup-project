import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockPreviousEvent, mockReview } from "./mockData"
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
  let getters;

  beforeEach(() => {
    state = {
      previousEvents: [ mockPreviousEvent() ],
      reviews: [ mockReview() ]
    },    
    actions = {
      getPreviousEvents: jest.fn(),
      getReviews: jest.fn()
    },
    getters = {
      getterReviews: () => state.reviews
    }      

    store = new Vuex.Store({
      state,
      actions,
      getters
    });

  });

  it('should check if computed property renders correct data', () => {
    // Arrange
    const wrapper = shallowMount(ReviewEvent, {
      localVue,
      store,
      mocks: {
        $route
      },
    })
    const expected = mockPreviousEvent()
    
    // Act
    const actual = wrapper.vm.event

    // Assert
    expect(actual).toStrictEqual(expected);
  })

  it('should when mounted dispatch two actions to Vuex store', () => {
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

  it('should have a button with class name ".goback-btn"', () => {
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
    const button = wrapper.find('.goback-btn')
    const actual = button.exists()

    // Assert
    expect(actual).toBe(expected);
  })

  it('should when mounted have component with name "ReviewInput"', () => {
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

  it("should when mounted display the correct data in template from computed property", () => {
    // Arrange
    const wrapper = shallowMount(ReviewEvent, {
      localVue,
      store,
      mocks: {
        $route
      },            
    });
    const expectedDate = wrapper.vm.event.date
    const expectedTitle = wrapper.vm.event.title
    const expectedImage = wrapper.vm.event.image
    const expectedCategory = wrapper.vm.event.category
    const expectedDetails = wrapper.vm.event.details
    const expectedAttended = `Attended (${wrapper.vm.event.attendees})`

    // Act       
    const actualDate = wrapper.find(".review-event-date").text()
    const actualTitle = wrapper.find(".review-event-title").text()
    const actualImage = wrapper.find(".review-event-image")
    const actualCategory = wrapper.find(".review-event-category").text()
    const actualDetails = wrapper.find(".review-event-details").text()
    const actualAttended = wrapper.find(".review-event-attendees").text()

    // Assert
    expect(actualDate).toBe(expectedDate)
    expect(actualTitle).toBe(expectedTitle)
    expect(actualImage.attributes("src")).toBe(expectedImage)
    expect(actualCategory).toBe(expectedCategory)
    expect(actualDetails).toBe(expectedDetails)
    expect(actualAttended).toBe(expectedAttended)
  })

})
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ReviewInput from "@/components/ReviewInput.vue";
import { mockEventObj, mockPreviousEvent, mockUpcomingEvent } from "./mockData"

const localVue = createLocalVue()
localVue.use(Vuex)

// Should have input field for leaving review
// Should have button to submit review
// Should clear input field if button clicked
// Should when submitted call on a method 

describe('ReviewInput.vue', () => {
    let actions;
    let getters;
    let store;
    let reviews = [ 
                  { review: "Example review",
                    reviewId: Math.floor(Math.random() * 101),
                    eventId: 222
                  }
                ]

    beforeEach(() => {
      getters = {
        getterReviews: () => reviews
      }
      actions = {
        addNewReview: jest.fn(),
      }
      store = new Vuex.Store({
        getters,
        actions
      })
    })

    it('should check if input field store correct review value in components data', async () => {
      // Arrange
      const wrapper = shallowMount(ReviewInput, { 
        store,
        localVue,
        propsData: mockEventObj()
      })
      const reviewInput = wrapper.find('.review-input')
      const expected = "My review text"

      // Act
      await reviewInput.setValue('My review text')
      const actual = wrapper.vm.inputReviewText
      
      // Assert
      expect(actual).toBe(expected)
  })

    it('should when mounted render reviews from Vuex store getters', async () => {
      // Arrange
      const wrapper = shallowMount(ReviewInput, { 
        store,
        localVue,
        propsData: mockEventObj()
      })

      // Act
      const getAllReviews = wrapper.vm.getAllReviews

      /// Assert
      expect(getAllReviews).toBe(getters.getterReviews())
    })
  
    it('should dispatch action "addNewReview" to Vuex store when submit review with button', async () => {
        // Arrange
        const wrapper = shallowMount(ReviewInput, { 
          store,
          localVue,
          propsData: mockEventObj()
        }) 
        const submitButton = wrapper.find('button')

        // Act
        await submitButton.trigger('submit')
        const actual = actions.addNewReview

        /// Assert
        expect(actual).toHaveBeenCalled()
    })

    it('should when component mounted have child component with name "EventReviews"', () => {
      // Arrange
      const wrapper = mount(ReviewInput , {
        localVue,
        store,
        propsData: mockEventObj(),
        computed: {
          getAllReviews() {
            return store.getters.getterReviews;
          },
          reviewsForSpecificEvent() {
          return this.getAllReviews.filter((review) => review.eventId === this.event.id);
          }
        }        
      })

      const expected = true
      
      // Act
      const actual = wrapper.findComponent({
        name: "EventReviews",
      });
  
      // Assert
      expect(actual.exists()).toBe(expected);
    });
  
  })
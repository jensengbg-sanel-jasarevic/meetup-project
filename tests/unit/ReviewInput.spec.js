import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ReviewInput from "@/components/ReviewInput.vue";
import { mockEventObj, mockPreviousEvent, mockUpcomingEvent } from "./mockData"

const localVue = createLocalVue()
localVue.use(Vuex)

// Should have input field for leaving review
// Should have button to submit review
// Should clear input field if button clicked
// Should when submitted call on a method 
// Should have child component EventReviews

describe('ReviewInput.vue', () => {
    let actions;
    let getters;
    let store;
    let reviews = [ 
                  { review: "Example review",
                    reviewId: Math.floor(Math.random() * 101),
                    eventId: "222"
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
  
    it('should dispatch action "addNewReview" to vuex store when button clicked', async () => {
        // Arrange
        const wrapper = shallowMount(ReviewInput, { 
          store,
          localVue,
          propsData: mockEventObj()
        }) 
        const btn = wrapper.find('button')

        // Act
        await btn.trigger('click')
        const actual = actions.addNewReview

        /// Assert
        expect(actual).toHaveBeenCalled()
    })
  
  })
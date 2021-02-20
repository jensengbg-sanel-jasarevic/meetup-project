import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ReviewInput from "@/components/ReviewInput.vue";

const localVue = createLocalVue()
localVue.use(Vuex)

// Should have input field for leaving review
// Should have button to submit review
// Should clear input field if button clicked
// Should when submitted call on a method 
// Should have child component EventReviews

describe('ReviewInput.vue', () => {
    let actions;
    let store;
  
    beforeEach(() => {
      actions = {
        addNewReview: jest.fn(),
      }
      store = new Vuex.Store({
        actions
      })
    })
  
    it('should dispatch action to vuex store when button clicked', async () => {
        // Arrange
        const wrapper = shallowMount(ReviewInput, { store, localVue }) 
        const btn = wrapper.find('button')

        // Act
        await btn.trigger('click')
        const actual = actions.addNewReview

        /// Assert
        expect(actual).toHaveBeenCalled()
    })
  
  })
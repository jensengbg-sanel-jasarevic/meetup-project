import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockEventObj, mockPreviousEvent, mockReview } from "./mockData"
import Vuex from 'vuex'
import ReviewInput from "@/components/ReviewInput.vue";

const localVue = createLocalVue()
localVue.use(Vuex)

// Should check if computed getting specific event is getting correct event data
// (set propsdata and then read vm to check)
// Should have input field for leaving review
// Should have button to submit review
// Should clear input field if button clicked
// Should when submitted call on a method 

describe('ReviewInput.vue', () => {
    let store;
    let actions;
    let getters;
    let reviews = [ mockReview() ]

    beforeEach(() => {
      actions = {
        addNewReview: jest.fn(),
      },
      getters = {
        getterReviews: () => reviews
      }      

      store = new Vuex.Store({
        actions,
        getters
      })
    })

    it('should check if input field store correct value in components data property', async () => {
      // Arrange
      const wrapper = shallowMount(ReviewInput, { 
        localVue,
        store,
        propsData: mockEventObj()
      })
      const expected = "Input example review text"

      // Act
      const input = wrapper.find('.review-input')
      await input.setValue('Input example review text')
      const actual = wrapper.vm.inputReviewText
      
      // Assert
      expect(actual).toBe(expected)
  })

    it('should render reviews data from Vuex store getters via computed property', () => {
      // Arrange
      const wrapper = shallowMount(ReviewInput, { 
        localVue,
        store,
        propsData: mockEventObj()
      })
      const expected = getters.getterReviews()

      // Act
      const actual = wrapper.vm.getAllReviews

      /// Assert
      expect(actual).toBe(expected)
    })
  
    it('should when submit the button dispatch action to Vuex store', async () => {
        // Arrange
        const wrapper = shallowMount(ReviewInput, { 
          localVue,
          store,
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
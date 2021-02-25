import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockPreviousEvent, mockReview } from "./mockData"
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
    let state;
    let actions;
    let getters;

    beforeEach(() => {
      state = {
        reviews: [ mockReview() ]
      },      
      actions = {
        addNewReview: jest.fn(),
      },
      getters = {
        getterReviews: () => state.reviews
      }      

      store = new Vuex.Store({
        actions,
        getters
      })
    })

    it('should check if textarea field store correct value in components data property', async () => {
      // Arrange
      const wrapper = shallowMount(ReviewInput, { 
        localVue,
        store,
        propsData: {
          event: mockPreviousEvent()
        }        
      })
      const expected = "Input example review text"

      // Act
      const input = wrapper.find('textarea')
      await input.setValue('Input example review text')
      const actual = wrapper.vm.inputValue
      
      // Assert
      expect(actual).toBe(expected)
  })

    it('should render reviews data from Vuex store getters via computed property', () => {
      // Arrange
      const wrapper = shallowMount(ReviewInput, { 
        localVue,
        store,
        propsData: {
          event: mockPreviousEvent()
        }        
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
          propsData: {
            event: mockPreviousEvent()
          }        
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
        propsData: {
          event: mockPreviousEvent()
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
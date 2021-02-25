import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import { mockPreviousEvent, mockReview } from "./mockData"
import Vuex from 'vuex'
import ReviewInput from "@/components/ReviewInput.vue";

const localVue = createLocalVue()
localVue.use(Vuex)

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
      const expected = "Example review text"

      // Act
      const input = wrapper.find('textarea')
      await input.setValue('Example review text')
      const actual = wrapper.vm.textareaInput
      
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

    it('should when mounted have textarea field and a button', async () => {
      // Arrange
      const wrapper = shallowMount(ReviewInput, { 
        localVue,
        store,
        propsData: {
          event: mockPreviousEvent()
        }        
      })
      const expected = true

      // Act
      const actualTextarea = wrapper.find('textarea').exists()
      const actualButton = wrapper.find('button').exists()
      
      // Assert
      expect(actualTextarea).toBe(expected)
      expect(actualButton).toBe(expected)
  })
  
    it('should when button submitted call a method that dispatch action to Vuex store', async () => {
        // Arrange
        const btnSubmitMethod = jest.spyOn(ReviewInput.methods, 'addNewReview')
        const wrapper = shallowMount(ReviewInput, { 
          localVue,
          store,
          propsData: {
            event: mockPreviousEvent()
          }        
        })

        // Act
        await wrapper.find('button').trigger('submit')
        const actual = actions.addNewReview

        /// Assert
        expect(btnSubmitMethod).toHaveBeenCalled()
        expect(actual).toHaveBeenCalled()
    })

    it('should check if computed property renders correct reviews data', () => {
      // Arrange
      const wrapper = shallowMount(ReviewInput, {
        localVue,
        store,
        propsData: {
          event: mockPreviousEvent()
        }  
      })	
      const expected = [ mockReview() ]
        
      // Act
      const actual = wrapper.vm.reviewsForEvent
      
      // Assert
      expect(actual).toStrictEqual(expected);
    });

    it('should when mounted have child component with name "EventReviews"', () => {
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
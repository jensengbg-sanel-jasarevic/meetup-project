import { shallowMount, createLocalVue } from "@vue/test-utils";
import { mockUpcomingEvent } from "./mockData"
import Vuex from 'vuex';
import SignUpBtn from '@/components/SignUpBtn.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

// Router mock
const $route = {
	path: '/signupevent/:id',
	params: {
	  id: "111"
	}
  }

// It should when confirm button clicked disable the button

describe('SignUpBtn.vue', () => {
	let store;
	let state;

	beforeEach(() => {
		state = {
			attending: [ mockUpcomingEvent() ]
		};

		store = new Vuex.Store({
			state
	    });

    });

    it('should display button with correct text when component mounted', () => {
		// Arrange
		const wrapper = shallowMount(SignUpBtn, {
			localVue,
			store,
			mocks: {
				$route
			  }			
        })
		const expected = "Sign up for event"

		// Act
        const button = wrapper.find('.sign-btn')
        const actual = button.exists()
        const buttonText = button.text()
			
		// Assert
		expect(actual).toBeTruthy()
        expect(buttonText).toBe(expected)
	})    

	it('should not have element with class ".event-registered" if computed property is returning false', () => {
		// Arrange
		const wrapper = shallowMount(SignUpBtn, {
			localVue,
			store,
			mocks: {
				$route: {
					params: {
						id: "222"
						}
					}
				},			           
		})
		
		// Act
		const element = wrapper.find(".event-registered").exists()
		const actual = wrapper.vm.checkSignedUp
					
		// Assert
		expect(element).toBeFalsy()
		expect(actual).toBeFalsy()
	})

    it('should have element with class ".signed-up" display text if computed property not return false', () => {
		// Arrange
		const wrapper = shallowMount(SignUpBtn, {
            localVue,
            store,
			mocks: {
				$route
			  },			           
		})
        const expected = "Confirmation: Signed up for this event!"
        
		// Act
        const element = wrapper.find(".signed-up")
		const elementText = element.text()
		const actual = wrapper.vm.checkSignedUp
					
		// Assert
        expect(element).toBeTruthy()
		expect(elementText).toBe(expected)
		expect(actual).toBeTruthy()
	})

})
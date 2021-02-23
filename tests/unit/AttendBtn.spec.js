import { shallowMount, createLocalVue } from "@vue/test-utils";
import { mockUpcomingEvent } from "./mockData"
import Vuex from 'vuex';
import AttendBtn from '@/components/AttendBtn.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

// Router mock
const $route = {
	path: '/attendevent/:id',
	params: {
	  id: "111"
	}
  }

// It should when confirm button clicked disable the button

describe('AttendBtn.vue', () => {
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
		const wrapper = shallowMount(AttendBtn, {
			localVue,
			store,
			mocks: {
				$route
			  }			
        })
		const expected = "Register for event"

		// Act
        const buttonElement = wrapper.find('.attend-btn')
        const actual = buttonElement.exists()
        const actualText = buttonElement.text()
			
		// Assert
		expect(actual).toBeTruthy
        expect(actualText).toBe(expected)
	})    

	it('should not have "p" tag if computed property is returning false', () => {
		// Arrange
		const wrapper = shallowMount(AttendBtn, {
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
		const element = wrapper.find("p").exists()
		const actual = wrapper.vm.checkIfAttending
					
		// Assert
		expect(element).not.toBeTruthy
		expect(actual).not.toBeTruthy
	})

    it('should have "p" tag that display text if computed property not return false', () => {
		// Arrange
		const wrapper = shallowMount(AttendBtn, {
            localVue,
            store,
			mocks: {
				$route
			  },			           
		})
        const expected = "This event is registered!"
        
		// Act
        const element = wrapper.find("p")
		const elementText = element.text()
		const actual = wrapper.vm.checkIfAttending
					
		// Assert
        expect(element).toBeTruthy()
		expect(elementText).toBe(expected)
		expect(actual).toBeTruthy()
	})

})
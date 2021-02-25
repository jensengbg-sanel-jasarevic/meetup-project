import { shallowMount, createLocalVue } from "@vue/test-utils";
import { mockEvent } from "./mockData"
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

describe('SignUpBtn.vue', () => {
	let store;
	let state;
	let actions;

	beforeEach(() => {
		state = {
			signedUp: [ mockEvent() ]
		};
		actions = {
			addNewSignUpEvent: jest.fn()
		};		

		store = new Vuex.Store({
			state,
			actions
	    });

    });

    it('should display a button if computed property returns no data', () => {
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
		const expected = true

		// Act
        const button = wrapper.find('.sign-btn')
        const actual = button.exists()
		const computed = wrapper.vm.checkIfSignedUp

		// Assert
		expect(actual).toBe(expected)
		expect(computed).toBeFalsy()
	}) 
	
	it('should not display button if computed property returns data', () => {
		// Arrange
		const wrapper = shallowMount(SignUpBtn, {
			localVue,
			store,
			mocks: {
				$route
			  },			           
		})
		const expected = false

		// Act
        const button = wrapper.find('.sign-btn')
        const actual = button.exists()
		const computed = wrapper.vm.checkIfSignedUp

		// Assert
		expect(actual).toBe(expected)
		expect(computed).toBeTruthy()
	})

	it('should when button clicked call a method that dispatch action to Vuex store', async () => {	
		// Arrange
		const btnClickMethod = jest.spyOn(SignUpBtn.methods, 'addNewSignUp')
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
		await wrapper.find('.sign-btn').trigger('click')
		const actual = actions.addNewSignUpEvent
		
		// Assert
		expect(btnClickMethod).toHaveBeenCalled()
		expect(actual).toHaveBeenCalled();
	})

	it('should display span element with text if computed property returns data', () => {
		// Arrange
		const wrapper = shallowMount(SignUpBtn, {
            localVue,
            store,
			mocks: {
				$route
			  },			           
		})
        const expected = "Event signed up!"
        
		// Act
        const element = wrapper.find(".signed-up-event > span")
		const actual = element.text()
		const computed = wrapper.vm.checkIfSignedUp
					
		// Assert
		expect(actual).toBe(expected)
		expect(computed).toBeTruthy()
	})

	it('should not display span element if computed property returns no data', () => {
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
		const actual = wrapper.find(".signed-up-event > span").exists()
		const computed = wrapper.vm.checkIfSignedUp
					
		// Assert
		expect(actual).toBeFalsy()
		expect(computed).toBeFalsy()
	})

})
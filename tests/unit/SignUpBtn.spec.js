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

	beforeEach(() => {
		state = {
			signedUp: [ mockEvent() ]
		};

		store = new Vuex.Store({
			state
	    });

    });

    it('should display button if computed property returns no data', () => {
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
		const computed = wrapper.vm.checkSignedUp

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
				$route: {
					params: {
						id: "111"
						}
					}
				},		
        })
		const expected = true

		// Act
        const button = wrapper.find('.sign-btn')
        const actual = button.exists()
		const computed = wrapper.vm.checkSignedUp

		// Assert
		expect(actual).toBe(expected)
		expect(computed).toBeTruthy()
	})

	it('it should display span element with text if computed property returns data', () => {
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
		const computed = wrapper.vm.checkSignedUp
					
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
		const computed = wrapper.vm.checkSignedUp
					
		// Assert
		expect(actual).toBeFalsy()
		expect(computed).toBeFalsy()
	})

})
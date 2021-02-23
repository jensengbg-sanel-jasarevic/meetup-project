import { shallowMount, createLocalVue } from "@vue/test-utils";
import { mockUpcomingEvent } from "./mockData"
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import AttendBtn from '@/components/AttendBtn.vue'

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter()

// It should when confirm button clicked disable the button

describe('AttendBtn.vue', () => {
	let store;

	beforeEach(() => {

		store = new Vuex.Store({
			state: {
			  attending: [ mockUpcomingEvent() ]
		    }
	    });

    });

    it('should display button with text "Attend event" when component mounted', () => {
		// Arrange
		const wrapper = shallowMount(AttendBtn, {
			localVue,
			router,
			store,
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

    it('should have "p" tag that display text only if registered event found in Vuex store via computed property', () => {
		// Arrange
		const wrapper = shallowMount(AttendBtn, {
            localVue,
            router,
            store,
			computed: {
            checkIfAttending() {
                let id = 111
                	return store.state.attending.find((event) => event.id == id);
                }
            }            
		})
        const expected = "This event is registered!"
        
		// Act
        const element = wrapper.find("p")
		const actualText = element.text()
					
		// Assert
        expect(element).toBeTruthy()
		expect(actualText).toBe(expected)
	})

})
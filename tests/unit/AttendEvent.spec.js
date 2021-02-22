import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import { mockUpcomingEvent, mockEventObj } from "./mockData"
import AttendEvent from "@/views/AttendEvent.vue";

// It should have button for confirming to attend event
// It should when confirm button clicked disable the button
// It should have a go-back button

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);
const router = new VueRouter()

describe('AttendEvent.vue', () => {
	let actions;
	let store;
	  
	beforeEach(() => {
		actions = {
			getUpcomingEvents: jest.fn(),
			addNewAttending: jest.fn(),
			getAttending: jest.fn()
		};

		store = new Vuex.Store({
			state: {
			  upcomingEvents: [ mockUpcomingEvent() ]
			},
			actions
		  });
		});

	it('should when confirm button clicked call on a method that dispatch two actions to Vuex store', async () => {	
		// Arrange
		const method = jest.spyOn(AttendEvent.methods, 'addNewAttending')
		const wrapper = shallowMount(AttendEvent, {
			localVue,
			store,
			router,
			computed: {
			event() {
				let id = 111
					return store.state.upcomingEvents.find((event) => event.id == id);
				}
			}
		})

		// Act
		await wrapper.find('.add-attend-btn').trigger('click')
		const actualOne = actions.addNewAttending
		const actualTwo = actions.getAttending
		
		// Assert
		expect(method).toHaveBeenCalled()
		expect(actualOne).toHaveBeenCalled();
		expect(actualTwo).toHaveBeenCalled();	
	})

	it('should when mounted show correct event data from Vuex store via computed property', () => {
		// Arrange
		const wrapper = shallowMount(AttendEvent, {
			localVue,
			store,
			router,
			computed: {
			event() {
				let id = 111
				return store.state.upcomingEvents.find((event) => event.id == id);
				}
			}
		})
			
		const expected = mockUpcomingEvent()
			
		// Act
		const actual = wrapper.vm.event
		
		// Assert
		expect(actual).toStrictEqual(expected);
	});		

	it('should when component mounted have two buttons', () => {
		// Arrange
		const wrapper = shallowMount(AttendEvent, {
			localVue,
			store,
			router,
			computed: {
			event() {
				let id = 111
				return store.state.upcomingEvents.find((event) => event.id == id);
				}
			}
		})
		const expected = 2

		// Act
		const actual = wrapper.findAll('button')
					
		// Assert
		expect(actual.length).toBe(expected)
	})

	it('should display button with text "Click to confirm" when component mounted', () => {
		// Arrange
		const wrapper = shallowMount(AttendEvent, {
			localVue,
			store,
			router,
			computed: {
			event() {
				let id = 111
				return store.state.upcomingEvents.find((event) => event.id == id);
				}
			}
		})
		const expected = "Click to confirm"

		// Act
		const actual = wrapper.find('.add-attend-btn').text()
			
		// Assert
		expect(actual).toBe(expected)
	})

})

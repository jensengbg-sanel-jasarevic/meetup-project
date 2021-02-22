import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import { mockUpcomingEvent, mockEventObj } from "./mockData"
import AttendEvent from "@/views/AttendEvent.vue";

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

/*	it('should when confirm button clicked call on a method that dispatch two actions to Vuex store', async () => {	
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
*/
	it('should when component mounted have go back button', () => {
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
		const expected = true
		const button = wrapper.find('.back-btn')

		// Act
		const actual = button.exists()
					
		// Assert
		expect(actual).toBe(expected)
	})

})
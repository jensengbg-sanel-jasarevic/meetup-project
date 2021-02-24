import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import { mockUpcomingEvent } from "./mockData"
import Vuex from 'vuex';
import AttendEvent from "@/views/AttendEvent.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const $route = {
  path: '/attendevent/:id',
  params: {
    id: "111"
  }
}

describe('AttendEvent.vue', () => {
	let store;
	let state;
	let actions;
	  
	beforeEach(() => {
		state = {
			upcomingEvents: [ mockUpcomingEvent() ],
			attending: [ mockUpcomingEvent() ]
		}

		actions = {
			getUpcomingEvents: jest.fn(),
			getAttending: jest.fn(),
			addNewAttending: jest.fn()
		};

		store = new Vuex.Store({
			state,
			actions
		  });
	});

	it('should when button on child component clicked call a method that dispatch action to Vuex store', async () => {	
		// Arrange
		const buttonMethod = jest.spyOn(AttendEvent.methods, 'addNewAttending')
		const wrapper = mount(AttendEvent, {
			localVue,
			store,
			mocks: {
				$route
			},				
		})

		// Act
		await wrapper.find('.attend-btn').trigger('click')
		const actual = actions.addNewAttending
		
		// Assert
		expect(buttonMethod).toHaveBeenCalled()
		expect(actual).toHaveBeenCalled();
	})

	it('should check if computed property renders correct data', () => {
		// Arrange
		const wrapper = shallowMount(AttendEvent, {
			localVue,
			store,
			mocks: {
				$route
			},
		})	
		const expected = mockUpcomingEvent()
			
		// Act
		const actual = wrapper.vm.event
		
		// Assert
		expect(actual).toStrictEqual(expected);
	});		

	it('should when component mounted have button element with class "goback-btn"', () => {
		// Arrange
		const wrapper = shallowMount(AttendEvent, {
			localVue,
			store,
			mocks: {
				$route
			},
		})
		const expected = true

		// Act
		const button = wrapper.find('.goback-btn')
		const actual = button.exists()
					
		// Assert
		expect(actual).toBe(expected)
	})

})
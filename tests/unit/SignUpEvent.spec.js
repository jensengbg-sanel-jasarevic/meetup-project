import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import { mockEvent } from "./mockData"
import Vuex from 'vuex';
import SignUpEvent from "@/views/SignUpEvent.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const $route = {
  path: '/signupevent/:id',
  params: {
    id: "111"
  }
}

describe('SignUpEvent.vue', () => {
	let store;
	let state;
	let actions;
	  
	beforeEach(() => {
		state = {
			upcomingEvents: [ mockEvent() ],
			signedUp: [ mockEvent() ]
		}

		actions = {
			getUpcomingEvents: jest.fn(),
			getSignedUpEvents: jest.fn(),
		};

		store = new Vuex.Store({
			state,
			actions
		  });
	});

	it('should when mounted dispatch two actions to Vuex store', () => {
		// Arrange
		shallowMount(SignUpEvent, {
		  localVue,
		  store,
		  mocks: {
			$route
		  }
		});
	
		// Act
		const actualOne = actions.getUpcomingEvents
		const actualTwo = actions.getSignedUpEvents
	
		// Assert
		expect(actualOne).toHaveBeenCalled();
		expect(actualTwo).toHaveBeenCalled();
	  });

	it('should check if computed property renders correct data', () => {
		// Arrange
		const wrapper = shallowMount(SignUpEvent, {
			localVue,
			store,
			mocks: {
				$route
			},
		})	
		const expected = mockEvent()
			
		// Act
		const actual = wrapper.vm.event
		
		// Assert
		expect(actual).toStrictEqual(expected);
	});		

	it('should have a button with class name ".goback-btn"', () => {
		// Arrange
		const wrapper = shallowMount(SignUpEvent, {
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

	it('should when mounted have component with name "SignUpBtn"', () => {
		// Arrange
		const wrapper = mount(SignUpEvent, {
		  localVue,
		  store,
		  mocks: {
			$route
		  },            
		});
		const expected = true
		
		// Act
		const actual = wrapper.findComponent({
		  name: "SignUpBtn",
		});
	
		// Assert
		expect(actual.exists()).toBe(expected);
	  });

	  it("should when mounted display the correct data in template from computed property", () => {
		// Arrange
		const wrapper = shallowMount(SignUpEvent, {
		  localVue,
		  store,
		  mocks: {
			$route
		  },            
		});
		const expectedDate = wrapper.vm.event.date
		const expectedTitle = wrapper.vm.event.title
		const expectedImage = wrapper.vm.event.image
		const expectedDetails = wrapper.vm.event.details
		const expectedAttended = `Attendees (${wrapper.vm.event.attendees})`
	
		// Act       
		const actualDate = wrapper.find(".signup-event-date").text()
		const actualTitle = wrapper.find(".signup-event-title").text()
		const actualImage = wrapper.find(".signup-event-image")
		const actualDetails = wrapper.find(".signup-event-details").text()
		const actualAttended = wrapper.find(".signup-event-attendees").text()
	
		// Assert
		expect(actualDate).toBe(expectedDate)
		expect(actualTitle).toBe(expectedTitle)
		expect(actualImage.attributes("src")).toBe(expectedImage)
		expect(actualDetails).toBe(expectedDetails)
		expect(actualAttended).toBe(expectedAttended)
	  })
	
})
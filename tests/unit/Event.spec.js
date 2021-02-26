  import { shallowMount, createLocalVue } from '@vue/test-utils'
  import { mockEvent, mockPreviousEvent } from "./mockData"
  import VueRouter from 'vue-router'
  import Vuex from 'vuex';
  import Event from '@/components/Event.vue'

  const localVue = createLocalVue()
  localVue.use(Vuex);

  localVue.use(VueRouter)
  const router = new VueRouter()

  describe('Event.vue', () => {
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

    it('should dispatch two actions to Vuex store & computed properties should render correct data', () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        store,
        propsData: {
          event: mockEvent()
        } 
      });
      const expected = [ mockEvent() ]
      const expectedSignedUp =  mockEvent()

      // Act
      const firstAction = actions.getUpcomingEvents
      const secondAction = actions.getSignedUpEvents
      const computedUpcomingEvents = wrapper.vm.pullUpcomingEvents
      const computedAllSignedUpEvents = wrapper.vm.pullAllSignedUpEvents
      const computedSignedUpForEvent = wrapper.vm.signedUpForEvent

      // Assert
      expect(firstAction).toHaveBeenCalled();
      expect(secondAction).toHaveBeenCalled();
      expect(computedUpcomingEvents).toStrictEqual(expected);
      expect(computedAllSignedUpEvents).toStrictEqual(expected);
      expect(computedSignedUpForEvent).toStrictEqual(expectedSignedUp);
    });
  
    it('should display text in span element if computed property "signedUpForEvent" returns data', () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        store,
        propsData: {
          event: mockEvent()
        }    
      })
      const expected = "Event signed up!"
      // Act
      const actual = wrapper.find("span").text()
      const computed = wrapper.vm.signedUpForEvent
            
      // Assert
      expect(actual).toBe(expected)
      expect(computed).toBeTruthy()
    })

      it("should have element with class '.event-box' if getting data from props", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        store,
        propsData: {
          event: mockEvent()
        }        
      })
      const expected = true
          
      // Act
      const elementClass = wrapper.find(".event-box");
      const actual = elementClass.exists();
          
      // Assert
      expect(actual).toBe(expected)
      })
      
  
    it("should not have element with class '.event-box' if getting no data from props", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        store
      }) 
      const expected = false
  
      // Act
      const elementClass = wrapper.find(".event-box");
      const actual = elementClass.exists();
  
      // Assert
      expect(actual).toBe(expected)
    })
// 
 
    it("should have button with class 'upcoming-event-btn' if data from props is upcoming event", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        store,
        propsData: {
          event: mockEvent()
        }        
      }) 
      const expected = true
   
      // Act       
      const button = wrapper.find(".upcoming-event-btn")
      const actual = button.exists()
  
      // Assert
      expect(actual).toBe(expected)
    })

    it('should check if the router links to correct path when "upcoming-event-btn" clicked', async () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        store,
        router,
        propsData: {
          event: mockEvent()
        }
      }) 
      const expected = "/signupevent/111"

      // Act
      const button = wrapper.find('.upcoming-event-btn')
      await button.trigger('click')
      const actual = wrapper.vm.$route.path

      expect(actual).toBe(expected)
  })    

    it("should have button with class 'previuos-event-btn' if data from props is previous event", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        store,
        propsData: {
          event: mockPreviousEvent()
        }
      })  
      const expected = true
   
      // Act
      const button = wrapper.find(".previous-event-btn")
      const actual = button.exists()     

      // Assert
      expect(actual).toBe(expected)
    })

    it('should check if the router links to correct path when "previous-event-btn" clicked', async () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        store,
        router,
        propsData: {
          event: mockPreviousEvent()
        }
      }) 
      const expected = "/reviewevent/555"

      // Act
      const button = wrapper.find('.previous-event-btn')
      await button.trigger('click')
      const actual = wrapper.vm.$route.path

      expect(actual).toBe(expected)
  })

    it("should when component mounted display the correct data in template from props", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        store,
        propsData: {
          event: mockEvent()
        }        
      }) 
      const expectedImage = wrapper.vm.event.image
      const expectedDate = wrapper.vm.event.date
      const expectedTitle = wrapper.vm.event.title
      const expectedCity = wrapper.vm.event.city

      // Act       
      const actualImage = wrapper.find(".event-image")
      const actualDate = wrapper.find(".event-date").text()
      const actualTitle = wrapper.find(".event-title").text()
      const actualCity = wrapper.find(".event-city").text()

      // Assert
      expect(actualImage.attributes("src")).toBe(expectedImage)
      expect(actualDate).toBe(expectedDate)
      expect(actualTitle).toBe(expectedTitle)
      expect(actualCity).toBe(expectedCity)
    })

}) 
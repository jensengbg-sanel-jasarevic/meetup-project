  import { shallowMount, createLocalVue } from '@vue/test-utils'
  import { mockEvent, mockPreviousEvent } from "./mockData"
  import VueRouter from 'vue-router'
  import Event from '@/components/Event.vue'

  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter()

  describe('Event.vue', () => {
    
      it("should have element with class '.event-box' if component get data from props", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
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
      
  
    it("should not have element with class '.event-box' if component get no data from props", () => {
      // Arrange
      const wrapper = shallowMount(Event) 
      const expected = false
  
      // Act
      const elementClass = wrapper.find(".event-box");
      const actual = elementClass.exists();
  
      // Assert
      expect(actual).toBe(expected)
    })

    
    it("should if element with class '.event-box' exist contain element with class '.event-info'", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: {
          event: mockEvent()
        }        
      })
      const expected = true
   
      // Act
      const eventBoxClass = wrapper.find(".event-box");
      const eventInfoClass = wrapper.find(".event-info")
  
      // Assert
      expect(eventBoxClass.exists()).toBe(expected)
      expect(eventInfoClass.exists()).toBe(expected)
    })
 

    it("should have button with class 'upcoming-event-btn' if data from props is upcoming event", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: {
          event: mockEvent()
        }        
      }) 
      const expected = true
   
      // Act       
      const actual = wrapper.find(".upcoming-event-btn")
  
      // Assert
      expect(actual.exists()).toBe(expected)
    })

    it("should have button with class 'previuos-event-btn' if data from props is not upcoming event", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: {
          event: mockPreviousEvent()
        }
      })  
      const expected = true
   
      // Act       
      const actual = wrapper.find(".previous-event-btn")
  
      // Assert
      expect(actual.exists()).toBe(expected)
    })

    it('should check if the router links to correct path when "previous-event-btn" clicked', async () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
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

    it("should when component mounted display the correct data from props", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: {
          event: mockEvent()
        }        
      }) 
      const expectedImage = "https://vuejs.org/images/logo.png";
      const expectedEvent = "Language & culture event";
      const expectedCity = "Göteborg";
      const expectedDate = "Wed, Mar 3, 12:00 PM";

      // Act       
      const actualImage = wrapper.find(".event-image")
      const actualTitle = wrapper.find(".event-title").text()
      const actualCity = wrapper.find(".event-city").text()
      const actualDate = wrapper.find(".event-date").text()

      // Assert
      expect(actualImage.attributes("src")).toBe(expectedImage)
      expect(actualTitle).toBe(expectedEvent)
      expect(actualCity).toBe(expectedCity)
      expect(actualDate).toBe(expectedDate)
    })

}) 
  import { shallowMount, mount } from '@vue/test-utils'
  import { mockUpcomingEventData, mockEventData } from "./mockData"
  import Event from '@/components/Event.vue'
  
  describe('Event.vue', () => {
  
      it("should have a element with class '.event-box' if component get data from props", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
          propsData: mockEventData()
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
      const wrapper = shallowMount(Event, {
          propsData: {}
      })  
      const expected = false
  
      // Act
      const elementClass = wrapper.find(".event-box");
      const actual = elementClass.exists();
  
      // Assert
      expect(actual).toBe(expected)
    })

    it("should if element with class '.event-box' exist have a element with class '.info'", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
          propsData: mockEventData()
      })  
      const expected = true
   
      // Act
       const findClassElement = wrapper.find(".event-box");
       expect(findClassElement.exists()).toBe(expected)
       const infoClassElement = wrapper.find(".info")
  
      // Assert
      expect(infoClassElement.exists()).toBe(expected)
    })

    it("should have a button with class 'attend-button' if data from props is a upcoming event", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: {
          event: mockUpcomingEventData()
        }
      })  
      const expected = true
   
      // Act       
      const attendButton = wrapper.find(".attend-button")
  
      // Assert
      expect(attendButton.exists()).toBe(expected)
    })

    it("should have a button with class 'review-button' if data from props is not upcoming event", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: {
          event: mockEventData()
        }
      })  
      const expected = true
   
      // Act       
      const attendButton = wrapper.find(".review-button")
  
      // Assert
      expect(attendButton.exists()).toBe(expected)
    })

    it("should when component mounted display the correct props data", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: {
          event: mockEventData()
        }
    })  

      const expectedImage = "https://vuejs.org/images/logo.png";
      const expectedEvent = "Tech event";
      const expectedCity = "Malmö";
      const expectedDate = "Sun, Feb 10, 4:30 PM";

      // Act       
      const actualImage = wrapper.find(".e-image")
      const actualEvent = wrapper.find(".e-event").text()
      const actualCity = wrapper.find(".e-city").text()
      const actualDate = wrapper.find(".e-date").text()

      // Assert
      expect(actualImage.attributes("src")).toBe(expectedImage)
      expect(actualEvent).toBe(expectedEvent)
      expect(actualCity).toBe(expectedCity)
      expect(actualDate).toBe(expectedDate)
    })

}) 
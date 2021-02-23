  import { shallowMount, createLocalVue } from '@vue/test-utils'
  import { mockEventObj, mockPreviousEvent, mockUpcomingEvent } from "./mockData"
  import VueRouter from 'vue-router'
  import Event from '@/components/Event.vue'

  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter()
/*
const $route = { path: 'http://www.example-path.com' }
const wrapper = shallowMount(Component, {
  mocks: {
    $route
  }
})
expect(wrapper.vm.$route.path).toBe($route.path)
*/
  describe('Event.vue', () => {
    
      it("should have element with class '.event-box' if component get props data", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: mockEventObj()
      })
      const expected = true
          
      // Act
      const elementClass = wrapper.find(".event-box");
      const actual = elementClass.exists();
          
      // Assert
      expect(actual).toBe(expected)
      })
      
  
    it("should not have element with class '.event-box' if component get no props data", () => {
      // Arrange
      const wrapper = shallowMount(Event) 
      const expected = false
  
      // Act
      const elementClass = wrapper.find(".event-box");
      const actual = elementClass.exists();
  
      // Assert
      expect(actual).toBe(expected)
    })

    
    it("should if element with class '.event-box' exist have element with class '.info'", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
          propsData: mockEventObj()
      })  
      const expected = true
   
      // Act
      const findClassElement = wrapper.find(".event-box");
      const infoClassElement = wrapper.find(".info")
  
      // Assert
      expect(findClassElement.exists()).toBe(expected)
      expect(infoClassElement.exists()).toBe(expected)
    })
 

    it("should have button with class 'attend-button' if data from props is upcoming event", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: {
          event: mockUpcomingEvent()
        }
      })  
      const expected = true
   
      // Act       
      const attendButton = wrapper.find(".attend-button")
  
      // Assert
      expect(attendButton.exists()).toBe(expected)
    })

    it("should have button with class 'review-button' if data from props is not upcoming event", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: {
          event: mockPreviousEvent()
        }
      })  
      const expected = true
   
      // Act       
      const reviewButton = wrapper.find(".review-button")
  
      // Assert
      expect(reviewButton.exists()).toBe(expected)
    })

    it('should check if the router links to correct path when button for review is clicked', async () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        router,
        propsData: mockEventObj()
      });
      const expected = "/reviewevent/222"

      // Act
      const reviewButton = wrapper.find('.review-button')
      await reviewButton.trigger('click')
      const actual = wrapper.vm.$route.path

      expect(actual).toBe(expected)
  })

    it("should when component mounted display the correct props data", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        propsData: mockEventObj()
      })  
      const expectedImage = "https://vuejs.org/images/logo.png";
      const expectedEvent = "Tech event";
      const expectedCity = "Malmö";
      const expectedDate = "Sun, Feb 10, 4:30 PM";

      // Act       
      const actualImage = wrapper.find(".e-image")
      const actualTitle = wrapper.find(".e-title").text()
      const actualCity = wrapper.find(".e-city").text()
      const actualDate = wrapper.find(".e-date").text()

      // Assert
      expect(actualImage.attributes("src")).toBe(expectedImage)
      expect(actualTitle).toBe(expectedEvent)
      expect(actualCity).toBe(expectedCity)
      expect(actualDate).toBe(expectedDate)
    })

}) 
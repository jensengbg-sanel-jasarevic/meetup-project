  import { shallowMount, createLocalVue } from '@vue/test-utils'
  import { mockEvent, mockPreviousEvent } from "./mockData"
  import VueRouter from 'vue-router'
  import Event from '@/components/Event.vue'

  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter()

  describe('Event.vue', () => {
  
      it("should have element with class '.event-box' if getting data from props", () => {
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
      
  
    it("should not have element with class '.event-box' if getting no data from props", () => {
      // Arrange
      const wrapper = shallowMount(Event) 
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
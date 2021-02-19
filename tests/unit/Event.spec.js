  import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
  import VueRouter from 'vue-router'
  import { mockUpcomingEventData, mockEventData } from "./mockData"
  import Event from '@/components/Event.vue'
  
  const localVue = createLocalVue()
  localVue.use(VueRouter)
  const router = new VueRouter()

  describe('Event.vue', () => {
  
      it("should have a element with class '.event-box' if component get data from props", () => {
      // Arrange
      const wrapper = shallowMount(Event, {
        localVue,
        router,
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
        localVue,
        router,
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
          localVue,
          router,
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
        localVue,
        router,
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
        localVue,
        router,
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
        localVue,
        router,
        propsData: { 
          event: 
          {
            id: 222,
            image: "https://vuejs.org/images/logo.png",
            title: "Tech event",
            date: "Sun, Feb 10, 4:30 PM",
            city: "Malmö",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Asperiores repellat.",
            attendees: 32,
            category: "Tech",
        }
      }
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
import { shallowMount, mount } from '@vue/test-utils'
import { mockDataObj } from "./mockData"
import PreviousEvents from '@/components/PreviousEvents.vue'

describe('PreviousEvents.vue', () => {

    it("should have a element with class '.event-box' if there is data in the component", () => {
    // Arrange
    const wrapper = shallowMount(PreviousEvents, {
        data() {
          return {
            events:[ mockDataObj() ]
            }
        }
      })

    const expected = true
        
    // Act
    const elementClass = wrapper.find(".event-box");
    const actual = elementClass.exists();
        
    // Assert
    expect(actual).toBe(expected)
    })

  it("should not have element with class '.event-box' if there is no data in the component", () => {
    // Arrange
    const wrapper = shallowMount(PreviousEvents, {
        data() {
          return {
            events:[]
            }
        }
      })  
    
    const expected = false

    // Act
    const elementClass = wrapper.find(".event-box");
    const actual = elementClass.exists();

    // Assert
    expect(actual).toBe(expected)
  })

  it('should when component is mounted have a component with name "Review"', () => {
    // Arrange
    const wrapper = mount(PreviousEvents);
    const expected = true
    
    // Act
    const actual = wrapper.findComponent({
      name: "Review",
    });

    // Assert
    expect(actual.exists()).toBe(expected);
  });

  it("should display correct image link when getting the data from component", async () => {
    // Arrange
    const wrapper = shallowMount(PreviousEvents, {
        data() {
          return {
            events:[ mockDataObj() ]
            }
        }
      })

    const expected = "https://vuejs.org/images/logo.png"

    // Act
    const actual = wrapper.find(".e-image")

    // Assert
    expect(actual.attributes("src")).toBe(expected)
  })

  it("should display correct event when getting the data from component", () => {
    // Arrange
    const wrapper = shallowMount(PreviousEvents, {
        data() {
          return {
            events:[ mockDataObj() ]
            }
        }
      })

    const expected = "eventValue";
    
    // Act
    const actualEvent = wrapper.find(".e-event");
    const actualText = actualEvent.text();

    // Assert
    expect(actualText).toBe(expected);
  });

  it("should display correct city when getting the data from component", () => {
    // Arrange
    const wrapper = shallowMount(PreviousEvents, {
        data() {
          return {
            events:[ mockDataObj() ]
            }
        }
      })

    const expected = "cityValue";

    // Act
    const actualCity = wrapper.find(".e-city");
    const actualText = actualCity.text();

    // Assert
    expect(actualText).toBe(expected)
  });

  it("should display correct date when getting the data from component", () => {
    // Arrange
    const wrapper = shallowMount(PreviousEvents, {
        data() {
          return {
            events:[ mockDataObj() ]
            }
        }
      })

    const expected = "dateValue";

    // Act
    const actualDate = wrapper.find(".e-date");
    const actualText = actualDate.text();

    // Assert
    expect(actualText).toBe(expected)
  });

  it("should display correct details when getting the data from component", () => {
    // Arrange
    const wrapper = shallowMount(PreviousEvents, {
        data() {
          return {
            events:[ mockDataObj() ]
            }
        }
      })

    const expected = "detailsValue";

    // Act
    const actualDetails = wrapper.find(".e-details");
    const actualText = actualDetails.text();

    // Assert
    expect(actualText).toBe(expected)
  });

}) 
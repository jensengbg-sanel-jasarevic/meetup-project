import { shallowMount, mount } from '@vue/test-utils'
import { mockEventData } from "./mockData"
import Home from "@/views/Home.vue";

// Should when created dispatch a action to vuex store
// Get data from the Vuex store (should be array with upcoming events)

 describe('Home.vue', () => {

    it('should when component is mounted have a component with name "Event"', () => {
    // Arrange
    const wrapper = mount(Home, {
      computed: {
        events() {
          return mockEventData()
        }
      }
    })
    const expected = true
    
    // Act
    const actual = wrapper.findComponent({
      name: "Event",
    });

    // Assert
    expect(actual.exists()).toBe(expected);
  });

})
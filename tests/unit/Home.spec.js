import { shallowMount, mount } from '@vue/test-utils'
import Home from "@/views/Home.vue";


 describe('Home.vue', () => {

    it('should when component is mounted have a component with name "Event"', () => {
    // Arrange
    const wrapper = mount(Home);
    const expected = true
    
    // Act
    const actual = wrapper.findComponent({
      name: "Event",
    });

    // Assert
    expect(actual.exists()).toBe(expected);
  });

})
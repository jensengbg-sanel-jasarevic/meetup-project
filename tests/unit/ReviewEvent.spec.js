import { shallowMount, mount } from '@vue/test-utils'
import ReviewEvent from "@/views/ReviewEvent.vue";


 describe('ReviewEvent.vue', () => {

    it('should when component is mounted have a component with name "Review"', () => {
    // Arrange
    const wrapper = mount(ReviewEvent);
    const expected = true
    
    // Act
    const actual = wrapper.findComponent({
      name: "Review",
    });

    // Assert
    expect(actual.exists()).toBe(expected);
  });

})
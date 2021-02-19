import { shallowMount, mount } from '@vue/test-utils'
import ReviewEvent from "@/views/ReviewEvent.vue";

// It should have a go-back button

 describe('ReviewEvent.vue', () => {

  it('Should have a go-back button', () => {
    // Arrange
    //const wrapper = shallowMount(ReviewEvent);
    //const expected;
    
    // Act


    // Assert
  });

    it('should when component is mounted have a component with name "ReviewInput"', () => {
    // Arrange
    const wrapper = mount(ReviewEvent);
    const expected = true
    
    // Act
    const actual = wrapper.findComponent({
      name: "ReviewInput",
    });

    // Assert
    expect(actual.exists()).toBe(expected);
  });

})
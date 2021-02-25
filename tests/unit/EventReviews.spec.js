import { shallowMount } from '@vue/test-utils'
import { mockReview } from "./mockData"
import EventReviews from "@/components/EventReviews.vue";

 describe('EventReviews.vue', () => {

    it("should when mounted display correct data from props", () => {
     // Arrange
      const wrapper = shallowMount(EventReviews, { 
        propsData: {
            review: mockReview()
        }
      })
      const expected = wrapper.vm.review.reviewText

      // Act
      const actual = wrapper.find('p').text()

      // Assert
      expect(actual).toBe(expected);
    });
    
    it("should not display text if no data from props received", () => {
      // Arrange
       const wrapper = shallowMount(EventReviews)
       const expected = false
 
       // Act
       const actual = wrapper.find("p").exists()
 
       // Assert
       expect(actual).toBe(expected);
     });
    
})
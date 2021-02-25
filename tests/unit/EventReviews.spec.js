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
      const actual = wrapper.find('.review-text').text()

      // Assert
      expect(actual).toBe(expected);
    });
    
})
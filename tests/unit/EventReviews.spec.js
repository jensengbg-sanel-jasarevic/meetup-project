import { shallowMount } from '@vue/test-utils'
import { mockReview } from "./mockData"
import EventReviews from "@/components/EventReviews.vue";

 describe('EventReviews.vue', () => {

    it("should when mounted display the review text data from props", () => {
     // Arrange
      const wrapper = shallowMount(EventReviews, { 
        propsData: {
            review: mockReview()
        }
      })
      const expected = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."

      // Act
      const actual = wrapper.find('.review-text').text()

      // Assert
      expect(actual).toBe(expected);
    });
    
})
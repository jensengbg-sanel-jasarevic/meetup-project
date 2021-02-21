import { shallowMount } from '@vue/test-utils'
import EventReviews from "@/components/EventReviews.vue";

 describe('EventReviews.vue', () => {


    it("should when mounted display the review text from props", () => {
     // Arrange
      const wrapper = shallowMount(EventReviews, { 
        propsData: {
            review: {
            reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
            reviewId: Math.floor(Math.random() * 101),
            eventId: 222            
            }
        }
      })
      const expected = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."

      // Act
      const reviewText = wrapper.find('p').text()

      // Assert
      expect(reviewText).toBe(expected);
    });
    
})
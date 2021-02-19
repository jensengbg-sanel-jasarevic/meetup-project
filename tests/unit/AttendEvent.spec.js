import { shallowMount } from "@vue/test-utils";
import AttendEvent from "@/views/AttendEvent.vue";

// It should have button for confirming to attend event
// It should when confirm button clicked disable the button
// It should when confirm button clicked call method to dispatch action to Vuex store
// It should have a go-back button

	describe('AttendEvent.vue', () => {

	it('should display button element when component mounted', () => {
		// Arrange
		const wrapper = shallowMount(AttendEvent)
		const btn = wrapper.find('button')

		// Act
		const actual = btn.exists()
			
		// Assert
		expect(actual).toBeTruthy()
	})

	it('should display a button with text "Click to confirm" when component mounted', () => {
		// Arrange
		const wrapper = shallowMount(AttendEvent)
		const expected = "Click to confirm"

		// Act
		const actual = wrapper.find('button').text()
			
		// Assert
		expect(actual).toBe(expected)
	})

})

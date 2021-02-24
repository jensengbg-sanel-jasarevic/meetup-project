// Functions returning object with key values
function mockEvent(){
    return {
        id: 111,
        image: "https://vuejs.org/images/logo.png",
        title: "Language & culture event",
        date: "Wed, Mar 3, 12:00 PM",
        city: "Göteborg",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Asperiores repellat.",
        attendees: 44,
        category: "Language & Culture",
        upcoming: true,
    }
}

function mockPreviousEvent(){
    return {
        id: 555,
        image: "https://vuejs.org/images/logo.png",
        title: "Culture event",
        date: "Mon, Feb 3, 10:00 PM",
        city: "Oslo",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Asperiores repellat.",
        attendees: 54,
        category: "Culture",
        upcoming: false
    }
}

// Mock review for previous events
function mockReview() {
    return {
        reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
        reviewID: 341,
        eventID: 555                    
    }
}

module.exports = { mockEvent, mockPreviousEvent, mockReview };
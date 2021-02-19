// Returns just object with key values
function mockUpcomingEventData(){
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

// Returns a object that contain the event obj
function mockEventData(){
    return { 
        event: {
        id: 222,
        image: "https://vuejs.org/images/logo.png",
        title: "Tech event",
        date: "Sun, Feb 10, 4:30 PM",
        city: "Malmö",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Asperiores repellat.",
        attendees: 32,
        category: "Tech",
        }
    }
}

module.exports = { mockUpcomingEventData, mockEventData };
import img1 from "../assets/pexels-fauxels-3182826.jpg";
import img2 from "../assets/pexels-fauxels-3182811.jpg";
import img3 from "../assets/pexels-fauxels-3183150.jpg";
import img4 from "../assets/pexels-fauxels-3184291.jpg";
import img5 from "../assets/pexels-anna-shvets-4226262.jpg";
import img6 from "../assets/pexels-anna-shvets-4226122.jpg";
import img7 from "../assets/pexels-helena-lopes-711009.jpg";
import img8 from "../assets/pexels-fauxels-3184635.jpg";
import img9 from "../assets/pexels-icsa-1708936.jpg";

const upcoming =  [
    {id: 1, image: img1, title: "Language & culture event", date: "Wed, Mar 3, 12:00 PM", city: "Göteborg", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Asperiores repellat.", attendees: 44, category: "Language & Culture", upcoming: true },
    {id: 12, image: img2, title: "Career & business event", date: "Mon, Mar 1, 8:00 PM", city: "Malmö", details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiu. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. Totam rem aperiam. nostrum exercitationem ullam corporis suscipit laboriosam, nisi u.", attendees: 31, category: "Career & Business", upcoming: true },
    {id: 123, image: img3, title: "Sport & fitness event", date: "Sun, Feb 28, 4:30 PM", city: "Stockholm", details: "Duis aute irure dolor in reprehenderit in voluptate velit. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Esse cillum dolore eu fugiat nulla pariatur. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.", attendees: 92, category: "Sport & Fitness", upcoming: true },
    {id: 1234, image: img4, title: "Food & drink event", date: "Fri, Feb 19, 12:00 PM", city: "Oslo", details: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.", attendees: 55, category: "Food & Drink", upcoming: true },
    {id: 12345, image: img5, title: "Tech event", date: "Thu, Feb 25, 5:30 PM", city: "Göteborg", details: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi u. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.", attendees: 22, category: "Tech", upcoming: true },
    {id: 123456, image: img6, title: "Music event", date: "Thu, Feb 18, 6:00 PM", city: "Göteborg", details: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam. Nostrum exercitationem ullam corporis suscipit laboriosam, nisi u. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.", attendees: 51, category: "Photography", upcoming: true },
  ]
  
  const previous = [
    {id: 222, image: img7, title: "Tech event", date: "Sun, Feb 28, 4:30 PM", city: "Göteborg", details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.", attended: 32, category: "Tech", upcoming: false},
    {id: 333, image: img8, title: "Food & drink event", date: "Fri, Feb 19, 9:30 AM", city: "Oslo", details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", attended: 40, category: "Food & Drink", upcoming: false},
    {id: 444, image: img9, title: "Sport & fitness event", date: "Thu, Feb 18, 7:45 AM", city: "Malmö", details: "Qed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.", attended: 78, category: "Sport & Fitness", upcoming: false}
  ]
  

  function setUpcomingEvents() {
    let setLocalStorageData = localStorage.setItem("upcoming-events", JSON.stringify(upcoming))
    return setLocalStorageData
  }
  
  function setPreviousEvents() {
    let setLocalStorageData = localStorage.setItem("previous-events", JSON.stringify(previous));
    return setLocalStorageData;
  }

  function getLocalStorageAttending() {
    let getLocalStorageData = localStorage.getItem("attending");
    if (getLocalStorageData) {
      return JSON.parse(getLocalStorageData);
    }
  }

  function getLocalStorageReviews() {
    let getLocalStorageReviews = localStorage.getItem("reviews");
    if (getLocalStorageReviews) {
      return JSON.parse(getLocalStorageReviews);
    }
  }

  export { setUpcomingEvents, setPreviousEvents, getLocalStorageAttending, getLocalStorageReviews };
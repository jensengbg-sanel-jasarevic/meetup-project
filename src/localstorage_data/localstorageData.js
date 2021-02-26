import img1 from "../assets/henrique-felix-mmuMa7VXL1Y-unsplash.jpg";
import img2 from "../assets/abdullah-oguk-qCrocisvGwc-unsplash.jpg";
import img3 from "../assets/sincerely-media-dGxOgeXAXm8-unsplash.jpg";
import img4 from "../assets/dylan-gillis-KdeqA3aTnBY-unsplash.jpg";    
import img5 from "../assets/product-school-nOvIa_x_tfo-unsplash.jpg";
import img6 from "../assets/toa-heftiba-6bKpHAun4d8-unsplash.jpg";
import img7 from "../assets/britt-gaiser-hSAlu33padA-unsplash.jpg";
import img8 from "../assets/daria-shevtsova-k_RYBedEvDw-unsplash.jpg";
import img9 from "../assets/docusign-yiW2yzZNnFo-unsplash.jpg";

const upcoming =  [
    {id: 1, image: img1, title: "7 Effective Restaurant Marketing Strategies", date: "Wed, Mar 3, 12:00 PM", city: "Göteborg", details: "Need to get more patrons to your restaurant quickly? Trying to find the best restaurant marketing strategies?   While there are many ways to market a business, promoting a restaurant comes with its own unique challenges. Especially with global health concerns making waves in the industry and making it more likely that people will just stay home, encouraging people to go out for a nice meal can be tricky. It can also be a challenge to convince guests to return time after time with so many other great restaurants out there. Luckily, we’ve got some ideas. This event we’ll list the most effective restaurant marketing strategies you need to be making use of.", attendees: 44, category: "Event", upcoming: true },
    {id: 12, image: img2, title: "Why Mobile App Store Optimization Is Crucial", date: "Fri, Feb 19, 12:00 PM", city: "Oslo", details: "The app stores have more than 5 million mobile apps, thus getting your app discovered is one of the biggest challenges for you after you’ve finished building the mobile app. So, if you are a business that operates via mobile apps, you really need to formulate your mobile app marketing strategy. In this app store optimization guide. Therefore, many startups stepped into the fitness app market. But still, the prime concern for many is how to develop a fitness app that not only just attracts users but also delivers high ROI? Workout apps are for people who want assistance in sports training or strength exercises. Sign up for event and get to know more.", attendees: 55, category: "Event", upcoming: true },
    {id: 123, image: img3, title: "Mobile App Design – The Complete UX Guide", date: "Sun, Feb 28, 4:30 PM", city: "Stockholm", details: "Throughout this event, we will discuss things you should take into consideration while designing the UX for your mobile app and the most popular software tools that you can pick from to build a stunning UX for your app.   In most cases, the difference between a good app and a bad app is the User Experience (UX). In current times, people expect a lot from a mobile app, including ease of use, fast loading time, and delightful interaction. The UX should be an essential part of your product strategy if you want your app to be successful. Sign up for event and get to know more", attendees: 92, category: "Event", upcoming: true },
    {id: 1234, image: img4, title: "ABC's Of Team Building - V Is For Visualization", date: "Mon, Mar 1, 8:00 PM", city: "Malmö", details: "There have been various studies that state that if you write your goals down on paper, you have a better likelihood of achieving them. Some even go further and suggest that if you have a picture of some sort (photo, painting, etc.) that you have an even greater chance of reaching your goals. Sign up for this exciting event and learn more.", attendees: 31, category: "Music", upcoming: true },
    {id: 12345, image: img5, title: "Effective Team Leadership", date: "Thu, Feb 25, 5:30 PM", city: "Göteborg", details: "Effective team leadership isn't something you can achieve overnight. In fact, it's something you can spend an entire lifetime mastering. The best team leaders know that providing vision and motivation to a team isn't something you ever perfect, but rather an area for continuous improvement. But of course, you have to start somewhere. Whether you've just been promoted into a leadership role, you're launching your own company, or you want to become more intentional about effective team leadership, here are some foundational steps you can take.Effective team leadership isn't something you can achieve overnight. In fact, it's something you can spend an entire lifetime mastering. The best team leaders know that providing vision and motivation to a team isn't something you ever perfect, but rather an area for continuous improvement. But of course, you have to start somewhere. Whether you've just been promoted into a leadership role, you're launching your own company, or you want to become more intentional about effective team leadership, sign up for event to get some foundational steps you can take.", attendees: 22, category: "Event", upcoming: true },
    {id: 123456, image: img6, title: "How to customize macOS Big Sur easily?", date: "Thu, Feb 18, 6:00 PM", city: "Göteborg", details: "At this event we are going to show you, how you can customize your macOS Big Sur al the way, you want. And make it more optimized and better. For users of Apple's Macintosh operating system, the goal is often how to customize Mac OS X to serve a user's needs. Mac OS X, like many other operating systems around, has many options and settings that a user can change to serve his or her needs. The question then is how to customize Mac OS X operating system, starting with the user's own preferences. One of the more popular ways to customize the operating system is by making adjustments to the Disk Image or the boot images. In addition, there are many third-party tools that allow a user to customize certain aspects of the system, such as the look and behavior of the built-in mail application. Sign up for event and get to know more.", attendees: 51, category: "Event", upcoming: true },
  ]

  const previous = [
    {id: 222, image: img7, title: "9 things to do before hosting a business event", date: "Thu, Feb 18, 7:45 AM", city: "Malmö", details: "When it comes to marketing, there is nothing better than a business event. This can be your opportunity to meet potential customers and clients face to face, and you can remarket your business to people too. A business event is also a way to engage with the local community, share information about your business, and to get your face noticed by many. For these and other reasons, you should consider event marketing, even though you might be tempted to focus more of your time on social media marketing and other digital methods.", attendees: 78, category: "Event", upcoming: false},
    {id: 444, image: img8, title: "Font Generator for Website Designing", date: "Sun, Feb 28, 4:30 PM", city: "Göteborg", details: "Font is the biggest part of your design. It determines how attractive your design is and how readable it can be. As you may know, there are different types of fonts that are available in the market. For example, there are the normal fonts, the italic fonts and the special fonts.  Stylish Font Generator no price required. Hello! I am here to present you with a cool font generator for website designing. What do you want, a cool font or a fancy fonts generator? If your answer is yes, then allow me to introduce you to the cool fonts generator. By joining this event, you will be able to get more information on how to get the best font for your design.", attendees: 32, category: "Event", upcoming: false},
    {id: 555, image: img9, title: "Mastering The Art Of Delivering A Successful Corporate Event", date: "Fri, Feb 19, 9:30 AM", city: "Oslo", details: "If you want to set yourself aside from your competitors, holding an inspiring corporate event is a fantastic way of demonstrating that you have the ideas and the personality to deliver success in your industry. It is an excellent way of attracting new business partnerships and engaging with existing and potential suppliers alike. Showing your team what they mean to you is essential, and inviting them to take part and enjoy your business event is great for their morale. That being said, though, things can go wrong when it comes to hosting an event. An unpolished and poorly planned program can disengage your visitors and really make a bad example of your business. Hosting the perfect event means getting everything right. Here are some tips to ensure that you get the most out of your business event and really wow the crowds.", attendees: 40, category: "Event", upcoming: false}
  ]

  function setUpcomingEvents() {
    let setLocalStorageData = localStorage.setItem("upcoming-events", JSON.stringify(upcoming))
    return setLocalStorageData
  }
  
  function setPreviousEvents() {
    let setLocalStorageData = localStorage.setItem("previous-events", JSON.stringify(previous));
    return setLocalStorageData;
  }

  function getLocalStorageSignedUp() {
    let getLocalStorageData = localStorage.getItem("signed-up");
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

  export { setUpcomingEvents, setPreviousEvents, getLocalStorageSignedUp, getLocalStorageReviews };
/* *****************************************************************************
********************************************************************************
********************************************************************************
                            MOCKED DATA
********************************************************************************
********************************************************************************
***************************************************************************** */

/* Mocked data for section My Services */
const myServicesSection = {
  title: `Have a Look at my top Services`,
  sections: {
    "project-management": {
      id: "project-management",
      // image: `https://drive.google.com/open?id=16qk4evGOoLG_FKvcGdMNBhZizR7iaCNw`,
      image: `./images/cohete.png`,
      title: `Project Management`,
      content: `Co-founding my own startup, in which I started as a worker and sole developer, I have been able to understand the needs that requires an ambitious project. Once the company settled, I have led teams of up to 10 people to develop up to 3 different products at once.`
    },
    mentoring: {
      id: "mentoring",
      // image:"https://drive.google.com/open?id=1Ype5kzDXEKXJ2YLwF58hZSSV1FLgJo7o",
      image: "./images/mentoring.png",
      title: "Mentoring",
      content:
        "I have always liked to exchange knowledge and get to know different points of view. This past year I have developed these skills as a React/Redux/React Native mentor in Udacity as well as in my locality. Something that continues to allow me to grow by learning from others."
    },
    "web-development": {
      id: `web-development`,
      // image: `https://drive.google.com/open?id=1PCc-vhG1dDhM7h_PZLpLWnGMlXZbpw3Q`,
      image: `./images/web-dev.png`,
      title: `Web Development`,
      content: `The web came first, but how it's evolving! We have to adapt to these times when Javascript is advancing and improving the way we set up our websites. Nowadays we have to talk about JAMStack, GraphQL, monorepositories and more topics.`
    },
    "mobile-development": {
      id: `mobile-development`,
      // image: `https://drive.google.com/open?id=1Zke7Bf2_DDcpXbDVznhsXGcHFgrjM4Kt`,
      image: `./images/mobile-app.png`,
      title: `Mobile Development`,
      content: `The development of an ecosystem based on mobile applications is increasingly necessary. It is no longer enough to have a website, now we have to provide real multiplatform solutions. We can make developments that run perfectly in both Android and i`
    }
  }
};

/* Mocked data for section Jobs */
const jobsSection = {
  title: `Jobs`,
  sections: {
    udacity: {
      id: "udacity",
      company: "udacity",
      startDate: "March 2019",
      endDate: null,
      position: "React Mentor (Independent Consultant)",
      content: `As a consultant for educational platforms such as Udacity. I use my specialized knowledge in the field of ReactJS and algorithms and my strong communication and training skills to provide personalized guidance and advice to students.`
    },
    domesting: {
      id: "domesting",
      company: "domesting",
      startDate: "January 2016",
      endDate: "October 2019",
      position: "Chief Technology Officer & Co-Founder",
      content: `Development and expansion of the cloud software solution for the cleaning sector. Development of a platform and mobile application for an enterprise cleaning solution. Multiplatform Hospitality development. Management of a human team of more than 10 people.`
    },
    "domesting-2": {
      id: "domesting-2",
      company: "domesting",
      startDate: "January 2016",
      endDate: "October 2019",
      position: "Chief Technology Officer & Co-Founder",
      content: `Development and expansion of the cloud software solution for the cleaning sector. Development of a platform and mobile application for an enterprise cleaning solution. Multiplatform Hospitality development. Management of a human team of more than 10 people.`
    },
    "domesting-3": {
      id: "domesting-3",
      company: "domesting",
      startDate: "April 2014",
      endDate: "December 2015",
      position: "Software Developer",
      content: `MVP development of international cleaning software (UK, Spain and Portugal) Yii Framework, JQuery, Javascript, HTML, CSS, Git`
    },
    upwork: {
      id: "upwork",
      company: "upwork",
      startDate: "September 2010",
      endDate: "April 2014",
      position: "Software Developer",
      content: `Web Development: Yii Framework, Python/Django/Flask. Web Scraping. Selenium, Python, Scrappy`
    },
    freelance: {
      id: "freelance",
      company: "freelance",
      startDate: "February 2007",
      endDate: "June 2011",
      position: "Software Developer",
      content: `Maintenance and improvement of systems implemented in Cobol and migration of some to web technologies with Java.`
    }
  }
};

/* Mocked data for section Projects */
const projectsSection = {
  title: `Latest Done Projects`,
  subtitle: `Below some little samples of my work.`,
  sections: {
    connect: {
      id: "connect",
      title: "Connect",
      image: "./images/connect.png",
      content: `At my previous startup (Domesting SL) as co-founder I had to transform the previous solution for domestic cleaning services into a solution for the cleaning companies. With connect we didn't focus only only on freelancer cleaners, we added a solution for all kind of cleaning companies and facilities.`
    },

    facilities: {
      id: "facilities",
      title: "Domesting Facilities",
      image: "./images/3_facilities.png",
      content: `An adjustment in the connect page where we have been able to help large companies or facilities to manage the revision of the cleaning of their establishments.`
    },
    hospitality: {
      id: "hospitality",
      title: "Hospitality",
      image: "./images/hospitality.png",
      content: `The crown jewel. The definitive solution for the management of housekeeping and maintenance of hotels, as well as its communication with frontdesk. In this project I was the CTO and helped in the product design to be able to assemble a total solution for hotels, both web and mobile. I managed an international team of 10 people and was a fundamental part in the development and implementation of the mobile application.`
    },
    domesting: {
      id: "domesting",
      title: "Domesting",
      image: "./images/1_domesting_project.png",
      content: `Domesting.com was the first website I built on the startup I co-founded. At that time I was the unique developer in the first stages of the company. I built a complete website to provide final users and domestic cleaner a tool for them to manage the domesting cleaning services.`
    }
  }
};

/* Mocked data for section Reviews */
const reviewsSection = {
  title: "Some of my latest Reviews",
  sections: {
    "patricia-figueroa-rodriguez": {
      id: "patricia-figueroa-rodriguez",
      title: "Patricia Figueroa Rodríguez",
      content: `Carlos stands out for being a great partner and of course a great friend! There is no doubt that he has made Domesting a dynamic and fun place to work and where everyone can participate.

      He has great qualities to lead a team but what he stands out for is his personal skills, he always tries to be fair in his decisions by empathizing with people and reaching a consensus. He has managed to create an organized and competent technical team, always promoting the work and effort of the youngest and helping them to grow in their careers.

      His joy and commitment have managed to infect the whole team with the necessary enthusiasm for the project to go ahead even at the lowest moments.

      I am taking a friend with me for life and I hope that in the future we will work together again!`
    },
    "ruben-costa-martínez": {
      id: "ruben-costa-martínez",
      title: "Rubén Costa Martínez",
      content: `Carlos is clearly interested in helping anyone grow in their career. As a Domesting CTO, his energy, team organization and dedication to the project predominate.

      Together, we have managed to create, from the technical point of view, a good application without much prior knowledge about the technologies, but this did not pose any problem for him since he is capable of adapting to any obstacle.

      It's nice to have someone on your side who is so interested in what's new in the sector, so it's impossible to become obsolete.`
    },
    "alex-gonzález-rodriguez": {
      id: "alex-gonzález-rodriguez",
      title: "Alex González Rodríguez",
      content: `Carlos has been, without a doubt, an indispensable pillar for the success of Domesting. He is a tireless worker, with an admirable passion for his work. His dedication and commitment even at the lowest moments have infected us with the necessary enthusiasm for the project to go ahead.

      With his preparation and technical skills beyond any doubt, I want to highlight his personal skills. He is a colleague with great empathy, always ready to help the rest of the team. His optimism has allowed him to maintain an ideal working environment.

      But, really, if anything has captivated me about Carlos during my time at Domesting, it has been both his organizational capacity and his leadership skills. He has known how to assume responsibilities in the most critical moments, taking decisions firmly and facilitating the understanding of the objectives throughout the organization. He has always fought for team cohesion and the involvement of all departments.

      It has created a technical team that is up to the task, promoting the proactivity of the youngest and getting involved in the training of its employees, motivating them and guiding them in their professional growth. He has proven himself capable of getting the most out of his teams, maintains a high level of exigency while providing security and makes you feel valued, something for which his colleagues remember him with great esteem.

      At his side, I've learned that dedication and sacrifice always have results. I want my future job to bring me more bosses (and friends) like him.`
    },
    "patricia-saco": {
      id: "patricia-saco",
      title: "Patricia Saco",
      content: `I would like to write a recommendation that will help Carlos achieve what he is proposing at the moment at a professional level, but I doubt that he can compete with his own persistence. Carlos is a tireless worker, who is always looking for a way to surpass himself, others, and mainly to surprise with solutions in the most unexpected moments. I would not hesitate to have him as a partner and I am left with the desire to be able to undertake something in common. Who knows..`
    }
  }
};

const sectionsData = {
  myServicesSection,
  jobsSection,
  projectsSection,
  reviewsSection
};

// const mainTag = document.getElementsByTagName("main")[0];

// const image = document.createElement("img");
// image.src = "./images/cohete.png";

// mainTag.appendChild(image);

/* *****************************************************************************
********************************************************************************
********************************************************************************
                        SCROLL TO TOP FUNCTIONALITY
********************************************************************************
********************************************************************************
***************************************************************************** */

/**
 * Holds all the logic for the button to scroll up when we have scrolled down
 * from the initial top view
 * @param {string} targetId - The id of the elmenent in charge of doing the scrolling
 * Its design is managed over CSS
 */
const scrollToTopHanlder = targetId => {
  let intervalId = null;

  /* This does the scroll */
  scrollToTop = () => {
    const scrollStepInPx = "100";
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }

    window.scroll(0, window.pageYOffset - scrollStepInPx);
  };

  /* This sets the interval after which we do the scroll calling
  `scrollToTop` function */
  scrollToTopEvent = () => {
    const delayInMs = "10.0";
    intervalId = setInterval(scrollToTop, delayInMs);
  };

  /* Attach the `scrollToTopEvent` event to the NodeElement in charge of
  managing this event by users input */
  document.getElementById(targetId).addEventListener("click", scrollToTopEvent);

  /* We want to hide the scroll to top button when there is not enough scroll */
  window.onscroll = () => {
    const vh = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    var scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop >= vh) {
      document.getElementById("scroll-top-btn").style.opacity = "0.3";
      document.getElementById("scroll-top-btn").style.visibility = "visible";
    } else {
      document.getElementById("scroll-top-btn").style.visibility = "hidden";
    }
  };
};
scrollToTopHanlder("scroll-top-btn");

/* *****************************************************************************
********************************************************************************
********************************************************************************
                        RESPONSIVE NAVBAR FUNCTIONALITY
********************************************************************************
********************************************************************************
***************************************************************************** */

/**
 * Event handler for showing small/medium devices navbar (navbar-nav responsive) or large
 * devices (navbar-nav)
 */
// const manageNavbarResponsiveness = () => {
//   const navBar = document.querySelector(".navbar-nav");
//   if (navBar.className === "navbar-nav") {
//     navBar.classList.add("responsive");
//   } else {
//     navBar.classList.remove("responsive");
//   }
// };
// document
//   .getElementById("open-menu")
//   .addEventListener("click", manageNavbarResponsiveness);
const getNumberOfLi = ulElement => {
  var liNodes = [];

  for (var i = 0; i < ulElement.childNodes.length; i++) {
    if (ulElement.childNodes[i].nodeName == "LI") {
      liNodes.push(ulElement.childNodes[i]);
    }
  }
  return liNodes.length;
};

var nav = document.querySelector(".greedy-nav");
var btn = document.querySelector(".greedy-nav .menu-button");
var vlinks = document.querySelector(".greedy-nav .visible-links");
var hlinks = document.querySelector(".greedy-nav .hidden-links");
// var nav = document.querySelector(".greedy-nav");
// var btn = document.querySelector(".greedy-nav .menu-button");
// var vlinks = document.querySelector(".greedy-nav .visible-links");
// var hlinks = document.querySelector(".greedy-nav .hidden-links");
var mobileNav = document.querySelector(".mobile-nav");

var breaks = [];

function updateNav() {
  if (getComputedStyle(mobileNav, null).display !== "none") {
    // console.log("not nav");
    return;
  }
  console.log("updating");
  var availableSpace = btn.classList.contains("hidden")
    ? nav.offsetWidth
    : nav.offsetWidth - btn.offsetWidth - 30;

  // The visible list is overflowing the nav
  if (vlinks.offsetWidth > availableSpace) {
    // Record the width of the list
    breaks.push(vlinks.offsetWidth);

    // Move item to the hidden list
    hlinks.prepend(vlinks.lastChild);

    // Show the dropdown btn
    if (btn.classList.contains("hidden")) {
      btn.classList.remove("hidden");
    }

    // The visible list is not overflowing
  } else {
    // There is space for another item in the nav
    if (availableSpace > breaks[breaks.length - 1]) {
      // Move the item to the visible list
      vlinks.appendChild(hlinks.firstChild);
      breaks.pop();
    }

    // Hide the dropdown btn if hidden list is empty
    // if (breaks.length < 2) {
    if (!getNumberOfLi(hlinks)) {
      btn.classList.add("hidden");
      hlinks.classList.add("hidden");
    }
  }

  // Keep counter updated
  btn.setAttribute("count", Math.round(breaks.length / 2));
  // Recur if the visible list is still overflowing the nav
  if (vlinks.offsetWidth > availableSpace) {
    updateNav();
  }
  // console.log("getNumberOfLi: ", getNumberOfLi(hlinks));
}

// Window listeners
window.addEventListener("resize", () => updateNav());
btn.addEventListener("click", e => {
  e.stopPropagation();
  hlinks.classList.toggle("hidden");
});

updateNav();

document
  .querySelector(".mobile-nav .menu-button")
  .addEventListener("click", () => {
    console.log("clicking on  mobile menu");
    document.querySelector(".mobile-nav .menu").classList.toggle("dissapeared");
  });

document.getElementsByTagName("body")[0].addEventListener("click", () => {
  document.querySelector(".greedy-nav .hidden-links").classList.add("hidden");
});

console.log("HI!");

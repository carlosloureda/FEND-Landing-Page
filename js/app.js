/* *****************************************************************************
********************************************************************************
********************************************************************************
                            MOCKED DATA
    The following data is the data that would come from an external API or
    CMS. With this data We are able to make 4 different sections and make them
    completely dynamic.
********************************************************************************
********************************************************************************
***************************************************************************** */

/* Mocked data for section My Services */
const myServicesSection = {
  id: "services",
  title: `Have a Look at my top Services`,
  sections: {
    "project-management": {
      id: "project-management",
      // image: `https://drive.google.com/open?id=16qk4evGOoLG_FKvcGdMNBhZizR7iaCNw`,
      image: `./images/rocket.png`,
      title: `Project Management`,
      content: `Co-founding my own startup, in which I started as a worker and sole developer, I have been able to understand the needs that requires an
      ambitious project. Once the company settled, I have led teams of up to 10 people to develop up to 3 different products at once.`
    },
    mentoring: {
      id: "mentoring",
      // image:"https://drive.google.com/open?id=1Ype5kzDXEKXJ2YLwF58hZSSV1FLgJo7o",
      image: "./images/mentoring.png",
      title: "Mentoring",
      content: `I have always liked to exchange knowledge and get to know different points of view. This past year I have developed these skills as a
        React/Redux/React Native mentor in Udacity as well as in my locality. Something that continues to allow me to grow by learning from others.`
    },
    "web-development": {
      id: `web-development`,
      // image: `https://drive.google.com/open?id=1PCc-vhG1dDhM7h_PZLpLWnGMlXZbpw3Q`,
      image: `./images/web-dev.png`,
      title: `Web Development`,
      content: ` The web came first, but how it's evolving! We have to adapt to these times when Javascript is advancing and improving the way we set up our websites. Nowadays we have to talk about JAMStack, GraphQL, monorepositories and more topics.`
    },
    "mobile-development": {
      id: `mobile-development`,
      // image: `https://drive.google.com/open?id=1Zke7Bf2_DDcpXbDVznhsXGcHFgrjM4Kt`,
      image: `./images/mobile-app.png`,
      title: `Mobile Development`,
      content: `The development of an ecosystem based on mobile applications is increasingly necessary. It is no longer enough to have a website, now we have to provide real multiplatform solutions. We can make developments that run perfectly in both Android and iOS`
    }
  }
};

/* Mocked data for section Jobs */
const jobsSection = {
  id: "jobs",
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
  id: "projects",
  title: `Latest Done Projects`,
  subtitle: `Below some little samples of my work.`,
  sections: {
    connect: {
      id: "connect",
      title: "Connect",
      image: "./images/connect.png",
      image_alt:
        "Landing page of connect showing a hand holding a smartphone running the connet application and some copy text and call to action buttons",
      content: `At my previous startup (Domesting SL) as co-founder I had to transform the previous solution for domestic cleaning services into a solution for the cleaning companies. With connect we didn't focus only only on freelancer cleaners, we added a solution for all kind of cleaning companies and facilities.`
    },

    facilities: {
      id: "facilities",
      title: "Domesting Facilities",
      image: "./images/facilities.png",
      image_alt: `Dashboard of the facilities platform showing a cleaning review from the reviewer role accesss`,
      content: `An adjustment in the connect page where we have been able to help large companies or facilities to manage the revision of the cleaning of their establishments.`
    },
    hospitality: {
      id: "hospitality",
      title: "Hospitality",
      image: "./images/hospitality.png",
      image_alt: `First page of a comercial presentation of Hospitality v1.0 product, showing the reviewer role view for seeing the rooms to clean today`,
      content: `The crown jewel. The definitive solution for the management of housekeeping and maintenance of hotels, as well as its communication with frontdesk. In this project I was the CTO and helped in the product design to be able to assemble a total solution for hotels, both web and mobile. I managed an international team of 10 people and was a fundamental part in the development and implementation of the mobile application.`
    },
    domesting: {
      id: "domesting",
      title: "Domesting",
      image: "./images/domesting_project.png",
      image_alt: `Ladning page of Domesting showing a cleaned saloon image with a grey couch and 2 buttons for hiring a cleaning or signing up as a cleaner`,
      content: `Domesting.com was the first website I built on the startup I co-founded. At that time I was the unique developer in the first stages of the company. I built a complete website to provide final users and domestic cleaner a tool for them to manage the domesting cleaning services.`
    }
  }
};

/* Mocked data for section Reviews */
const reviewsSection = {
  id: "reviews",
  title: "Some of my latest Reviews",
  sections: {
    "patricia-figueroa-rodriguez": {
      id: "patricia-figueroa-rodriguez",
      title: "Patricia Figueroa Rodríguez",
      url:
        "https://www.linkedin.com/in/carlos-loureda-parrado/detail/recommendation/write/",
      content: `Carlos stands out for being a great partner and of course a great friend! There is no doubt that he has made Domesting a dynamic and fun place to work and where everyone can participate.

      He has great qualities to lead a team but what he stands out for is his personal skills, he always tries to be fair in his decisions by empathizing with people and reaching a consensus. He has managed to create an organized and competent technical team, always promoting the work and effort of the youngest and helping them to grow in their careers.

      His joy and commitment have managed to infect the whole team with the necessary enthusiasm for the project to go ahead even at the lowest moments.

      I am taking a friend with me for life and I hope that in the future we will work together again!`
    },
    "ruben-costa-martínez": {
      id: "ruben-costa-martínez",
      title: "Rubén Costa Martínez",
      url:
        "https://www.linkedin.com/in/carlos-loureda-parrado/detail/recommendation/write/",
      content: `Carlos is clearly interested in helping anyone grow in their career. As a Domesting CTO, his energy, team organization and dedication to the project predominate.

      Together, we have managed to create, from the technical point of view, a good application without much prior knowledge about the technologies, but this did not pose any problem for him since he is capable of adapting to any obstacle.

      It's nice to have someone on your side who is so interested in what's new in the sector, so it's impossible to become obsolete.`
    },
    "alex-gonzález-rodriguez": {
      id: "alex-gonzález-rodriguez",
      title: "Alex González Rodríguez",
      url:
        "https://www.linkedin.com/in/carlos-loureda-parrado/detail/recommendation/write/",
      content: `Carlos has been, without a doubt, an indispensable pillar for the success of Domesting. He is a tireless worker, with an admirable passion for his work. His dedication and commitment even at the lowest moments have infected us with the necessary enthusiasm for the project to go ahead.

      With his preparation and technical skills beyond any doubt, I want to highlight his personal skills. He is a colleague with great empathy, always ready to help the rest of the team. His optimism has allowed him to maintain an ideal working environment.

      But, really, if anything has captivated me about Carlos during my time at Domesting, it has been both his organizational capacity and his leadership skills. He has known how to assume responsibilities in the most critical moments, taking decisions firmly and facilitating the understanding of the objectives throughout the organization. He has always fought for team cohesion and the involvement of all departments.

      It has created a technical team that is up to the task, promoting the proactivity of the youngest and getting involved in the training of its employees, motivating them and guiding them in their professional growth. He has proven himself capable of getting the most out of his teams, maintains a high level of exigency while providing security and makes you feel valued, something for which his colleagues remember him with great esteem.

      At his side, I've learned that dedication and sacrifice always have results. I want my future job to bring me more bosses (and friends) like him.`
    },
    "patricia-saco": {
      id: "patricia-saco",
      title: "Patricia Saco",
      url:
        "https://www.linkedin.com/in/carlos-loureda-parrado/detail/recommendation/write/",
      content: `I would like to write a recommendation that will help Carlos achieve what he is proposing at the moment at a professional level, but I doubt that he can compete with his own persistence. Carlos is a tireless worker, who is always looking for a way to surpass himself, others, and mainly to surprise with solutions in the most unexpected moments. I would not hesitate to have him as a partner and I am left with the desire to be able to undertake something in common. Who knows..`
    }
  }
};

/**
 * Contains all the data for builing our sections
 */
const sectionsData = {
  myServicesSection,
  jobsSection,
  projectsSection,
  reviewsSection
};

/* *****************************************************************************
********************************************************************************
********************************************************************************
                        ADD DYNAMIC CONTENT
    - From the Mocked Data from above we are going to add dynamically its content
    into the HTML document.
    - We will generate also the navigation of the document dynamically
********************************************************************************
********************************************************************************
***************************************************************************** */

/**
 * Builds and append the `services` section
 * @param {object} sectionData - The object containing the information required
 */
const buildServicesSection = sectionData => {
  const main = document.getElementById("main-body");

  const servicesSection = document.createElement("section");
  servicesSection.id = sectionData.id;
  servicesSection.classList = sectionData.id;

  const title = document.createElement("h1");
  title.textContent = sectionData.title;

  // Create a div for the subsections
  const serviceSection = document.createElement("div");

  servicesSection.appendChild(title);
  // main.appendChild(section);
  const sectionElement = document.createElement("div");
  sectionElement.classList = "services-content";
  servicesSection.appendChild(sectionElement);

  // Loop over the sections
  Object.values(myServicesSection.sections).map(section => {
    // Create an element with id
    const article = document.createElement("article");
    article.classList = section.id;
    article.id = section.id;

    // Add image ..
    const image = document.createElement("img");
    image.src = section.image;
    image.alt = section.title;
    image.classList = "services-picture";
    image.width = "60";

    // Add Add title ...
    const title = document.createElement("h2");
    title.textContent = section.title;

    // Add content Needed this div?
    const content = document.createElement("p");
    content.textContent = section.content;

    // Append
    article.appendChild(image);
    article.appendChild(title);
    article.appendChild(content);

    sectionElement.appendChild(article);
  });

  const footer = document.querySelector("footer");
  footer.parentNode.insertBefore(servicesSection, footer);
};

/**
 * Builds and append the `jobs` section
 * @param {object} sectionData - The object containing the information required
 */
const buildJobsSection = sectionData => {
  const main = document.getElementById("main-body");

  // TODO: create an article with name of the id
  const mainSection = document.createElement("section");
  mainSection.id = sectionData.id;
  mainSection.classList = sectionData.id;

  const title = document.createElement("h1");
  title.textContent = sectionData.title;

  mainSection.appendChild(title);

  // Create a div for the subsections
  const wrapper = document.createElement("div");
  wrapper.classList = "jobs-content";
  mainSection.appendChild(wrapper);

  Object.values(sectionData.sections).map(section => {
    // Create an element with id
    const article = document.createElement("article");
    article.classList = "job-item";
    article.id = section.id;

    const company = document.createElement("h2");
    company.classList = "text-uppercase";
    company.textContent = section.company;

    const date = document.createElement("p");
    date.classList = "job-date";
    date.textContent = section.startDate;
    if (section.endDate) {
      date.textContent += ` ${section.endDate}`;
    }

    const position = document.createElement("h3");
    position.textContent = section.position;

    const description = document.createElement("p");
    description.classList = "description";
    description.textContent = section.content;

    const border = document.createElement("div");
    border.classList = "btm-border";

    // Append
    article.appendChild(company);
    article.appendChild(date);
    article.appendChild(position);
    article.appendChild(description);
    article.appendChild(border);

    wrapper.appendChild(article);
  });
  const footer = document.querySelector("footer");
  footer.parentNode.insertBefore(mainSection, footer);
};

/**
 * Builds and append the `projects` section
 * @param {object} sectionData - The object containing the information required
 */
const buildProjectsSection = sectionData => {
  // TODO: create an article with name of the id
  const mainSection = document.createElement("section");
  mainSection.id = sectionData.id;
  mainSection.classList = sectionData.id;

  // Create the header
  header = document.createElement("header");
  header.classList = "menu-content";

  title = document.createElement("h1");
  title.textContent = sectionData.title;
  subtitle = document.createElement("p");
  subtitle.textContent = sectionData.subtitle;

  header.appendChild(title);
  header.appendChild(subtitle);

  mainSection.appendChild(header);

  Object.values(sectionData.sections).map((section, index) => {
    // Create an element with id
    const article = document.createElement("article");
    article.classList = "projects-item";
    if (index % 2 === 0) {
      article.classList.add("reverse");
    }

    article.id = section.id;

    const img = document.createElement("img");
    img.classList = "img-fluid img-shrinkable";
    img.src = section.image;
    img.alt = section.image_alt;

    const content = document.createElement("div");
    content.classList = "project-content";
    const contentTitle = document.createElement("h2");
    contentTitle.classList = "text-uppercase pt-30 pb-30";
    contentTitle.textContent = section.title;
    const contentDescription = document.createElement("p");
    contentDescription.classList = "description";
    contentDescription.textContent = section.content;
    content.appendChild(contentTitle);
    content.appendChild(contentDescription);

    article.appendChild(img);
    article.appendChild(content);
    mainSection.appendChild(article);
  });
  const footer = document.querySelector("footer");
  footer.parentNode.insertBefore(mainSection, footer);
};

/**
 * Builds and append the `reviews` section
 * @param {object} sectionData - The object containing the information required
 */
const buildReviewsSection = sectionData => {
  const mainSection = document.createElement("section");
  mainSection.id = sectionData.id;
  mainSection.classList = sectionData.id;

  // Create the header
  title = document.createElement("h1");
  title.textContent = sectionData.title;
  title.classList = "text-centered";

  wrapper = document.createElement("div");
  wrapper.classList = "reviews-content";

  mainSection.appendChild(title);

  Object.values(sectionData.sections).map((section, index) => {
    // Create an element with id
    const article = document.createElement("article");
    article.classList = "reviews-item ml-15 mr-15 pt-30 pb-15 pl-30 pr-30";
    article.id = section.id;

    h2 = document.createElement("h2");
    a = document.createElement("a");
    a.href = section.url;
    a.target = "_blank";
    a.textContent = section.title;
    h2.appendChild(a);

    short_description = document.createElement("p");
    short_description.classList = "review";
    short_description.textContent = section.content.substring(0, 185);

    div = document.createElement("div");
    div.classList = "fulltext";
    div.id = `more-${index}`;
    showmore_link = document.createElement("a");
    showmore_link.href = `#more-${index}`;
    showmore_link.textContent = "Show more";
    showmore_link.classList = "more";
    p = document.createElement("p");
    p.textContent = section.content;
    showless_link = document.createElement("a");
    showless_link.href = `#less-${index}`;
    showless_link.classList = "less";
    showless_link.textContent = "Show less";
    div.appendChild(showmore_link);
    div.appendChild(p);
    div.appendChild(showless_link);

    article.appendChild(h2);
    article.appendChild(short_description);
    article.appendChild(div);
    wrapper.appendChild(article);
  });
  mainSection.appendChild(wrapper);
  const footer = document.querySelector("footer");
  footer.parentNode.insertBefore(mainSection, footer);
};

/**
 * Builds all the sections
 * @param {objects} sectionsData - The object containing the information for
 *                    adding all the sections to our page dynamically
 */
const buildSections = sectionsData => {
  buildServicesSection(sectionsData.myServicesSection);
  buildJobsSection(sectionsData.jobsSection);
  buildProjectsSection(sectionsData.projectsSection);
  buildReviewsSection(sectionsData.reviewsSection);
};

/**
 * Builds dynamically the header
 * @param {objects} sectionsData - The object containing the information for
 *                    adding all the elements to our header
 */
const buildHeader = sectionsData => {
  // Medium-large devises nav
  greedyNavUl = document.getElementById("visible-links");

  // Mobile nav
  mobileNavUl = document.getElementById("mobile-nav--menu");

  Object.values(sectionsData).forEach(element => {
    li = document.createElement("li");
    a = document.createElement("a");
    a.classList = "nav-link text-uppercase";
    a.textContent = element.id;
    a.href = `#${element.id}`;

    li.appendChild(a);
    greedyNavUl.appendChild(li);
    mobileNavUl.appendChild(li.cloneNode(true));
  });
};
buildHeader(sectionsData);
buildSections(sectionsData);

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
        - For tablets/desktop devices I am going to show a dynamic navbar that
        contracts and shows a menu with an icon with the hidden elements when
        the menu elements can't fit into the header
        - For mobile devices just show the hamburguer menu
********************************************************************************
********************************************************************************
***************************************************************************** */

/**
 * Event handler for showing small/medium devices navbar (navbar-nav responsive) or large
 * devices (navbar-nav)
 */

/**
 * Helper function to get the number of <li> children elements of a <ul> parent
 * elements. Right now is not used but I leave it here in case I will need it in the future
 * @param {NodeElement} ulElement  - The <ul> element to search for li children
 * @return int - The number of li inside ul
 */
const getNumberOfLi = ulElement => {
  var liNodes = [];

  for (var i = 0; i < ulElement.childNodes.length; i++) {
    if (ulElement.childNodes[i].nodeName == "LI") {
      liNodes.push(ulElement.childNodes[i]);
    }
  }
  return liNodes.length;
};

/**
 * Handles everything related to the greedy navigation.
 */
const greedyNavigationHandler = () => {
  var nav = document.querySelector(".greedy-nav");
  var btn = document.querySelector(".greedy-nav .menu-button");
  var vlinks = document.querySelector(".greedy-nav .visible-links");
  var hlinks = document.querySelector(".greedy-nav .hidden-links");
  var mobileNav = document.querySelector(".mobile-nav");

  var breaks = [];

  const updateNav = () => {
    // When showing the mobile nav bar we dont want to do updates
    if (getComputedStyle(mobileNav, null).display !== "none") {
      return;
    }
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
    btn.setAttribute("count", breaks.length);
    // Recur if the visible list is still overflowing the nav
    if (vlinks.offsetWidth > availableSpace) {
      updateNav();
    }
  };

  // Window listeners

  window.addEventListener("resize", updateNav);
  btn.addEventListener("click", e => {
    e.stopPropagation();
    hlinks.classList.toggle("hidden");
  });

  // When click outside the menu dropdown we want to collapse it
  document.getElementsByTagName("body")[0].addEventListener("click", () => {
    document.querySelector(".greedy-nav .hidden-links").classList.add("hidden");
  });

  updateNav();
};

greedyNavigationHandler();

/**
 * Handles mobile navigation open/close dropdown menu
 */
const mobileNavigationHandler = () => {
  document
    .querySelector(".mobile-nav .menu-button")
    .addEventListener("click", () => {
      document
        .querySelector(".mobile-nav .menu")
        .classList.toggle("dissapeared");
    });
};
mobileNavigationHandler();

/**
 * Observer for the 4 dynamic sections to highlight them while scrolling
 */
(function() {
  const observaleSections = Object.values(sectionsData).map(section =>
    document.getElementById(section.id)
  );

  const observer = new IntersectionObserver(
    entries => {
      // isIntersecting is true when element and viewport are overlapping
      // isIntersecting is false when element and viewport don't overlap
      if (entries[0].isIntersecting === true) {
        observaleSections.forEach(section =>
          section.classList.remove("active")
        );
        entries[0].target.classList.toggle("active");
      }
    },
    { threshold: [0.2] }
  );

  observaleSections.forEach(section => {
    observer.observe(section);
  });
})();

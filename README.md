# Landing Page Project

A landing page project for mastering JS & CSS on the Front End Nanodegree for Udacity.
We are viewing some basic content for the nanodegree. We will keep things easy and on the future I will create some branches or side projects with more advanced functionalities for builing some independant courses for my mentoring sessions

## Table of Contents

- [Installation](#installation)
- [About](#about)
- [Data](#data)
- [Brances](#branches)
- [Support](#support)
- [Contributing](#contributing)

## Installation

This project works without any framework so you only need to download the code and open the `index.html` file in your preferred browser.

## About

The purpose of this project is to have a dinamic landing page that creates a navbar for each section added to this landing page using Javascript.

I am going to fake some content fetched from an API, but it will just be delivered from local code (mocked data), but I will keep in mind the best practices for real projects.

## Data

As of now, we have to locate all the code inside `app.js`, in the future i will split it using babel.

### Section's Data

I stored the data for each section on a `sectionsData` constant, it has 4 sections:

```js
const sectionsData = {
  myServicesSection,
  jobsSection,
  projectsSection,
  reviewsSection
};
```

Each of these sections has a `title` and a `sections` property. Inside each section we have this data:

```
    myServicesSection: {
        id: {
            id,
            image,
            title,
            content
        }
    }

    jobsSection: {
        id: {
            id,
            company,
            startDate,
            endDate,
            position,
            content
        }
    }

    projectsSection: {
        id: {
           id,
           title,
           image,
           content
        }
    }

    reviewsSection: {
        id: {
           id,
           title,
           content
        }
    }

```

## Branches

- `master` -> Main branch with all the final code
- `basic-design` -> Static design with just design for mobile (width <=375px)
- `design-for-tablets` -> (everything on `basic-design`) Static design with the design for tablets (width > 375px && <=768px)
- `design-for-desktop` -> (everything on `basic-design` && `design-for-tablets`) Static design with the design for large devices/desktop (width > 769px)
- `generate-sections-dynamic` -> An experimental branch to add HTML/CSS from Javascript.

## Support

Please [open an issue](https://github.com/carlosloureda/FEND-Landing-Page/issues/new) for support.

## Contributing

Please contribute using [Github Flow](https://guides.github.com/introduction/flow/). Create a branch, add commits, and [open a pull request](https://github.com/carlosloureda/FEND-Landing-Page/compare/).

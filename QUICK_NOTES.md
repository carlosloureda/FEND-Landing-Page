Here I just add some quick notes while developing, some of them will go into the README.md and some of them will go into my Notion.so documentation

# Responsive Design

## Planning Breakpoints

https://www.browserstack.com/guide/responsive-design-breakpoints

Article on media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries

### Develop for mobile-first

1. Prioritize important menu options
2. Remove anything visually distracting
3. Remove minor form fields
4. Highlight the main CTA
5. Focus on a robust search and filter function.
6. Always keep major breakpoints in mind. The former usually matches common screen sizes (480px, 768px, 1024px, and 1280px).
7. Before choosing major breakpoints, use website analytics to discern the most commonly used devices from which your site is accessed. Add breakpoints for those screen sizes first.

As we don't have any analytics of the devices used for our webiste we will be starting to analyze the most commonly used on 2019:

360×640
360×720
375×667
768×1024
1366×768
1920×1080

- Let's begin with width: 360px, 375px, 768px, 1366px, 1920px

(When we are done we can check our design here: https://www.browserstack.com/responsive)

By now i dont see a difference between 360 and 375px so I am going to go with 375px

# Color Design

http://paletton.com/#uid=5050-0kfB8H8MiY9mbskY7cqS4Y

# Icons

I am going to use FontAwesome Icons over a CDN ...

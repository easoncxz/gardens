---
layout: base
---
# Site structure

[See diagram here](meta/site_structure.png).

# Wireframe

[one here](meta/mockup_1.png) and [another here](meta/mockup_2.png).

# Font scheme

3 fonts are used throughout the site, 1 specific and 2 generic: "Comic Neue", "serif" and "sans-serif".

.

"Comic Neue" was used because I wanted to create a casual and easy-going feeling for the users about the site - it's not for seriousness but for being comfortable instead. This font is used **whenever the text speaks from a point-of-view of a person**. By that, I mean, the words that I want the user to imagine to come from a _person_ (as opposed to a machine), are all in "Comic Neue".

.

The majority of the site's contents use sans-serif. This is because it's both more legible on screen, and that it gives a **modern, clean, simplistic** feeling. This is used on all body text, and most label text (e.g. the navigation bar).

.

Serifs are specifically used on the names of crops/plants/vegetables. I wanted to create some contrast betweet different types of text on the screen. It also helps with creating a **visual hierarchy** and a slight convention/hint to the user that a certain word is a slightly more "proper" name.

# Colour scheme

[See Design Eye diagram here](meta/color_scheme.jpg).

.

Colours of gardens, nature are used - green colours! The colour scheme is a combination of analogous and complementary colour schemes: two greens and a bit of dark-pink/magenta (whatever you call #D0006E).

.

The greens are really just used for the heading and the hyperlinks. This is because I don't want to clutter the interface elements with colour - I want to keep it as simple as I can.

.

The dark-pink is used especially for elements that the user would interact with, a.k.a. buttons. Using a colour that only serves intrumental text.

.

The content part has a lighter colour compared to the header and footer, so that the user can comfortably spend more of his attention in the content area than in the nav/header area.

# Lines and borders

I try not to explicitly use too much of these, because I think it makes the interface seem more "complicated"/"complex". I try to use only the change in colours to create the effect of a "line".

.

Conscious examples are the lines (where background color change) between the header, nav, content, and footer; box shadows of images; and "line" between the grey rounded-corner card-like containers, e.g. those on the "getting started" page (which is linked from the big pink button on the home page), and the white background. The "line" between the grey "cards" and the white background is to let the user imagine that they are interacting with (sort of) an object (a tangible one) - rather than merely text on a screen.

# Assumptions

- The user is viewing the page using either **Chrome or Internet Explorer 11**, on a laptop/desktop computer. (And JavaScript is turned on.)
- The viewport is reasonably wide, e.g. wider than about **800px**.
- The user's machine has access to the **internet**. (Loading some images require internet.)

## Compromises

**Interaction**: The site isn't complete - not even the front-end/interactive-prototype - due to, well, lack of time. For example, one part that was missing was the bahaviour when the checkboxes are checked, on the `crops.html` page.

.

**Information** - mainly the writing in sections of each page, which are gardening-relevant descriptions of stuff (e.g. what a "garden fork" is) - is mostly missing. You'll have to imagine that there are relevant information about the topic mentioned by the label.

.

**External resources**: I considered showing a map in the `climates.html` page for the user to pick a location. I would like to use the Google Maps' stuff for this purpose, but neither do I know how to use it, nor am I allowed external resources.

# Usability study

I conducted usability tests on a few family members. (Yes, I've participated in another student's usability study.) The task given to them was to _"suppose you are living in Auckland, have a balcony, are new to gardening, and are trying to pick a plant to start with, and also trying to find the tools required for that plant or those plants"_.

.

I came across a bit of trouble/awkwardness because of language issues - they aren't native English speakers, and seem to every now and then need to think hard to find a suitable English word to describe what they are thinking. However, there are still some problems found.

.

My mum made comments about the lack of information on the site, which I explained was because it's not a finished product - not even interface-wise. A problem raised by her is that **the location picker** doesn't show enough places.

.

My sister commented on the `getting-started.html` page, pointing out that **if the user makes an accidental wrong-click on one of the options on each "card"** (or say question), the only way to correct the mistake is to either click the back button, and enter the getting-started page again, or to reload the page - both of which will cause the user to start from the top of the questions againbutton, and enter the getting-started page again, or to reload the page - both of which will cause the user to start from the top of the questions again. Unfortunately, there's too much to change (e.g. introducing new buttons, creating new event listeners etc.) for me to have time to implement - so, well, it was left as how it is now.

.

[See video here](meta/usability.avi).

.

I think the biggest lesson learnt from the usability study, is actually about usability study as a thing per se - I find it really hard to explain to them what "think out loud" means, what we're expecting them to do, how to motivate them to do it etc..

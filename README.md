# Rock Paper Scissors Game

![Screenshot of Rock Paper Scissors page on a range of screen sizes to show responsiveness](/assets/images/readmeimg/RPS-screens.webp)

Rock Paper Scissors is a simple game played traditionally with hand gestures and widely known. This game aims to re-create the experience so the user can play solo on their phone or device. The game is built mobile first as it aims to be handily available to users wherever they are and when they want a short and simple game distraction.


## Features

The Game is a single page game with no options for other pages to click to. It is mobile first and takes up a minimal amount of space so I have decided not to include a footer and the header is the main Title of the game. Due to the mobile first scale, and the small of amount of screen real estate needed, no media queries are needed, and flex wrap allows the buttons to adjust should the screen get very narrow.

### Header-Title

![Screenshot of the title](/assets/images/readmeimg/RPS-title.png)

The Main title has a slightly blocky font of Oxanium with a default of sans-serif. I wanted something a bit retro as a nod to the long life of the game and also to represent the simple iconic nature of the game.
The font for the rest of the content is Figtree. All fonts are from [GoogleFonts](https://fonts.google.com/specimen/Oxanium?query=oxan)

### Colour Palette

![Color palette image from Coolers.co](/assets/images/readmeimg/rps-colors.png)

I selected a colour palette using [Coolers.co](https://coolors.co/beb8eb-fde321-5299d3-0b5563). Midnight Green as my base colour with white type on top is a strong contrast, and three other colours would serve to help highlight specific areas, but essentially I wanted a strong contrast between the font and the background.
I changed the Celestial Blue to aqua as it stands out better.

### Game Area

![Screengrab of the game area before play](/assets/images/readmeimg/RPS-start.png)

A simple set of instructions remains at the top of the page directly under the header/H1 title.

The Game area consists of a set of buttons with an icon for each; Rock, Paper, Scissors. I researched various icon types on Google and checked the free ones available, I liked the simple graphic icons best and decided to draw my own in illustrator.

Below the buttons are areas to be shown your choice and the computers choice, and a corresponding score area.

The user selects a button, their selection colours a button yellow, and their choice is written in yellow below "Your Choice:" At the same time the Computer selects a random choice and their option is written in blue below "Cpu Choice:". The scores will increment based on whomever has won the round. If there is a draw, no score will increase.

![Screengrab of the game area once a selection has been made](/assets/images/readmeimg/RPS-played.png)


## Features left to implement

Originally I wanted to have two rows of icons, one to show the user selection and one to show the computer. I would still like to implement this as this would also allow for a future feature of making the game play available to engage with another user, so you could play against a friend - each on their own device.

I would like to add the option to choose to do a best of 3, 5, or more multiple matches, in rounds of odd numbers.

A reset game button would also be useful, as currently to reset you need to refresh the browser. 


## Testing
I tested the game on Firefox and Chrome browsers.

I checked that all game results correctly matched the rules.

I checked accessibility with Lighthouse in Dev tools and checked its responsiveness to different screen sizes.

![Screengrab of Lighthouse test](/assets/images/readmeimg/Screenshot%202024-08-24%20at%2021.00.46.png)


### Debugging
Originally I wanted there to be two columns of the buttons, one for the user to select from and one for the computer to show their choice, I was struggling with the computer choice selection, so simplified the game play UI to just showing buttons for the User. This would be an additional feature that I would like to solve though.

I struggled to get the game to show the user choice, yet it would show the computer choice. I kept re-checking the js, and went back to the beginning with a pseudo-code list, as I was unsure if I had the order of events and functions correct and understood. The problem actually lay in the html, I had an extra div that contained the buttons in the game-panel div, and it shared the class name of the buttons, once this was removed it was ok.

I was using the === operator for some of the checking the answer function, I needed to use the == operator. I think retrospectively my html uses too many classes and data-choice, data-type options, I could simplify this too, and it would help the js in future.

When I tested the deployed game in a Firefox browser the border thickness of the buttons was hardly visible, using the dev tool on that browser I removed the ',' in between the css styling for the button borders and this made everything visible again. I corrected the css.

### Validator Testing

#### HTML
I tested the HTML with [W3](https://validator.w3.org/nu/?doc=https%3A%2F%2Fsuzannecodeinst.github.io%2FRPS-game-PP2%2F) validator. This highlighted that a H2 element where I show the results was missing a heading. This is deliberate as the content is fille donly when game starts play.

### CSS
I tested the CSS with the [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsuzannecodeinst.github.io%2FRPS-game-PP2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) validator and all was good.




## Reference
Referred to this [article](https://www.shecodes.io/athena/124459-why-are-we-using-let-and-not-const#:~:text=We%20use%20let%20when%20we,that%20should%20not%20be%20reassigned) on using const and let.

Referred to Love Maths for setting up event listeners and using alert messages in js to check the code is working.

Referred to this [Mdn web docs article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) to check the use of the == and === operators.

Referred to this [article](https://www.w3schools.com/js/js_if_else.asp) as a reminder for if else statements.

Referred to this article, to check and compare code for working with buttons and their values;<br>
[TutorialsPoint](https://www.tutorialspoint.com/how-to-find-the-value-of-a-button-with-javascript#:~:text=of%20value%20attribute.-,Step%201%20%E2%88%92%20In%20this%20step%2C%20we%20will%20define%20a%20button,attribute%20associated%20with%20particular%20value.&text=property%20of%20JavaScript_-,Step%203%20%E2%88%92%20In%20the%20third%20step%2C%20we%20will%20display%20the,code%20is%20working%20or%20not.)

Referred to the Code Inst Project Scope [ReadMe Example](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+JSE_PAGPPF+2021_Q2/courseware/30137de05cd847d1a6b6d2c7338c4655/c3bd296fe9d643af86e76e830e1470dd/) as a reminder for the Readme structure, and in particular I followed the steps for testing.

## Credits

I created the favicon in illustrator and converted with [favicon](https://favicon.io/favicon-generator/).


## Deployment

The site is deployed to GitHub pages.

The GitHub repository is [here](https://github.com/suzannecodeinst/RPS-game-PP2).

you can click the deployed link below or find your way via the repository above by clicking on the deployments panel on the right side of the screen, and clicking the githib deployment link on the subsequent page.

The deployed site is [here](https://suzannecodeinst.github.io/RPS-game-PP2/)





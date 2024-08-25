# Rock Paper Scissors Game

![Screenshot of Rock Paper Scissors page on a range of screen sizes to show responsiveness](/assets/images/readmeimg/3-devices-white.png)

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

### Instructions 

A simple set of instructions remains at the top of the page directly under the header/H1 title.

### Game Area

![Screengrab of the game area before play](/assets/images/readmeimg/RPS-gamearea001.png)

The Game area consists of a set of buttons with an icon for each; Rock, Paper, Scissors. I researched various icon types on Google and checked the free ones available, I liked the simple graphic icons best and decided to draw my own in illustrator.

Below the buttons are two areas that will confirm the user choice and the choice of the computer.

The user selects a button, their selection colours a button yellow, and their choice is written in yellow below "Your Choice:" At the same time the Computer selects a random choice and their option is written in blue below "Cpu Choice:".

![Screengrab of the game area once a selection has been made](/assets/images/readmeimg/RPS-gamearea002.png)


### Result area

![Screengrab of the result area with the rules below](/assets/images/readmeimg/RPS-results.png)

The results area shows you who has won the game, with options for a draw, winning or losing. Immeadiately below the results is a reminder of the rules and which element beats which.


## Features left to implement

Originally I wanted to have two rows of icons, one to show the user selection and one to show the computer. I would still like to implement this as I think it would make the gameplay clearer, I find the Cpu Choice as it is now, not as easy to 'read'.

If there were two rows of buttons this would also allow for a future feature of making the game play available to engage with another user, so you could play against a friend - each on thier own device.

I would like to add the option for a scoring system where you could also choose to do a best of 3, 5, or multiple matches.

A reset game button would also be useful in light of the above.







## Reference
Referred to this [article](https://www.shecodes.io/athena/124459-why-are-we-using-let-and-not-const#:~:text=We%20use%20let%20when%20we,that%20should%20not%20be%20reassigned) on using const and let.

Referred to Love Maths for setting up event listeners and using alert messages in js to check the code is working.

Referred to this [Mdn web docs article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality) to check the use of the == and === operators.

Referred to this [article](https://www.w3schools.com/js/js_if_else.asp) as a reminder for if else statements.

Referred to these articles, to check and compare code for working with buttons and their values;<br>
[TutorialsPoint](https://www.tutorialspoint.com/how-to-find-the-value-of-a-button-with-javascript#:~:text=of%20value%20attribute.-,Step%201%20%E2%88%92%20In%20this%20step%2C%20we%20will%20define%20a%20button,attribute%20associated%20with%20particular%20value.&text=property%20of%20JavaScript_-,Step%203%20%E2%88%92%20In%20the%20third%20step%2C%20we%20will%20display%20the,code%20is%20working%20or%20not.)






## Debugging
Originally I wanted there to be two columns of the buttons, one for the user to select from and one for the computer to show their choice, I was struggling with the computer choice selection, so simplified the game play UI to just showing buttons for the User. This would be an additional feature that I would like to solve though.

I struggled to get the game to show the user choice, yet it would show the computer choice. I kept re-checking the js, and went back to the beginning with a pseudo-code list, as I was unsure if I had the order of events and functions correct and understood. The problem actually lay in the html, I had an extra div that conatained the buttons in the game-panel div, and it shared the class name of the buttons, once this was removed it was ok.

I was using the === operator for some of the checking the answer function, I needed to use the == operator. I think retrospectively my html uses too many classes and data-choice, data-type options, I could simplify this too, and it would help the js in future.



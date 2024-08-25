# Rock Paper Scissors Game

![Screenshot of Rock Paper Scissors page on a range of screen sizes to show responsiveness](/assets/images/readmeimg/3-devices-white.png)

Rock Paper Scissors is a simple game played traditionally with hand gestures and widely known. This game aims to re-create the experience so the user can play solo on their phone or device. The game is built mobile first as it aims to be handily available to users wherever they are and when they want a short and simple game distraction.


## Features

The Game is a single page game with no options for other pages to click too. It is mobile first and takes up a minimal amount of space so I have decided not to include a footer and the header is the main Title of the game. Due to the mobile first scale, no media queries are needed.





## Reference
Referred to this article https://www.shecodes.io/athena/124459-why-are-we-using-let-and-not-const#:~:text=We%20use%20let%20when%20we,that%20should%20not%20be%20reassigned. on using const and let 

Referred to Love Maths for setting up event listeners and using alert messages in js to check the code is working.



## Debugging
Originally I wanted there to be two columns of the buttons, one for the user to select from and one for the computer to show their choice, I was struggling with the computer choice selection, so simplified the game play UI to just showing buttons for the User. This would be an additional feature that Iwould like to solve though.

I struggled to get the game to show the user choice, yet it would show the computer choice. I kept re-checking the js, and went back to the beginnig with a pseudo-code list. The problem lay in the html, I had an extra div that conatained the buttons in the game-panel div, and it shared the class name of the buttons, once this was removed it was ok.

I was using the === operator for some of the checking the answer function, I needed to use the == operator. I think retrospectively my html uses too many classes and data-choice, data-type options, I could simplify this too, and it would help the js in future.



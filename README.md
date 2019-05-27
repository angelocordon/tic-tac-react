# Tic Tac React
A Tic Tac Toe game built with React. 

## Installation & Set Up
Clone the project repostory by running in terminal:
```bash
git clone git@github.com:angelocordon/tic-tac-react.git
```

CD into the project folder and install project dependencies:
```bash
cd tic-tac-react
npm install
```

Run the project server and visit localhost:3000 in your browser
```bash
npm run start
```

## Approach
This was started off using the Create React App CLI in order to abstract away from configuration and focus more on product development.

The strategy was to build functional pieces first and be able to put them together to build the app as a whole. This allowed me to define the responsibilities of each component, however, it posed challenges with needing to pass props deep down nested components, and hoisting props back up to the parent component. In hindsight, deciding which properties that should be defined globally early on using React's Context API could have been helpful. For example, clearing off the board could be achieved by using a global Context and passing the context back down to the Square components.

The app supports being able to grow the grid to N x N size but prevents it from being any smaller than 3 x 3. The challenge here would be how to determine the winner, as typically in other tic tac toe games, there are pre-determined moves that can be checked against in order to decide which player wins. However, because the grid size is more dynamic, having a pre-determined set of winning moves might not contribute to a solution very optimally. Instead, a possible solution could be to pragmatically check to see the horizontal, vertical and diagonal rows of every last move to see if there is a consecutive series of 'X's or 'O's. This idea is not implemented in this project due to lack of time.

The grid height is set based on the viewport's size. By using CSS's `calc()` method along with the `vh` property, I'm able to set a height for the board that can be visible within the screen. This allows for the grid to be subdivided into bigger sizes while maintaining the board's visibility on the screen. 

Other aspects of the application that can be further optimized:
+ Bulma should essentially be replaced with a smaller dependency by simply using a CSS Reset along with writing out the 2-3 base CSS needed for the application (layout and buttons).
+ It would be nice to include some unit tests, or including prop-types to adhere to best practices.

## Resources
Various references were used while building this, including referencing to the offical React docs as well as peruising other projects on Github or questions on Stack Overflow to gather ideas around how others have approached the challenge. No code was copied directly, however, rather some patterns were used as inspirations to help me figure out ways around road blocks.

This app uses React in order to get one input from the user and seach a external
movie database api for movie results upon clicking the search button.

I break down the application into small reusable components and organize them in 
a clean file structure with a components directory and a subdirectory named after
the components itself and each component directory having its own css file.

In the App.js component I simply import all components that are to be rendered to
the browser.

The Header.js component is a simple h1 tag with the name of the application

In SearchMovies.js component I place most of the logic and all of the api 
requests.

I have two states which are mainteined using the useState hook. I am using a more
modern functional components structure with hooks instead of using the class
components for keeping state. 





Testing API calls in React with the SWAPI API - Assignment

This repo contains parts 2&3 of a 3 part assignment


Part 2:
Now you have familiarised yourself with the React Testing and Mock Service Worker Libraries and how to mock an API call example(s) you are ready for the next step!
Your challenge is to put these learnings into practice and mock an API call from a React app (don’t forget the TypeScript flag!) that you’ve created. For this challenge you will be putting into practice your knowledge of TypeScript, React, Hooks, APIs and Testing. 💃
You’ve got this! 🙌
 
📝 The Brief:
The aim of this is to make a GET request to the Star Wars people end point and for your App component to display the title of the first person that comes back from the API end point (name: 'Luke Skywalker').


Star Wars API docs: SWAPI - The Star Wars API
👉 Create a React app
👉 Have the React app call the Star Wars API people end point and display the first person on the page.
👉 Next, add msw so you can mock (or "stub") the API response.
👉 Use your mock server to write a test to check the first person that your mock server returns is being correctly rendered to the page.
 
🔥 Part 3 (extension):
👉 Write a test that checks your component displays an error message saying "Oops... something went wrong, try again 🤕" if the API returns Status Code 500 (Internal Server Error: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 ).
👉 Write another test checking your component displays an error message saying "418 I'm a tea pot 🫖, silly" in the scenario the API returns Status Code 418 (I’m a tea pot: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 )

To run the code use the following steps:

1: Clone the repo<br>
2: Run npm install<br>
3: Run npm start<br>

To run the tests run the following command:<br>
1: npm test





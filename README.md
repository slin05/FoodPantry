# FoodPantry
CS Software Engineering | Food Pantry project

WEB DEV --------------------------------------

**Getting started**

Install node.js, firebase globally. Vite locally
node.js - https://nodejs.org/en/download (run the following in cmd to verify): "node -v" and "npm -v"
firebase - (run the following in cmd): "npm install -g firebase-tools", then "firebase login", then while in the project folder (assuming you have the latest commit of the WebpageApplication branch) (food-inventory-client) run "firebase use" to check if it works. You have to be a collaborator in firebase first, so send me your google account so I can do so. You can then use "firebase deploy" while in the project folder (food-inventory-client) to deploy.
Vite - this is useful for bundling and using modern syntax. 
It also lets us run a dev server that auto-updates when you make changes, so you don't have to redeploy or anything while developing to see the results of code changes on the client side. 
To install, go to the food-inventory-client folder and in cmd run "npm install"
To launch the dev server go to the food-inventory-client folder and in cmd run "npm run dev" and go to the url to see it.

**How it works**

Firebase, owned by Google, is both providing the hosting for the webpage and the database we're using (Realtime Database). 
When you deploy ("firebase deploy"), it's uploading the contents of the "food-inventory-client" folder to Google's content delivery network (CDN) and they're hosting it for us.
They just serve the static files; the user's browsers actually run the code.
They handle the HTTPs routing/controlling/middleware that we'd have to have done if we made a custom backend.
Firebase SDK provides the needed tools for manipulating data and doing business logic.
Node.js serves the purpose of 
1. providing development tools like its packaging manager (when you did npm install earlier)
2. vite and the firebase CLI (when you installed, logged in, and possibly deployed firebase earlier) depend on node.js
3. transpiling (converting code from one language to another) our developer js (uses React and modern syntax) to browser js (only understands js not jsx and other modern syntax.)
Vite is 
1. needed to bundle all of the separate files into a few and improves performance.
2. makes libraries available for import (modern syntax) 
3. allows us to run a dev server for more efficient development (don't need to redeploy to see live code changes)
----------------------------------------------
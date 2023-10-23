# Estavii
An event website with tailwindcss
## Table of Contents
-[Overview]
-[Resources]
-[Tailwind][installation]
-[Process]
-[Technologies]

## Overview
I created an event website with Tailwind css

## Resources
When designing my webpage I used the below listed sites for the resources I needed;
- For Tailwind installation I used [TailwindDocumentation](https://tailwindcss.com)
- For the image I used [pexels](https://www.pexels.com) 
- To reduce the size of my images I used photo edit to resize it by focusing on the aspect ratio and I used [tiny png](https://tinypng.com) to compress my images in other to increase the load time
- I used  [font-awesome cdn](https://cdnjs.com) for my font awesome and I got the css syntax of font-awesome from Font-awesome official website by searching for the icons I want to use
- For the sponsors icons, I downloaded it from [icons8](https://icons8.com)

## Tailwind Installation
- I installed an extension called tailwind css intellisense on vscode
- I created a package.json file in my folder by typing **npm init** in my terminal
- I created a tailwind css dependency by using **npm i -D tailwindcss**
- I created a tailwingconfig file in my folder by typing **npx tailwindcss init** in my terminal
- I created my index.html file in my root folder
- I created my input.css file and added the below lines to it:
\```@tailwind base;
@tailwind components;
@tailwind utilities```
- Then I created my dist folder and added the below code to my package.json scripts:
\```build: "tailwindcss -i ./input.css -o ./dist/output.css"
dev: "tailwindcss -i ./input.css -o ./dist/output.css --watch"```
that way I wont be typing a long code on my terminal. Once I pressed my npm run dev its going to continue building and watching my code as i make changes to them
- THen I typed *npm run build* on my terminal which created an output.css with all tailwind styles in it on my dist 

## Process
- I started by downloading image from [pexels](https://www.pexels.com) then I resized it with photo edit and compress it with [tiny png](https://tinypng.com)
- Then I created a sketch of how I want the website to look like on my notebook
- Then I downloaded all the needed icons from[icons8](https://icons8.com)
- I installed package.json file
- I installed tailwindcss dependences and other files by following the tailwind docs
- I configured my content in my tailwind.config.js file since I created my index.html file in my root folder
- After creating my index.html page, I linked my font-awesome cdn, and output.css file to my index.html 
- I created my custom properties in my tailwind.config.js file
- Then I started styling my code by using class directly in my html page 
- After creating, styling and reviewing everything, I updated my local repository with my remote repository from terminal

## Technologies
- Html semantic tags
- Tailwindcss
- Javascript
- Custom properties
- Comments

You can always reach out to me on what you feel I should improve on.
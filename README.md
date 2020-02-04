# Museic
### [Live Demo](http://museic-demo.herokuapp.com/#/ "Live link of Museic")

## Summary: A MERN-stack single-page web application that allows users to make, and share short, musical snippets.

**Technologies used:**
MongoDB, Express, React / Redux, Node JS (MERN stack)

**Developers:**
Jenny / Jiani Fan, Jaehyuk Lee, Phil Zheng

## Key features:
Musical component
Interactive splash tutorial page
Accessible create element in nav
Elegant snippet index/ show page
Front-end relational database queries on top of noSQL 
AWS S3 image hosting

## Musical Component
![](demo/museic_piano.png)

## Interactive Splash
![](demo/museic_splash.gif)
Our splash page walks new users through a curated journey from intro to creating an account. 
The steps are as followed:
Captivating animated name, and description of app.
Demonstration of what you can make on the app.
Having users create their own snippet, while learning how to use the musical component.
Asking for users to make an account with the incentive of saving their snippet.
The developers credit area.

## Accessible Create
![](demo/museic_music.gif)
We designed our app to have little between the user and the “create page”, by putting the create element in the navbar.
The nav is on every “page” when users are logged in.
Users don’t have to leave their current page to make a snippet.
A secondary route to the “create pate” is in the dropdown.

## Elegant Index/Show Page
![](demo/museic_index.gif)
The index and show have been elegantly combined into one page for a seamless user experience.
This layout allows users to quickly browse through snippets without having to worry about changing pages.
The limited information per snippet lends itself to a simpler design.
The look is unique and sleek.

## Front-end Relational Lookups and Search
![](demo/museic_search.gif)

Database retrieval

The MongoDB database is a NoSQL program that operates without relational queries. As our application requires significant cross data type querying, I designed data retrieval to import all data from the backend to be processed on the frontend. Data is categorized and formatted to achieve the most efficiency, using hash objects at the higher levels to store array data types for easy iteration. This method integrates the speed of a NoSQL database with the usefulness of relational data queries, resulting in quick and responsive data processing. 

AWS Image Hosting and Users
![](demo/museic_user_page.gif)

All images are hosted on Amazon Web Services (AWS). AWS integration was made through Multer S3, the streaming multer storage engine for AWS S3. The storage was facilitated using the express.js framework and Amazon’s SDK for AWS. 

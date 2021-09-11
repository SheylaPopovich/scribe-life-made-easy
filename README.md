# <p align="center">Scribe Life Made Easy</p> <p align="center">Note Taker</p>

<p align="center">
<a href="#description">Description</a> |
<a href="#projectm demo">Project Demo</a> |
<a href="#installation">Installation</a> |
<a href="#usage">Usage</a> |
<a href="#contact">Contact</a> |
<a href="#license">License</a>
</p>
<br>

## **Description**
The days of taking pen to paper is nearly extinct. It's all about working smarter not hard and having things instantly at your fingertips. This is a note taking application was made with just that in mind. This product delivers a simplified way for a user to input notes, save for trackiung purposes, and a delete option once the note has been completed. The purpose of this application is for users that need help with keeping track of day to day tasks. Using the "Note Taker" will allow the user to have well written information available whenever needed.    


<br>
<br>

## **Project Demo** 
This [demo video](https://github.com/SheylaPopovich/Team_Profile_Generator/blob/main/assets/team_profile_generator_demo.gif) will walk you through the application and its functionality:.
![alt text](https://github.com/SheylaPopovich/scribe-life-made-easy/blob/main/Assets/note-taker-landingpage.png)
![alt text](https://github.com/SheylaPopovich/scribe-life-made-easy/blob/main/Assets/note-taker-savedpage.png)
<br>
<br>

## **Installation** 
The dependency used for this project was [Inquirer](https://www.npmjs.com/package/inquirer). <br>
To install Inquirer use the command below in your terminal:
```
> npm i inquirer
```
<br>

## **Usage**
To run the Team Profile Generator, follow these steps: <br>
Download the [Node.js](https://nodejs.org/en/download/) source code or a pre-built installer for your platform, and start developing.

* [jQuery](https://api.jquery.com/) - Used to write server side script that executes the funcitons that prompts the user and generates the html file.
* [HTML](https://www.w3schools.com/html/) - Used to dynamically populate the style and structure of the user profile once the command line applicaton is run.
* [CSS](https://www.w3schools.com/css/) - Styles html elements in rendered HTML page. 
* [Bulma](https://bulma.io/) -  Framework to build responsive web for HTML. 
<br>
<br>

## **Contact**
If you want to contact me you can email me at [SheylaPopovich](mailto:sheylapopovich@gmail.com).
<br>
<br>

## **License**
The README Generator content management system is released under the under terms of the [MIT License.](https://github.com/SheylaPopovich/README-generator/blob/main/LICENSE)
<br>Copyright (c) 2021 [Sheyla Popovich](https://github.com/SheylaPopovich)
<br>





## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```


## Mock-Up

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)


## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).





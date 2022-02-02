# note-taker2022
an app to create store and delete notes
User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
Acceptance Criteria
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
Mock-Up
The following images show the web application's appearance and functionality:

Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.

Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.

Getting Started
The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

The following HTML routes should be created:

GET /notes should return the notes.html file.

GET * should return the index.html file.

The following API routes should be created:

GET /api/notes should read the db.json file and return all saved notes as JSON.

POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

Screenshot of Note Blank
![Screenshot (89)](https://user-images.githubusercontent.com/12145520/152090898-f1948f3c-d80c-48d9-bd5f-f9d2c6c32819.png)

![Screenshot (91)](https://user-images.githubusercontent.com/12145520/152091032-359e587c-744f-4e4b-9feb-97957e9ea23b.png)

![Screenshot (91)](https://user-images.githubusercontent.com/12145520/152091055-684f5038-331b-4bd6-bae7-04a7665fadf2.png)

# FriendFinder
## Application Description
_An "date site" like application that uses express to create an application that allows users to enter survey information and returns a "match" from an internal array of objects_

## Application Organization
The application is organized with separate js files defined for each perspective:
* __friends.js__ - Holds array of friend objects.
* __apiRoutes.js__ - Handles the app requests that take in and reurn json structures.
* __htmlRoutes.js__ - Handles the app requests that take in resource path and return reference to html page.
* __server.js__ - Handles express configurations and server settings.
* __home.html__ - Handles dispaly for home page.
* __survey.html__ - Handles dispaly for input form and modal revealing match result

## Running the Application
https://thawing-eyrie-74251.herokuapp.com

__home.html__

* Click button to find a "BFF"
* Link privided that will return the raw json of the friends array
* Link provided that references the gitHub repository

__survey.html__

* Add Name (required)
* Add link to a photo (required)
* Answer the 10 survey questions set on a scale of 1 - 5.  Leaving blank defaults the value to 0.
* Click button to find a BFF match.  A modal appears with the name and photo of the closest match.
* Link privided that will return the raw json of the friends array
* Link provided that references the gitHub repository

## Technology
This application was written in JavaScript on NodeJs using Express. 

__NPM Installs__
* express: ^4.17.1
* path: ^0.12.7

## Development Role
Application designed and developed by Sean Bryan as part of a homework assignment for the UNH Full Stack Boot Camp.

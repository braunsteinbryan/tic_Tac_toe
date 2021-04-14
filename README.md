
# Tic Tac Toe - client

[![Website braunsteinbryan.github.io/game-project-client](https://img.shields.io/website-up-down-green-red/https/perso.crans.org.svg)](https://braunsteinbryan.github.io/game-project-client/) [![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://github.com/braunsteinbryan/game-project-client/blob/master/LICENSE) [![javascript](https://badgen.net/badge/javascript/ES6/blue)]()
[![npm](https://badgen.net/badge/npm/v6.14.12/pink?icon=)]()

 Simple game client created with Javascript. Must use a login to play ***PLEASE*** ensure it is not a real password!<br>

<img src="https://i.imgur.com/tUxTtgO.png" alt="tic tac toe">

 #### [Click to Play!](https://braunsteinbryan.github.io/game-project-client/) 
 <br />
 

## Table of Contents

* [General Info](#general-info)
* [Technologies](#technologies)
* [API](#api)
* [Diagrams](#diagrams)
* [User Stories](#user-stories)
* [Unsolved Problems](#unsolved-problems)
* [Images](#images)
## General Info 

Used Javascript, JQuery to manipulate the DOM, AJAX for the API calls.
## Technologies

Project is created with: 

* HTML5
* Javascript
* node-sass 4.14.1
* Bootstrap 4.1.2
* jQuery 3.3.1
## API

A Tic Tac Toe data store API. The production and development api's are hosted using Heroku at these links:<br /> 
production: 'https://tic-tac-toe-api-production.herokuapp.com',<br />
development: 'https://tic-tac-toe-api-development.herokuapp.com'

## Diagrams

___RESTful Routes___

<img src="https://i.imgur.com/AC9BoZD.png" alt="RESTful Routes">

Shown here, JWT are being used to verify the identity of the user. 

As long as the token is provided, the server can now respond with secure data.

The list of authenticating actions includes sign up, sign in, change password, and sign out.

## User Stories

- As a user, I want to sign up, so that I can have an account to log into.
- As a user, I want to sign out, so that I can keep my account secure.
- As a user, I want the ability to change my password, so that I have more
security.
- As a user, I want to create a new game, so that I can play a new tic tac toe
game.
- As a user, I want to be able to see the unfinished game boards, so that I can finish them.
- As a user, I want to be alerted when I have won/loss, so that I will know when
the game is over.

## Unsolved Problems

* Show unfinished game boards, giving the option to finish games
* Have AI to play against

## Images

* [WireFrame](https://ibb.co/NLQF1vs)

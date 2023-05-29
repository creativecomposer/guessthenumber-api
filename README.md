# Guess the number game host service

This service implements an authenticated REST API for registered players to play the game
"Guess the Number".

## How to run the service in local machine

```
cd src
npm i
npm run dev
```

The service will listen on port 3500.

## How to run the tests

```
cd src
npm t
```

## Implementation notes

1. I wrote only very few unit tests just to show my approach to testing. For a production app,
   I typically write exhaustive positive and negative unit tests.

2. I decided to use hard coded username and password to keep the scope limited. For a production
   authtentication implementation, I would use a provider like Auth0 and not write my own
   authentication solution.

3. At the moment, the games are not tied to a user. When multiple users can register and play
   the game, then it would make sense to relate games to users, so that users can modify only
   the games that they started.

4. This app is by no means production ready. From testing to configuration lot of work needs
   to be done before it should be considered ready for production.

## App description

Create two web services using JavaScript/TypeScript tech stack:

The two services will play the game “Guess the Number”.

The first service, the game host, will expose an authenticated REST API, where the other service, the player, can initiate and play the game:

· On initiation, the game host assigns a unique identifier and a random number between 1 and 10000 to the game and returns the identifier to the client service.

· In the subsequent steps, the player service sends the identifier and its guess to the game host service, where it receives a response whether that number is equal, smaller, or larger than the one the game host thought of.

· When the number was successfully guessed, the instance of the game is considered finished. The respective data can eventually be cleaned up.

Only registered players can play the game, so all API endpoints of the game host service have to be protected with some kind of authentication.  
The implementation choices are left open to the developer on purpose. The goal is for you to present your solution during the technical interview. From there, this will be a starting point for further technical discussions, some of the choices you made, why, what other options are possible, the tradeoffs, etc.

The solution should be hosted in Microsoft Azure Cloud using the free subscription and the Azure components of your choice.

A frontend interface should be built for the player to initiate and play the game.

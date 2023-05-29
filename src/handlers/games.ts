import { Request, Response } from "express";
import { nanoid } from "nanoid";
import { Game } from "../types";
import { getRandomInt } from "../modules/random";

const games: Game[] = [];

export const startGame = async function (req: Request, res: Response) {
  return new Promise(function (resolve) {
    const newGame: Game = {
      id: nanoid(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
      guessCount: 0,
      status: "init",
      target: getRandomInt(),
    };
    games.push(newGame);

    res.status(201).json({ id: newGame.id, status: newGame.status });
    resolve(201);
  });
};

export const putGuess = async function (req: Request, res: Response) {
  return new Promise(function (resolve) {
    const gameId = req.params.id;
    const { guess } = req.body;

    const game = games.find((item: Game) => item.id === gameId);

    if (game === undefined) {
      res.status(400).json({ error: "Invalid game id" });
      resolve(400);
      return;
    }

    if (game.status === "correct") {
      res.status(400).json({ error: "Game is already over" });
      resolve(400);
      return;
    }

    const { target } = game;

    if (guess > target) {
      game.status = "high";
    } else if (guess < target) {
      game.status = "low";
    } else {
      game.status = "correct";
    }

    game.guessCount++;
    game.updatedAt = Date.now();

    res.json({ guessCount: game.guessCount, status: game.status });
    resolve(200);
  });
};

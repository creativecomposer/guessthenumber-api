import { Request } from "express";

export type User = {
  id?: string;
  username: string;
  name: string;
  password?: string;
  createdAt?: Date;
};

export type RequestWithUser = Request & { user?: User };

export type GameStatus = "init" | "high" | "low" | "correct";

export type Game = {
  id: string;
  target: number;
  guessCount: number;
  status: GameStatus;
  createdAt: number;
  updatedAt: number;
};

import { Request, Response } from "express";
import { putGuess, startGame } from "./games";

describe("Game handler", function () {
  it("should start the game", async function () {
    const request = {
      body: {},
    };
    let result: any = { error: "" };
    const response = {
      json: function (res) {
        result = res;
      },
      status: function () {
        return response;
      },
    };

    await startGame(request as Request, response as unknown as Response);

    expect(result.id).not.toBeNull();
    expect(result.status).toBe("init");
  });

  it("should return 400 if guess is sent with invalid game id", async function () {
    const request = {
      body: { guess: 5000 },
      params: { id: "doesnotexist" },
    };
    let result: any = { error: "" };
    let statusCode: number = 0;
    const response = {
      json: function (res) {
        result = res;
      },
      status: function (num) {
        statusCode = num;
        return response;
      },
    };

    await putGuess(request as unknown as Request, response as Response);

    expect(statusCode).toBe(400);
  });
});

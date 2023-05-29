"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("../handlers/auth");
var middleware_1 = require("../middleware");
var express_validator_1 = require("express-validator");
var games_1 = require("../handlers/games");
var router = (0, express_1.Router)();
router.post("/signup", middleware_1.checkContentType, (0, express_validator_1.body)("username").trim().isEmail(), (0, express_validator_1.body)("password").trim().notEmpty(), middleware_1.handleInputErrors, auth_1.signupUser);
router.post("/login", middleware_1.checkContentType, (0, express_validator_1.body)("username").trim().isEmail(), (0, express_validator_1.body)("password").trim().notEmpty(), middleware_1.handleInputErrors, auth_1.loginUser);
router.post("/games", middleware_1.checkContentType, middleware_1.checkAuthn, games_1.startGame);
router.put("/games/:id", middleware_1.checkContentType, middleware_1.checkAuthn, (0, express_validator_1.body)("guess").custom(function (value) { return Number.isInteger(value); }), games_1.putGuess);
exports.default = router;
//# sourceMappingURL=index.js.map
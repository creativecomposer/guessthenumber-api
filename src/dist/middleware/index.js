"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuthn = exports.handleInputErrors = exports.checkContentType = void 0;
var express_validator_1 = require("express-validator");
var auth_1 = require("../modules/auth");
var checkContentType = function (req, res, next) {
    if (req.is("application/json")) {
        next();
    }
    else {
        res.status(400).json({ error: "Content-Type is not application/json" });
    }
};
exports.checkContentType = checkContentType;
var handleInputErrors = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400);
        res.json({ errors: errors.array() });
    }
    else {
        next();
    }
};
exports.handleInputErrors = handleInputErrors;
var checkAuthn = function (req, res, next) {
    var bearer = req.headers.authorization;
    if (!bearer) {
        res.status(401);
        res.json({ message: "Unauthorized request" });
        return;
    }
    var _a = bearer.split(" "), token = _a[1];
    if (!token) {
        res.status(401);
        res.json({ message: "Invalid token" });
        return;
    }
    var user = (0, auth_1.verifyJWT)(token);
    if (user === null) {
        res.status(401);
        res.json({ message: "Invalid token" });
        return;
    }
    req.user = user;
    next();
};
exports.checkAuthn = checkAuthn;
//# sourceMappingURL=index.js.map
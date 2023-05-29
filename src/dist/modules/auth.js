"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJWT = exports.createJWT = exports.comparePasswords = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var comparePasswords = function (password, hash) {
    return bcrypt_1.default.compare(password, hash);
};
exports.comparePasswords = comparePasswords;
var createJWT = function (username) {
    return jsonwebtoken_1.default.sign({
        username: username,
    }, process.env.JWT_SECRET, { expiresIn: "1h" });
};
exports.createJWT = createJWT;
var verifyJWT = function (token) {
    try {
        return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    }
    catch (e) {
        console.error(e);
    }
    return null;
};
exports.verifyJWT = verifyJWT;
//# sourceMappingURL=auth.js.map
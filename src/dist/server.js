"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.JWT_SECRET = process.env.JWT_SECRET || "ssshhhhhh";
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get("/", function (_, res) {
    res.status(200);
    res.json({ message: "Call one of the endpoints under /api/v1" });
});
app.use("/api/v1", routes_1.default);
if (process.env.NODE_ENV === "development") {
    app.listen(process.env.PORT || "3500", function () {
        console.log("Server started");
    });
}
else {
    // At production mode, do not start server here. The script at ./bin/www will run prod server
    console.log("Node environment is ".concat(process.env.NODE_ENV));
}
exports.default = app;
//# sourceMappingURL=server.js.map
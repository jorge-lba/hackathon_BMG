"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var UserController_1 = __importDefault(require("./controllers/UserController"));
var routes = express_1.default.Router();
routes.get('/', UserController_1.default.list);
routes.post('/users', UserController_1.default.create);
routes.put('/users/:user', UserController_1.default.index);
routes.post('/users', UserController_1.default.addObjective);
routes.post('/users/goals', UserController_1.default.addGoal);
exports.default = routes;

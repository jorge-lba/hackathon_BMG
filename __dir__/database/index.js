"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lowdb = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
// .. other code here ..
// Create the database instance..
var dbfile = "bank.json";
var adapter = new FileSync(dbfile);
var database = lowdb(adapter);
database.defaults({
    user: [],
}).write();
var User = /** @class */ (function () {
    function User(name, agency, accouny) {
        this.name = name;
        this.agency = agency;
        this.accouny = accouny;
        this.database = database;
    }
    User.prototype.listAll = function () {
        return this.database.get('user').value();
    };
    User.prototype.openAccount = function () {
        this.database.get('user').push({
            name: this.name,
            agency: '0001',
            account: '12345-67',
            type: 'c/c',
            available_limit: 0,
            investment: 0,
            objective: []
        }).write();
        return this.database.get('user').find({ name: this.name }).value();
    };
    User.prototype.getAccount = function () {
        return this.database.get('user').find({ name: this.name }).value();
    };
    User.prototype.addObjective = function (objective) {
        var data = this.database.get('user').find({ name: this.name });
        var response = data.value();
        response.objective.push(objective);
        data.assign(response).write();
        return this.database.get('user').find({ name: this.name }).value();
    };
    User.prototype.addGoal = function (goal, objective) {
        var data = this.database.get('user').find({ name: this.name });
        var response = data.value();
        var index = 0;
        var object = response.objective.filter(function (item, i) {
            if (item.name === objective) {
                index = i;
                return true;
            }
        });
        if (object)
            response.objective[index].goals.push(goal);
        data.assign(response).write();
        return this.database.get('user').find({ name: this.name }).value();
    };
    return User;
}());
exports.default = User;
// const run = () => {
//     const user = new User('Jorge')
//     console.log(user.addObjective({
//         name:'CNH',
//         type:'Documento',
//         totalAmount:2000,
//         startDate: Date(),
//         endDate: Date(),
//         goals:[],
//     }))
// }
// run()

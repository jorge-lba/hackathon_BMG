import lowdb = require("lowdb");
import FileSync = require("lowdb/adapters/FileSync");

// .. other code here ..

// Create the database instance..
const dbfile = "bank.json";
const adapter = new FileSync(dbfile);

const database = lowdb(adapter);

database.defaults({
    user: [],
  }).write()

type TypeGoal = {
    date:string
    amount:number
}

type TypeObjective = {
    name:string
    type:string
    totalAmount:number
    startDate:string
    endDate:string
    goals:TypeGoal[]
}

type TypeUser = {
    name:string
    agency:string
    type:string  
    account:string
    available_limit:number
    investment:number
    objective:TypeObjective[] | []
}

export default class User{

    private database:any = database

    constructor(
        private name:string,
        private agency?:string,
        private accouny?:string
    ){
        
    }

    public listAll(){
        return this.database.get('user').value()
    }

    public openAccount(){
        this.database.get('user').push({
            name:this.name,
            agency:'0001',
            account:'12345-67',
            type:'c/c',  
            available_limit:0,
            investment:0,
            objective:[] 
       }).write()
       return this.database.get('user').find({name:this.name}).value()
    }

    public getAccount(){
        return this.database.get('user').find({name:this.name}).value()
    }

    public addObjective(objective:TypeObjective){
        const data = this.database.get('user').find({name:this.name})
        const response = data.value()
        response.objective.push(objective)
        
        data.assign(response).write()
        
        return this.database.get('user').find({name:this.name}).value()
    }

    public addGoal(goal:TypeGoal){
        const data = this.database.get('user').find({name:this.name})
        const response = data.value()
        response.objective.goals.push(goal)
        
        data.assign(response).write()
        
        return this.database.get('user').find({name:this.name}).value()
    }


    
}

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
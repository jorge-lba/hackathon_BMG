import {Request, Response} from 'express'
import User from '../database/index'

export default {
    async list( request:Request, response:Response ){
        return response.json({
            message:'Busca efetuada com sucesso.',
            response: new User("user").listAll()
        })
    },   

    async index(request:Request, response:Response){
        const user = request.params.user

        return response.json({
            message:'Contas abertas no sistema.',
            response: new User(user).getAccount()
        })
    },

    async create( request:Request, response:Response ){
        const user = request.body.user

        const account = new User(user)
        const result:any = account.openAccount()

        return response.json({
            message:"Parabens, você acabou de abrir uma conta no meu_BMG",
            response: result
        })
    },

    async addObjective(request:Request, response:Response){
        const {
            user,
            name,
            type,
            totalAmount,
            endDate,
        } = request.body

        const account = new User(user)
 
        account.addObjective({
            name,
            type,
            totalAmount,
            startDate: Date(),
            endDate,
            goals:[]
        })

        return response.json({
            message:'Objetivo adcionado com sucesso.',
            response: account.getAccount()
        })
    },

    async addGoal(request:Request, response:Response){
        const { user,objective, amount } = request.body

        const account = new User(user)
 
        account.addGoal({
            date: Date(),
            amount
        }, objective)

        return response.json({
            message:`Valor de R$${amount} adcionado com sucesso.`,
            response: account.getAccount()
        })
    },
}
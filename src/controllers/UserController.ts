import {Request, Response} from 'express'
import User from '../database/index'

export default {
    async list( request:Request, response:Response ){
        const user = request.params.user

        return response.json({
            message:'Busca efetuada com sucesso.',
            response: new User(user).getAccount()
        })
    },   

    async index(request:Request, response:Response){
        const user = request.params.user

        return response.json({
            message:'Contas abertas no sistema.',
            response: new User(user).listAll()
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
        } = request.body.name

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
            message:'Busca efetuada com sucesso.',
            response: account.getAccount()
        })
    }
}
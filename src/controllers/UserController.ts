import {Request, Response} from 'express'
import User from '../database/index'

export default {
    async list( request:Request, response:Response ){
        const name = request.params.name

        return response.json({
            message:'Busca efetuada com sucesso.',
            response: new User(name).getAccount()
        })
    },   

    async index(request:Request, response:Response){
        return response.json({
            message:'Contas abertas no sistema.',
            response: new User('All').listAll()
        })
    },

    async create( request:Request, response:Response ){
        const name = request.body.name

        const user = new User(name)
        const result:any = user.openAccount()

        return response.json({
            message:"Parabens, você acabou de abrir uma conta no meu_BMG",
            response: result
        })
    }
}
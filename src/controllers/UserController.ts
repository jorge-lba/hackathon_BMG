import {Request, Response} from 'express'
import User from '../database/index'
import { create } from 'domain'

export default {
    async index( request:Request, response:Response ){
        return response.json({
            message:'Olá !!'
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
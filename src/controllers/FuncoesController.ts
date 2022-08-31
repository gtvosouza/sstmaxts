import {Request, Response} from "express";
import Funcoes from "../schemas/Funcoes";

class FuncoesController {
    public async index(req: Request, res: Response) : Promise<Response> {
        const funcoes = await Funcoes.find();
        
        return res.json(funcoes);
    }

    public async createUpdateFuncaoAsync (req: Request, res: Response) : Promise<Response> {
        
        try {
            if (req.body._id == undefined) {
                const funcaoCreated = await Funcoes.create(req.body);

                return res.json(funcaoCreated);
            } else {
                const updateDoc = {$set: { ...req.body   }}
         
                const funcaoUpdated = await Funcoes.updateOne({_id: req.body._id}, 
                                                                 updateDoc,
                                                                { upsert: false });        
                
                return res.json(funcaoUpdated);   
            }                             

        } catch(e) 
        {
            return res.status(400).send({ error: e});
        }
              
    }
}

export const funcoesController = new FuncoesController();
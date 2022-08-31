import {Request, Response} from "express";
import TipoExame from "../schemas/TipoExame";

class TipoExameController {
    public async index(req: Request, res: Response) : Promise<Response> {
        const funcoes = await TipoExame.find();
        
        return res.json(funcoes);
    }

    public async createUpdateTipoExameAsync (req: Request, res: Response) : Promise<Response> {
        
        try {
            if (req.body._id == undefined) {
                const funcaoCreated = await TipoExame.create(req.body);

                return res.json(funcaoCreated);
            } else {
                const updateDoc = {$set: { ...req.body   }}
         
                const funcaoUpdated = await TipoExame.updateOne({_id: req.body._id}, 
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

export const tipoExameController = new TipoExameController();
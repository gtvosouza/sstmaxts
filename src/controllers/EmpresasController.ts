import {Request, Response} from "express";
import { objectSet }  from "../utils";
import Empresas from "../schemas/Empresas";
import Funcoes from "../schemas/Funcoes";

class EmpresaController {
    public async index(req: Request, res: Response) : Promise<Response> {
        const empresas = await Empresas.find();
        
        return res.json(empresas);
    }

    public async createUpdateEmpresaAsync (req: Request, res: Response) : Promise<Response> {
        
        try {
            if (req.body._id == undefined) {
                const empresaCreated = await Empresas.create(req.body);

                return res.json(empresaCreated);
            } else {
                const updateDoc = {$set: { ...req.body   }}
         
                const empresaUpdated = await Empresas.updateOne({_id: req.body._id}, 
                                                                 updateDoc,
                                                                { upsert: false });        
                
                return res.json(empresaUpdated);   
            }                             

        } catch(e) 
        {
            return res.status(400).send({ error: e});
        }
              
    }
     
    public async createOrUpdateAmbienteAsync (req: Request, res: Response) : Promise<Response> {
        const id =  req.params.idEmpresa;
        let find = {};
        let setPush = {};

        if (req.body._id != undefined) {
            setPush = {$set: objectSet(req.body, "ambientes")}     
            find = { _id: id, "ambientes._id":  req.body._id};            
        } else {
            setPush = {$push: {ambientes : {...req.body}}}     
            find = { _id: id };      
        }
        
        try {
            const result = await Empresas.updateOne(find, setPush);

            return res.json({message: `Total de ${result.modifiedCount} registro(s) atualizado(s)`});       
        } catch(e) 
        {
            return res.status(400).send({ error: e});
        }
    }

    public async createOrUpdateFuncaoAsync (req: Request, res: Response) : Promise<Response> {
        const id =  req.params.idEmpresa;
        let find = {};
        let setPush = {};
        
        if (req.body.funcao == undefined) {
            return res.status(406).send(JSON.stringify({ error: 'Parametro "funcao" obrigatório.'}));
        }

        const funcao = await Funcoes.findById(req.body.funcao);
        
        if (funcao == undefined) {
            return res.status(406).send(JSON.stringify({ error: '"Funcao" não encontrada.'}));
        }

        let objFuncao = {...req.body, nome: funcao.nomeFuncao};

        if (req.body.ambiente != undefined) {
            const ambienteEmpresas = await Empresas.findOne({_id: id},{ambientes : {$elemMatch: {_id:  req.body.ambiente}} }, {_id: 0, ambientes: 1});

            if (ambienteEmpresas?.ambientes.length === 0) {
                return res.status(406).send(JSON.stringify({ error: 'Ambiente da Empresa inexistente.'}));
            } 
            
            objFuncao = { ...objFuncao, setor: ambienteEmpresas?.ambientes[0].nome  }
        }

        console.log(objFuncao)

        if (req.body._id != undefined) {
            setPush = {$set: objectSet(objFuncao, "funcoes") }    
            
            find = { _id: id, "funcoes._id":  req.body._id};            
        } else {
            setPush = {$push: {funcoes : {...objFuncao}}}     
            find = { _id: id };      
        }
        
        const result = await Empresas.updateOne(find, setPush);

        return res.json({message: `Total de ${result.modifiedCount} registro(s) atualizado(s)`});       
    }
    
    public async createOrUpdateFuncionarioAsync (req: Request, res: Response) : Promise<Response> {
        const id =  req.params.idEmpresa;
        let find = {};
        let setPush = {};
        
        if (req.body.funcaoEmpresa == undefined && req.body._id == undefined) {
            return res.status(406).send(JSON.stringify({ error: 'Parametro "Funcao Empresa" obrigatório.'}));
        }

        let funcionariosFuncao = {};
        if (req.body.funcaoEmpresa != undefined) {
            const funcoesEmpresas = await Empresas.findOne({_id: id},{funcoes : {$elemMatch: {_id:  req.body.funcaoEmpresa}} }, {_id: 0, funcoes: 1});

            if (funcoesEmpresas?.funcoes.length === 0) {
                return res.status(406).send(JSON.stringify({ error: 'Função da Empresa inexistente.'}));
            } 
            
            funcionariosFuncao = { nome: funcoesEmpresas?.funcoes[0].nome, setor: funcoesEmpresas?.funcoes[0].setor,funcao: funcoesEmpresas?.funcoes[0].funcao,  atividades: funcoesEmpresas?.funcoes[0].atividades, dataInicial: req.body.dataAdmissao  }
        }

        if (req.body._id != undefined) {
            setPush = {$set: objectSet(req.body, "funcionarios")}   

            find = { _id: id, "funcionarios._id":  req.body._id};            
        } else {
            setPush = {$push: {funcionarios : {...req.body, funcoes:[funcionariosFuncao]}}}     
            find = { _id: id };      
        }
        
        try {
            const result = await Empresas.updateOne(find, setPush);

            return res.json({message: `Total de ${result.modifiedCount} registro(s) atualizado(s)`});     
        } catch(e) 
        {
            return res.status(400).send({ error: e});
        }
    }
}

export const empresaController = new EmpresaController();   
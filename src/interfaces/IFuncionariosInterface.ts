import { Document, ObjectId } from "mongoose";

interface IFuncionariosFuncoesInterface extends Document{
    funcao: ObjectId,
    nome_funcao: String,
    setor: String,
    atividades: String,
    dataInicial: Date,
    dataFinal: Date,
}

export interface IFuncionariosInterface extends Document{
    nomeFuncionario: String,
    dataNascimento: Date,
    sexo? : String, 
    funcaoEmpresa? : String,
    dataAdmissao : String,
    dataDemissao? : String,
    setor? : String,
    matriculaESocial? : String,
    rg? : String,
    cpf? : String,
    nit? : String,
    ctps_serie? : String,
    ctps_numero? : String,
    ctps_uf? : String,
    funcoes: Array<IFuncionariosFuncoesInterface>
}
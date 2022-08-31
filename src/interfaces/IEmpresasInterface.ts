import { Document, ObjectId } from "mongoose";
import {IAmbienteInterface} from "./IAmbientesInterface";
import {IFuncionariosInterface} from "./IFuncionariosInterface";

interface IFuncaoExames extends Document {
    exame: String,
    nomeExame : String,
    periodicidade : Number
}

interface IFuncaoEmpresa extends Document {    
    funcao: String,
    nome: String,
    setor: String,
    cbo?: String,
    atividades?: String,
    ferramentas?: String,
    insalubridade : String,
    periculosidade : String, 
    ativo?: Boolean,
    exames: Array<IFuncaoExames> 
}

export interface IEmpresaInterface extends Document {
    nomeEmpresa : String, 
    tipoEmpresa: String,
    cnpj: String,
    nomeFantasia: String,
    inscricaoEstadual? : String,
    grauRisco?: Number,
    cnae?: String,
    ramoAtividade?: String,
    telefones?: String,
    nomeResponsavel?: String,
    cpfResponsavel?: String,
    cidade? : String,
    uf? : String,
    codCidade? : String,
    cep?: String,
    logradouro?: String,
    numero?: String,
    bairro?: String,
    complemento?: String,
    observacao?: String,
    enviarEScoail: Boolean,
    tipoEnvioESocial? : String,
    cipa? : String,
    sesmt?: String,

    funcoes: Array<IFuncaoEmpresa>,
    ambientes: Array<IAmbienteInterface>
}
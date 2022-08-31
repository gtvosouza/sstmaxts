import { Schema, model, Types} from "mongoose";
import { IEmpresaInterface } from "../interfaces/IEmpresasInterface";

const EmpresaSchema = new Schema({       
    nomeEmpresa: {
        type: String,
        required: true,
    },
    tipoEmpresa: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        required: true,
    },
    nomeFantasia: {
        type: String,
    },
    inscricaoEstadual: {
        type: String,
    },
    grauRisco: {
        type: Number,
    },
    cnae: {
        type: String,
    },
    ramoAtividade: {
        type: String,
    },
    telefones: {
        type: String,
    },
    nomeResponsavel: {
        type: String,
    },
    cpfResponsavel: {
        type: String,
    },
    cidade: {
        type: String,
    },
    uf: {
        type: String,
    },
    codCidade: {
        type: String,
    },
    cep: {
        type: String,
    },
    cidlogradouroade: {
        type: String,
    },
    numero: {
        type: String,
    },
    bairro: {
        type: String,
    },
    complemento: {
        type: String,
    },
    observacao: {
        type: String,
    },
    enviarEScoail: {
        type: Boolean,
    },
    tipoEnvioESocial: {
        type: String,
    },
    cipa: {
        type: String,
    },
    sesmt: {
        type: String,
    },
    ambientes : [
        {
            sequencia: {type: Number},
            nome : {type: String},
            validadeInicial : {type: Date},
            validadeFinal : {type: Date},
            tipoInscricao : {type: Number},
            numeroInscricao : {type: String},
            detalhamentoAmbiente : {type: String},
        }
    ],
    funcoes : [
        {
            funcao: {
                type: Types.ObjectId,
                ref: 'funcoes',
                require: true
            },
            nome: {type: String},
            setor: {type: String},
            cbo: {type: String},
            ambiente : {type: Types.ObjectId,  ref: 'empresas.ambientes',},        
            atividades : {type: String},
            ferramentasUtilizadas : {type: String},
            insalubridade : {type: String},
            periculosidade : {type: String}, 
            ativo: {type: Boolean}   
        }    
    ],
    funcionarios : [
        {
            nome: {
                type: String,
                required: true,
            },
            dataNascimento: {
                type: Date,
                required: true,
            },
            sexo: {
                type: String,
            },
            funcaoEmpresa: {
                type: Types.ObjectId,  
                ref: 'empresas.funcoes',
                require: true
            },      
            dataAdmissao: {
                type: Date,
            },
            dataDemissao: {
                type: Date,
            },
            setor: {
                type: String,
            },
            matriculaESocial: {
                type: String,
            },    
            rg: {
                type: String,
            },
            cpf: {
                type: String,
            },
            nit: {
                type: String,
            },
            ctps_serie: {
                type: String,
            },
            ctps_numero: {
                type: String,
            },
            ctps_uf: {
                type: String,
            },
            funcoes:  [
                {
                    funcao: {
                        type: Types.ObjectId,
                        ref: 'funcoes',
                        require: true
                    },                    
                    nome: {
                        type: String,
                        required: true,
                    },
                    setor: {
                        type: String,
                        required: true,
                    },
                    atividades: {
                        type: String,
                        required: true,
                    },
                    dataInicial: {
                        type: Date,
                        required: true,
                    },
                    dataFinal: {
                        type: Date,
                    },
                    exames: [
                        {
                            exame: {
                                type: Types.ObjectId,
                                ref: 'exames',
                                require: true
                            },
                            tipoExame: {
                                type: Types.ObjectId,
                                ref: 'TiposExame',
                                require: true
                            },
                            nomeExame: {type: String},
                            periodicidade: {type: String}, 
                        }
                    ]
                }
            ]
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now,
        select: false,
    }
})

export default model<IEmpresaInterface>('Empresas', EmpresaSchema) 
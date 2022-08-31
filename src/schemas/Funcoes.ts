import { Schema, model} from "mongoose";
import { IFuncoesInterface } from "../interfaces/IFuncoesInterface";

const FuncoesSchema = new Schema({    
    nomeFuncao: {
        type: String,
        required: true,
    },
    cbo: {
        type: String,
        required: true,
    },
    atividades: {
        type: String,
    },
    ferramentas: {
        type: String,
    },

})

export default model<IFuncoesInterface>('Funcoes', FuncoesSchema)
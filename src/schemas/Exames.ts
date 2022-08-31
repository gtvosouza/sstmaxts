import { Schema, model} from "mongoose";
import { IExamesInterface } from "../interfaces/IExamesInterface";

const ExamesSchema = new Schema({    
    nome: {
        type: String,
        required: true,
    },
    periodicidade: {
        type: Number,
        required: true,
    },
    codigoProcedimento: {
        type: String,
    },
    valor: {
        type: Number,
    },
})

export default model<IExamesInterface>('Exames', ExamesSchema)
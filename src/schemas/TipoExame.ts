import { Schema, model} from "mongoose";
import { ITipoExameInterface } from "../interfaces/ITipoExameInterface";

const TipoExameSchema = new Schema({    
    descricao: {
        type: String,
        required: true,
    }, 

    tpAtestSocial: {
        type: Number,
    },    

    createdAt:{
        type: Date,
        default: Date.now,
        select: false,
    }
})

export default model<ITipoExameInterface>('TiposExame', TipoExameSchema)
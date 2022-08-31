import { Document } from "mongoose";

export interface ITipoExameInterface extends Document{
    descricao: String,
    tpAtestSocial: Number
}
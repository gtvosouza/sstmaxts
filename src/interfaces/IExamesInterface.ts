import { Document } from "mongoose";

export interface IExamesInterface extends Document{
    nome: String,
    periodicidade: Number,
    codigoProcedimento: String,
    valor: Number
}

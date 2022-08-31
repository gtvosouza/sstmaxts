import { Document, ObjectId } from "mongoose";

export interface IAmbienteInterface extends Document{
    sequencia: Number,
    nome: String,
    validadeInicial: Date,
    validadeFinal: Date,
    detalhamentoAmbiente : String,
    tipoInscricao: String,
    numeroInscricao: String
}
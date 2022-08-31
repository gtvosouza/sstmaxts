import { Document } from "mongoose";

export interface IFuncoesInterface extends Document{
    ambiente: String,
    nomeFuncao: String,
    cbo: String,
    atividades: String,
    ferramentas: String,
    insalubridade: String,
    periculosidade: String,
}
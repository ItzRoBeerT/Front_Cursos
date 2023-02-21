import { type } from "os";

export {};

declare global{


    type Curso = {
        _id: string;
        nombre: string;
        horas: number;
        nombreUsuario: string;
    }

    type Usuario = {
        _id: string;
        nombre: string;
        email: string;
        password: string;
    }
    type Compra ={
        _id: string;
        idCurso: string;
        idUsuario: string;
    }

    type TokenUsuario = {
        usuario: Usuario,
        token: string
    }

}
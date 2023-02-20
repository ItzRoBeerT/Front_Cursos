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

    type TokenUsuario = {
        usuario: Usuario,
        token: string
    }

}
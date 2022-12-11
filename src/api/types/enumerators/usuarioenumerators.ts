import { IEnumValue } from "./baseenumeratos";

export function enPerfilUsuario():Array<IEnumValue>{ 
    return [
        {
            id: 1,
            name: 'Medico',
            display: 'Médico'
        },
        {
            id: 2,
            name: 'Admin',
            display: 'Admin'
        },
        {
            id: 3,
            name: 'Diretor',
            display: 'Diretor'
        },
        {
            id: 4,
            name: 'CS',
            display: 'CS'
        },
        {
            id: 5,
            name: 'Reembolso',
            display: 'Reembolso'
        }
    ]
}  
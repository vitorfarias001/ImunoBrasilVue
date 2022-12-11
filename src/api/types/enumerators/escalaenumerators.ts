import { IEnumValue } from "./baseenumeratos";

export function enFrequenciaEscala():Array<IEnumValue>{ 
    return [
        {
            id: 0,
            name: 'Unica',
            display: 'Única'
        },
        {
            id: 1,
            name: 'Diaria',
            display: 'Diária'
        },
        {
            id: 2,
            name: 'Semanal',
            display: 'Semanal'
        },
        {
            id: 3,
            name: 'Quinzenal',
            display: 'Quinzenal'
        },
        {
            id: 4,
            name: 'Mensal',
            display: 'Mensal'
        }
    ]
}  
import { Action } from "routing-controllers";

export default async (action: Action, roles: string[]) => {
    // debes retornar verdadero o falso, o una promesa que se resuelva a verdadero o falso
    return roles.indexOf("NO") === -1; // si contiene "NO", entonces no lo autorizo
}
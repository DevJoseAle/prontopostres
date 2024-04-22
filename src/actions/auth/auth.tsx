

import { userData } from "../../../data/userData";
import { UserEntity } from "../../domain/entities/userEntities";
import type { AuthResp } from '../../infrastructure/interfaces/authResp';

//Mapear la respuesta, para tener la entidad de usuario y el token por separado
const returnUserAndToken = (data: AuthResp) => {

    const user: UserEntity = {
        id: data.id,
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        isActive: data.isActive}
    return {
        user,
        token: data.token
    }
}

//Funcion que devuelve un objeto con el usuario y el token
export const authLogin = ( email: string, password: string) =>{

    email = email.toLowerCase().trim();
    password = password.trim();

    try {
        const validUser = userData.find(user => user.email === email && user.password === password)
        if(!validUser) throw 'Credenciales inválidas';
        return returnUserAndToken(validUser)
    } catch (error) {
        console.log('Error: ',error)
        return null
    }

}
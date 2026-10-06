import { instanceUser } from "../utils/axios_config.ts";
import type { loginType, registerType } from "../types/userTypes.ts";







export async function registerApi(body: registerType) {
    console.log(body);
    
    const register = await instanceUser.post('/register', {
        email: body.email,
        password: body.password,
        role: body.role,
        username: body.username,
        assignedArena: body.assignedArena
    })

    return register.data

}
// console.log(await registerApi({password: '12345', username: ' js.kjs sj., ', email: 'test@gmail.com', role: 'arena_user', assignedArena: 'North'}));


export async function loginApi(body: loginType) {

    const login = await instanceUser.post('/login', {
        email: body.email,
        password: body.password

    })

    return login.data

}


export async function getUserApi(token: string) {

    const data = await instanceUser.get(`/me`, {
        headers: {
            authorization: `Bearer${token}`
        }
    })

    return data.data

}

export async function getAllUsersApi(token: string) {

    const data = await instanceUser.get(`/users`, {
        headers: {
            authorization: `Bearer${token}`
        }
    })

    return data.data

}

// console.log(await getAllUsersApi('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2YWM0YmUxZTIwZjJmN2U4OTU2ODM5MTAiLCJpYXQiOjE3OTEyODkzNjMsImV4cCI6MTc5MTM3NTc2M30.76qG-zo5LDB6hJGCjPqlMCnVNYgAVPoRYF1IYg2JfVo'));


export async function deleteUserApi(id: string) {

    const data = await instanceUser.delete(`/users/${id}`)

    return data.data

}
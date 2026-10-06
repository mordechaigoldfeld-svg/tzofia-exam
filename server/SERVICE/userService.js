import { deleteById, findByEmail, findById, insertUser } from "../DAL/usersDal.js";
import { createUserModel, returnUserWhithoutPass } from "../Models/userModels.js";
import { createError } from "../UTILS/createError.js";
import { hashPassGenerate, passwordVerify } from "../UTILS/password_config.js";
import { tokenGenerate } from "../UTILS/token_confi.js";


export async function loginService(body) {
    const { email, password } = body

    const exists = await findByEmail(email)
    if (!exists) throw createError(404, 'user not found');
    const validPass = await passwordVerify(password, exists.hashPass)
    if (!validPass) throw createError(401, 'invalid authentication, check your passwoard');
    const token = tokenGenerate(exists._id)
    return {
        token,
        user: { ...returnUserWhithoutPass(exists) }
    }
}



export async function registerUser(body) {
    const { email, password, role, username,assignedArena } = body
    const exists = await findByEmail(email)

    if (exists) throw createError(400, 'user alrredy exists');
    const hashPass = await hashPassGenerate(password)
    const user = {
        username,
        email,
        hashPass,
        role,
        assignedArena
    }


    await insertUser({ ...createUserModel(user) })
    return 'user successfuly created'
}


export async function getByIdService(id) {

    const user = await findById(id)
    if (!user) throw createError(404, 'user not found');
    return {...returnUserWhithoutPass(user)}

}


export async function deleteByIdService(id) {

    const user = await findById(id)
    if (!user) throw createError(404, 'user not found');
    await deleteById(id)
    return 'user succesfuly deleted'

}





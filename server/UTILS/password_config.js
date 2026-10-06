import bcrypt from 'bcrypt'




export async function hashPassGenerate(password) {

    return bcrypt.hash(password,10)
    
}

export async function passwordVerify(password,hashPassword) {

    return bcrypt.compare(password,hashPassword)
}
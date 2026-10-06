import { createUserSchema, loginSchema } from "../UTILS/userSchema.js"






export function validCreateFields(req, res, next) {

  
    
    const { username, email, password, role,assignedArena } = req.body
    
    
    const isValid = createUserSchema.safeParse({ username, email, password, role,assignedArena })
    console.log(isValid);
    
    if (isValid.success === false) {
        return res.status(422).json({success:false,message:isValid.error.issues[0]?.message})
    }

    next()
}

export function validLoginFields(req, res, next) {

    const { email, password } = req.body
    const isValid = loginSchema.safeParse({ email, password })
    if (isValid.success === false) {
        return res.status(422).json({success:false,message:isValid.error.issues[0]?.message})
    }
    next()
}
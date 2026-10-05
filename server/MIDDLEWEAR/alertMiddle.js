import { createAlertSchema, updateAlertSchema } from "../UTILS/alertSchemas.js";


export function validAlertCreateFields(req, res, next) {

    const isValid = createAlertSchema.safeParse(req.body);
    if (isValid.success === false) {
        return res.status(422).json({ success: false, message: isValid.error.issues[0]?.message })
    }
    next()
}

export function validAlertUpdateFields(req, res, next) {

    const isValid = updateAlertSchema.safeParse(req.body);
    console.log("status",isValid.success);
    
    if (isValid.success === false) {
        return res.status(422).json({ success: false, message: isValid.error.issues[0]?.message })
    }
    next()
}
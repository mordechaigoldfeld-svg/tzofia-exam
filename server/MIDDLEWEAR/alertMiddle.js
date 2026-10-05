import { createAlertSchema } from "../UTILS/alertSchemas.js";


export function validAlertCreateFields(req, res, next) {

    const isValid = createAlertSchema.safeParse(req.body);
    if (isValid.success === false) {
        return res.status(422).json({ success: false, message: isValid.error.issues[0]?.message })
    }
    next()
}
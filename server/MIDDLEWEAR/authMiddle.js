import { createError } from "../UTILS/createError.js";
import { tokenVerify } from "../UTILS/token_confi.js";



function getBearerToken(authorization) {

    if (!authorization) throw createError(401, 'miss required headers');
    const token = authorization.split("Bearer")[1];
    if (!token) throw createError(401, 'token error');
    return token

}



export function AuthTokenValidator(req, res, next) {

    const { authorization } = req.headers

    try {

        const token = getBearerToken(authorization)
        const payload = tokenVerify(token)
        console.log(payload);

        req.user = payload

        next()

    } catch (error) {
        if (error.message) {
            return res.status(error.statusCode || 500).json({ success: false, message: error.message })
        }
        res.status(500).json({ success: false, message: error })
    }
}
import { getAlertById } from "../DAL/alertDal.js";
import { createError } from "../UTILS/createError.js";




export async function getAlertByIdService(id) {

    const alert = await getAlertById(id)
    if(!alert) throw createError(404,"alert not found");
    return{
        ...alert,
        _id:alert._id.toString()
    }
}



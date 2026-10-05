import { getAlertById, insertAlert } from "../DAL/alertDal.js";
import { createError } from "../UTILS/createError.js";




export async function getAlertByIdService(id) {

    const alert = await getAlertById(id)
    if (!alert) throw createError(404, "alert not found");
    return {
        ...alert,
        _id: alert._id.toString()
    }
}

export async function createAlertService(body) {

    const newAlert = await insertAlert(body)
    return "alert successfuly  craeted "

}

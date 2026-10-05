import { deleteAlert, getAlertById, insertAlert, updateAlert } from "../DAL/alertDal.js";
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



export async function deleteAlertService(id) {

    const alert = await deleteAlert(id)
    if (alert.deletedCount !== 1) throw createError(404, 'alert not found')
    return "alert successfuly deleted"
}


export async function updateAlertService(id, updateFields) {

    const alert = await getAlertById(id)
    if (!alert) throw createError(404, 'alert not found');
    await updateAlert(id, updateFields)
    return "alert successfuly updated"

}
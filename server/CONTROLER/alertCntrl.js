import { getAllAlerts } from "../DAL/alertDal.js";
import { getAlertByIdService, createAlertService, deleteAlertService, updateAlertService } from "../SERVICE/alertService.js";



export async function getAlertByIdCntrl(req, res) {

    const { id } = req.params

    try {

        const alert = await getAlertByIdService(id);
        res.status(200).json({ success: true, message: alert })

    } catch (error) {
        if (error.message) {

            res.status(error.statusCode || 500).json({ success: false, message: error.message })
        }
        res.status(500).json({ success: false, message: error })
    }
}



export async function getAllAlertsCntrl(req, res) {
    try {

        const alerts = await getAllAlerts();
        res.status(200).json({ success: true, message: alerts })

    } catch (error) {
        if (error.message) {

            res.status(error.statusCode || 500).json({ success: false, message: error.message })
        }
        res.status(500).json({ success: false, message: error })
    }
}



export async function createAlertCntrl(req, res) {



    try {

        const alert = await createAlertService(req.body);

        res.status(200).json({ success: true, message: alert })

    } catch (error) {
        if (error.message) {

            res.status(error.statusCode || 500).json({ success: false, message: error.message })
        }
        res.status(500).json({ success: false, message: error })
    }

}


export async function deleteAlertCntrl(req, res) {

    const { id } = req.params



    try {

        const alert = await deleteAlertService(id);

        res.status(200).json({ success: true, message: alert })

    } catch (error) {
        if (error.message) {

            res.status(error.statusCode || 500).json({ success: false, message: error.message })
        }
        res.status(500).json({ success: false, message: error })
    }
}


export async function updateAlertCntrl(req, res) {

    const {id} =req.params
    console.log("body",req.body);
    

    try {

        const alert = await updateAlertService(id,req.body);

        res.status(200).json({ success: true, message: alert })

    } catch (error) {
        if (error.message) {

            res.status(error.statusCode || 500).json({ success: false, message: error.message })
        }
        res.status(500).json({ success: false, message: error })
    }
}
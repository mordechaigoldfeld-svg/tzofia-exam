import express from 'express'
import { getAlertByIdCntrl, getAllAlertsCntrl } from "../CONTROLER/alertCntrl.js";


const router = express.Router()
export default router


router.get("/alerts/:id",getAlertByIdCntrl)

router.get("/alerts",getAllAlertsCntrl)



import express from 'express'
import { createAlertCntrl, getAlertByIdCntrl, getAllAlertsCntrl } from "../CONTROLER/alertCntrl.js";
import { validAlertCreateFields } from '../MIDDLEWEAR/alertMiddle.js';


const router = express.Router()
export default router


router.get("/alerts/:id",getAlertByIdCntrl)

router.get("/alerts",getAllAlertsCntrl)

router.post("/alerts",validAlertCreateFields,createAlertCntrl)


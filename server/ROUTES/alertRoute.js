import express from 'express'
import { createAlertCntrl, deleteAlertCntrl, getAlertByIdCntrl, getAllAlertsCntrl, updateAlertCntrl } from "../CONTROLER/alertCntrl.js";
import { validAlertCreateFields, validAlertUpdateFields } from '../MIDDLEWEAR/alertMiddle.js';


const router = express.Router()
export default router


router.get("/alerts/:id", getAlertByIdCntrl)

router.get("/alerts", getAllAlertsCntrl)

router.post("/alerts", validAlertCreateFields, createAlertCntrl)

router.delete("/alerts/:id", deleteAlertCntrl)

router.put("/alerts/:id",validAlertUpdateFields,updateAlertCntrl)


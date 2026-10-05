import express from 'express'
import { getAlertByIdCntrl } from "../CONTROLER/alertCntrl.js";


const router = express.Router()
export default router


router.get("/alerts/:id",getAlertByIdCntrl)



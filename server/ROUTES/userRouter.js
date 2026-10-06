import { getByIdCntrl, loginCntrl, registerCntrl } from "../CONTROLER/userCntrl.js";
import express from 'express'
import { validCreateFields, validLoginFields } from "../MIDDLEWEAR/userMiddle.js";
import { AuthTokenValidator } from "../MIDDLEWEAR/authMiddle.js";

const router = express.Router()
export default router


router.post("/register",validCreateFields,registerCntrl)

router.post("/login",validLoginFields,loginCntrl)

router.get("/me",AuthTokenValidator,getByIdCntrl)

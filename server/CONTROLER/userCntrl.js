import { loginService, registerUser } from "../SERVICE/userService.js";




export async function registerCntrl(req, res) {


    try {
        
        const result = await registerUser(req.body)
        return res.status(201).json({ success: true, messsage: result })

    } catch (error) {
        if (error.message) {
            return res.status(error.statusCode).json({ success: false, message: error.message })
        }
        console.log(error);

        res.status(500).json({ success: false, error })
    }
}



export async function loginCntrl(req, res) {

    const { email, password } = req.body

    try {

        const result = await loginService({ email, password })
        return res.status(200).json({ succes: true, message: result })

    } catch (error) {
        if (error.message) {
            return res.status(error.statusCode).json({ success: false, message: error.message })
        }
        console.log(error);

        res.status(500).json({ success: false, error })
    }
}
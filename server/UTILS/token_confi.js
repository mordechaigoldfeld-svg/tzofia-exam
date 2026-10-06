import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET

const JWT_EXPIRED = process.env.JWT_EXPIRED


export function tokenGenerate( userId ) {

    return jwt.sign({ userId }, JWT_SECRET, { expiresIn: JWT_EXPIRED })

}

export function tokenVerify(token) {

    return jwt.verify(token, JWT_SECRET)
}


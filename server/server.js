import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import 'dotenv/config'

const PORT = process.env.PORT

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN

const app = express()

app.use(express.json())
app.use(cors({
    origin: CLIENT_ORIGIN
}))
app.use(helmet())




app.listen(PORT, () => {
    console.log(`server runnig on port:${PORT}...`);

})
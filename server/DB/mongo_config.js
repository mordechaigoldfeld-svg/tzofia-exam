import { MongoClient } from "mongodb";
import 'dotenv/config'

const MONGO_URI = process.env.MONGO_URI || "http://localhost/27017"

const client = new MongoClient(MONGO_URI)

try {

    await client.connect()
    console.log('mongodb connect successfuly...');


} catch (error) {
    console.log(error);
    process.exit(1)
}


const db = client.db('tzofia_data')


export default db


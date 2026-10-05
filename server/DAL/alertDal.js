import { ObjectId } from 'mongodb'
import db from '../DB/mongo_config.js'

const alerts = db.collection('alerts')


export async function getAllAlerts() {

    return await alerts.find().toArray()

}



export async function getAlertById(id) {

    return await alerts.findOne({ _id: new ObjectId(id) })

}





export async function insertAlert(body) {

    const { insertedId } = await alerts.insertOne(body)
    
    return {

        ...body,
        _id:insertedId.toString()
    }

}





export async function updateAlert(id,updateFields) {

    return await alerts.updateOne({_id:new ObjectId(id)},{$set:updateFields})

}






export async function deleteAlert(id) {

    return await alerts.deleteOne({_id:new ObjectId(id)})
    
}







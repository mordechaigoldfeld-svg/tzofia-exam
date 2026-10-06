import db from "../DB/mongo_config.js";


const users = db.collection('users')


export async function getALL() {
    return await users.find().toArray()
}


export async function findByEmail(email) {
    return await users.findOne({ email })
}



export async function findById(id) {
    return await users.findOne({ _id: new ObjectId(id) })
}

export async function insertUser(body) {
    const { insertedId } = await users.insertOne(body)
    return {
        _id: insertedId.toString(),
        ...body
    }
}

export async function deleteById(id) {
    return await users.deleteOne({ _id: new ObjectId(id) })
}

export async function updateUser(id, updateFields) {

    return await users.updateOne({ _id: new ObjectId(id) }, { $set: updateFields })

}



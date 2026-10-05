import type { createAlert } from "../types/alertType.ts";
import { instance } from "../utils/axios_config.ts";





export async function getALLAlertsApi() {

    const result = await instance.get("/alerts")
    return result.data.message

}

export async function createAlertApi(body:createAlert) {
    console.log(body);
    
    const result = await instance.post("/alerts", {

        displayName:body.displayName,
        description:body.description,
        priority:body.priority,
        arena:body.arena,
        status:body.status,
        lon:Number(body.lon),
        lat:Number(body.lat)
        
    })

    return result.data.message

}

// console.log(await createAlertApi({
//     "displayName":"באר שבע",
//     "description": "מחבלים",
//     "priority":"Critical",
//     "arena":"South",
//     "status":"Active",
//     "lon":"k",
//     "lat": 31.253,

// }));


export async function updateAlertApi(id:string,body:createAlert) {

    
    
    const result = await instance.put(`/alerts/${id}`, {

        ...body
    })

    return result.data.message

}



export async function deleteAlertApi(id:string) {

    const result = await instance.delete(`/alerts/${id}`)
    return result.data.message
    
}

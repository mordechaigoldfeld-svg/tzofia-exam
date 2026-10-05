import { instance } from "../utils/axios_config.ts";





export async function getALLAlertsApi() {

    const result = await instance.get("/alerts")
    return result.data.message
    
}

// console.log(await getALLAlertsApi());

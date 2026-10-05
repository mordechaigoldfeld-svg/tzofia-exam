import { useEffect, useState } from 'react'
import AlertsMap from '../../components/alertMap/AlertsMap'
import './Map.css'

import { type MapAlert } from '../../components/alertMap/AlertsMap'
import { getALLAlertsApi } from '../../api/alertApi'


export default function Map() {

    const [alerts, setAlerts] = useState<MapAlert[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {

        const loadData = async () => {

            try {
                setLoading(true)
                setError(null)

                const alerts = await getALLAlertsApi()
                setAlerts(alerts)

            } catch (error: any) {
                setError(error.response?.data || `error please check your email or password: ${error}`)
                console.log('login failed', error);

            } finally {
                setLoading(false)
            }

        }

        loadData()

    }, [])

    return (
        <div className='map-grid'>
            <div className="map-nav">nav</div>
            <div className="map-main">
                {loading && (<div ><p>loading...</p></div>)}
                {error && (<p style={{ color: "red", margin: 0 }}>{error}</p>)}
                <AlertsMap alerts={alerts} height={600} />
            </div>
        </div>
    )
}

















// const alerts = [{
//         displayName: 'נתניה',
//         description: 'danger',
//         priority: 'Medium',
//         arena: 'Center',
//         status: 'Active',
//         lon: 34.8532,
//         lat: 32.3215
//     },{
//   displayName: 'באר שבע',
//   description: 'מחבלים',
//   priority: 'Critical',
//   arena: 'South',
//   status: 'Active',
//   lon: 34.7915,
//   lat:31.253
// }]
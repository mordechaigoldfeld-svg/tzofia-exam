import { useEffect, useState } from 'react'
import AlertsMap from '../../components/alertMap/AlertsMap'
import './Map.css'
import { deleteAlertApi, getALLAlertsApi } from '../../api/alertApi'
import AlertDetail, { type MapAlertProps } from '../../components/alertDetail/AlertDetail'
import CreateAlert from '../../components/createAlert/CreateAlert'
import type { createAlert } from '../../types/alertType'



export default function Map() {

    const [alerts, setAlerts] = useState<MapAlertProps[]>([])
    const [filtered, setFiltered] = useState("all")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [editingAlert, setEditingAlert] = useState<createAlert | null>(null)
    const [createMode, setCreateMode] = useState(false)

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
    useEffect(() => {

        loadData()

    }, [])



    // const displayedalerts = filtered === 'all' ? alerts : alerts.filter((i) => i.priority === filtered || i.arena === filtered)
    const displayedalerts = filtered === 'all' ? alerts : alerts.filter((i) => i.priority.includes(filtered) || i.arena.includes(filtered) || i.status.includes(filtered))





    const editHandler = (alert) => {

        setEditingAlert(alert)
    }


    const deleteHandle = async (alertId: string) => {

        try {


            const res = await deleteAlertApi(alertId)
            loadData()

        } catch (error: any) {
            setError(error.response?.data.message || `error please check your email or password: ${error}`)
            console.log('login failed', error);
        }

    }

    return (
        <div className='map-grid'>

            <div className="map-nav">
                <div>
                    <label>סינון לפי דחיפות/איזור:</label>
                    <select value={filtered} onChange={(e: any) => setFiltered(e.target.value)}>
                        <option value="all">הכל</option>
                        <option value="Critical">דחיפות שיא</option>
                        <option value="High">דחיפות גבוהה</option>
                        <option value="Medium">דחוף</option>
                        <option value="Low">דחיפות קלה</option>
                        <option value="Center">מרכז</option>
                        <option value="South">דרום</option>
                        <option value="North">צפון</option>
                    </select>
                    <input type="text" placeholder='חפש לפי שם איזור...' value={filtered} onChange={(e) => setFiltered(e.target.value)} />
                    <label> (סטטוס,דחיפות,אזור)חיפוש חופשי:</label>
                </div>
                <div>
                    <button onClick={() => setCreateMode(true)}>הוספת דיווח</button>
                </div>
            </div>
            <div className="map-main">
                <div className='alerts-list'>
                    <h2>all alerts</h2>
                    <ul>
                        {displayedalerts.map((a) => (
                            <li className='li' key={a._id}>
                                <AlertDetail alert={a} updateMode={editHandler} onDelete={deleteHandle} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='map-box'>
                    {loading && (<div ><p>loading...</p></div>)}
                    {error && (<p style={{ color: "red", margin: 0 }}>{error}</p>)}

                    {(createMode || editingAlert) && (

                        <div className='open-window'>
                            <CreateAlert initialData={editingAlert}
                                onClose={() => {
                                    setEditingAlert(null)
                                    setCreateMode(false)
                                }} onSuccess={
                                    () => {
                                        setEditingAlert(null)
                                        setCreateMode(false)
                                        loadData()
                                    }} />
                        </div>
                    )}
                    <AlertsMap alerts={displayedalerts} height={600} />

                </div>
            </div>
        </div>
    )
}


















import { useEffect, useState } from 'react'
import type { createAlert } from '../../types/alertType';
import { createAlertApi, updateAlertApi } from '../../api/alertApi';
import './CreateAlert.css'



interface AlertFormProps {
    initialData?: createAlert | null
    onClose: () => void
    onSuccess: () => void
}

export default function CreateAlert({ onClose, onSuccess, initialData }: AlertFormProps) {

    const [displayName, setDisplayName] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('Critical')
    const [arena, setArena] = useState('Center')
    const [status, setStatus] = useState('Active')
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const isEditMode = Boolean(initialData)

    useEffect(() => {
        if (initialData) {
            setDisplayName(initialData.displayName)
            setDescription(initialData.description)
            setPriority(initialData.priority)
            setArena(initialData.arena)
            setStatus(initialData.status)
        } else {
            setDisplayName('')
            setDescription('')
            setPriority('')
            setArena('')
            setStatus('')
        }

    }, [initialData])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {

            if (isEditMode && initialData) {
                const updateBody: any = {
                    displayName,
                    description,
                    priority,
                    status,
                    arena,
                }
                

                await updateAlertApi(initialData._id,updateBody)

            } else {
                await createAlertApi({
                    displayName,
                    description,
                    priority,
                    arena,
                    status,
                    lat,
                    lon,
                }
                )
            }

            onSuccess()

        } catch (err: any) {
            setError(err.response?.data?.message || 'ERROR')
        } finally {
            setLoading(false)
        }
    }




    return (
        <div className="alert-sidebar">

            <div className='alert-title' >
                <h3>{isEditMode ? 'update alert' : 'new alert'}</h3>
                <button type="button" onClick={onClose}>✕</button>
            </div>


            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>כותרת האירוע:</label>
                    <input
                        type="text"
                        required={!isEditMode}
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        placeholder="הכניסו שם למשל חדירה"
                    />
                </div>

                <div>
                    <label>תיאור:</label>
                    <textarea
                        required
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="פרטים נוספים..."
                    />
                </div>

                <div>
                    <label>דחיפות:</label>
                    <select value={priority} onChange={(e: any) => setPriority(e.target.value)}>
                        <option value="Critical">דחיפות שיא</option>
                        <option value="High">דחיפות גבוהה</option>
                        <option value="Medium">דחוף</option>
                        <option value="Low">דחיפות קלה</option>
                    </select>
                </div>
                <div>
                    <label>arena</label>
                    <select value={arena} onChange={(e) => setArena(e.target.value)}>
                        <option value="North">צפון</option>
                        <option value="Center">מרכז</option>
                        <option value="South">דרום</option>
                    </select>
                </div>
                <div>
                    <label>status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <option value="Active">פעיל</option>
                        <option value="Handled">בטיפול</option>
                    </select>
                </div>
                {!isEditMode && (

                    <div>
                        <div>
                            <label>latitude</label>
                            <input type="number" value={lat} onChange={(e) => setLat(e.target.value)} />
                        </div>
                        <div>
                            <label>longitude</label>
                            <input type="number" value={lon} onChange={(e) => setLon(e.target.value)} />
                        </div>
                    </div>
                )}

                <div>
                    <button type="submit" disabled={loading}>
                        {loading ? 'שולח...' : 'שמור דיווח'}
                    </button>
                    <button type="button" onClick={onClose} disabled={loading}>
                        ביטול
                    </button>
                </div>
            </form>
        </div>
    )
}
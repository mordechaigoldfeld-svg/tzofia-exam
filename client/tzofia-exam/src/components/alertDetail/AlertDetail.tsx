


export interface MapAlertProps {
    _id: string | number;
    displayName: string;
    priority: string;
    description: string;
    createdAt: string;
    updatedAt: string | null;
    lon: number;
    lat: number;
}


interface alertProps{
    alert:MapAlertProps,
    updateMode:(alert:MapAlertProps)=>void,
    onDelete:(alertId:string)=>void
}

export default function AlertDetail({alert,updateMode,onDelete}:alertProps) {
    return (
        <div>
            <div>
            <h1>{alert.displayName}</h1>
            <h3>{alert.priority}</h3>
            <p>{alert.description}</p>
            <p>created at: {alert.createdAt}</p>
            <p>updated at: {alert.updatedAt}</p>
            </div>
            <div>
                <button onClick={()=>updateMode(alert)}>עדכן</button>
                <button onClick={() => {if (window.confirm('do you want to delete?')) {onDelete(alert._id)}}}>מחק</button>
            </div>

        </div>
    )
}

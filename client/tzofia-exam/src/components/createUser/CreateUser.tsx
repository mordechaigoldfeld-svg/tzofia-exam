import { useState } from "react"
import { registerApi } from "../../api/usersApi"



interface userFormProps {
    onClose: () => void
    onSuccess: () => void
}



export default function CreateUser({ onClose, onSuccess }: userFormProps) {


    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('admin')
    const [assignedArena, setAssignedArena] = useState('All')




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {

            console.log('arena',assignedArena);
            

            await registerApi({
                password,
                username,
                email,
                role,
                assignedArena
            })

            onSuccess()

        } catch (error: any) {
            setError(error.response?.data?.message || `error: ${error}`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="user-sidebar">

            <div className='user-title' >
                <h3>דיווח חדש</h3>
                <button type="button" onClick={onClose}>✕</button>
            </div>


            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>שם :</label>
                    <input
                        type="text"
                        required 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="הכנס את שמך..."
                    />
                </div>

                <div>
                    <label>סיסמה</label>
                    <input
                        type="password"
                        placeholder="הכנס סיסמתך"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div>
                    <label>אמייל</label>
                    <input
                        type="email"
                        placeholder="test@gmail.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                         />
                </div>
               
                <div>

                    <label >תפקיד</label>
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="admin">מנהל</option>
                        <option value="arena_user">חייל גזרה</option>
                        <option value="general_user"> חייל כללי</option>
                    </select>


                </div>
                
                <div>
                    <label >גזרה</label>
                    <select value={assignedArena} onChange={(e) => setAssignedArena(e.target.value)}>
                        <option value="All">כלל הגזרות</option>
                        <option value="North">צפון</option>
                        <option value="Center">מרכז</option>
                        <option value="South">דרום</option>
                    </select>
                </div>
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

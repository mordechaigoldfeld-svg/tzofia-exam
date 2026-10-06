import { useNavigate } from 'react-router'
import { useAuthStore } from '../../store/useUserStore'
import './Register.css'
import UserDetail from '../../components/userDetails/UserDetail'
import { deleteUserApi, getAllUsersApi } from '../../api/usersApi'
import { useEffect, useState } from 'react'
import CreateUser from '../../components/createUser/CreateUser'






export default function Register() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [users, setUsers] = useState([])
    const [createMode, setCreateMode] = useState(false)
    const logout = useAuthStore(s => s.logout)
    const user = useAuthStore(s => s.user)
    const token = useAuthStore(s => s.token)
    const navigate = useNavigate()
    const logoutHandler = () => {

        logout()
        navigate('/login')

    }


    const loadUsers = async () => {

        try {
            setLoading(true)
            setError(null)

            const users = await getAllUsersApi(token)
            setUsers(users.message)


        } catch (error: any) {
            setError(error.response?.data.message || `error please check your email or password: ${error}`)
            console.log('login failed', error);

        } finally {
            setLoading(false)
        }


    }
    useEffect(() => {

        loadUsers()


    }, [])




    const deleteHandle = async (userId: string) => {

        try {


            const res = await deleteUserApi(userId)
            loadUsers()

        } catch (error: any) {
            setError(error.response?.data.message || `error please check your email or password: ${error}`)
            console.log('login failed', error);
        }

    }



    return (

        <div className='register-grid'>
            <div className='register-nav'>
                <div>
                    <button onClick={() => logoutHandler()}>יציאה</button>
                    <button onClick={() => navigate('/map')}>עמוד המפה ואירועים</button>
                    <button onClick={() => setCreateMode(true)}>הוספת משתמש</button>

                </div>
                <div>
                    <h1>{user?.username} :ברוכים הבאים</h1>
                    <p> {user?.role}: תפקיד</p>
                </div>
            </div>
            <div className='register-main'>
                {createMode && (

                    <div className='open-window'>
                        <CreateUser 
                            onClose={() => {
                                setCreateMode(false)
                            }} onSuccess={
                                () => {
                                    setCreateMode(false)
                                    loadUsers()
                                }} />
                    </div>
                )}
                <div className='alerts-list'>
                    <h2>all users</h2>
                    {loading && (<div ><p>loading...</p></div>)}
                    {error && (<p style={{ color: "red", margin: 0 }}>{error}</p>)}
                    <ul>
                        {users.map((u: any) => (
                            <li className='li' key={u._id}>
                                <UserDetail user={u} onDelete={deleteHandle} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

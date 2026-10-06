




interface userT {

    _id: string,
    email: string,
    username: string,
    role: 'admin' | 'general_user' | 'arena_user',
    assignedArena: 'Center' | 'North' | 'South' | 'All',
    createdAt: string

}

interface userProps {
    user: userT,
    onDelete: (userId: string) => void
}






export default function UserDetail({ user, onDelete }: userProps) {


    return (
        <div>
            <div>
                <h1>{user.username}</h1>
                <h3>{user.role}</h3>
                <h3>status: {user.assignedArena}</h3>
                <p>arena: {user.email}</p>
                <p>created at: {new Date(user.createdAt).toLocaleString()}</p>
            </div>
            <div>
                <button onClick={() => { if (window.confirm('do you want to delete?')) { onDelete(user._id) } }}>מחק</button>
            </div>

        </div>
    )
}

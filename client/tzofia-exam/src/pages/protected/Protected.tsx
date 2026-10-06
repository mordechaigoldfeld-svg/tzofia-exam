import { Navigate, Outlet } from "react-router"
import { useAuthStore } from "../../store/useUserStore.ts"



export default function Protected() {

    const token = useAuthStore(s => s.token)


    if (!token || token.trim() === '') {

        return <Navigate to='/login' replace />
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

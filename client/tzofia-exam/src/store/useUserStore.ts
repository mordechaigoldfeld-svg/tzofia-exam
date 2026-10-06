import { create } from "zustand";
import { persist } from "zustand/middleware";




interface userT {

    _id: string,
    email: string,
    username: string,
    role: 'admin' | 'general_user' | 'arena_user',
    assignedArena: 'Center' | 'North' | 'South' | 'All',
    createdAt: string

}


interface userStoreProps {
    user: userT | null,
    token: string | null,
    setAuth: (data: { token: string; user: userT }) => void,
    logout: () => void
}




export const useAuthStore = create<userStoreProps>()(
    
    persist(
        (set) => ({
            token: null,
            user: null,
            setAuth: ({ token, user }) => set({ token, user }),
            logout: () => set({ token: null, user: null })
        }),
        {
            name: 'auth-storage',
        }
    )
)
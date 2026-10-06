import z, { email } from "zod"





export const createUserSchema = z.object({
    username: z.string().min(1),
    password: z.string().min(5, 'password must to be minimum 5 charters'),
    email: z.email(),
    role: z.enum(['admin', 'general_user','arena_user']),
    assignedArena:z.enum(['North','Center','South','All'])


}).strict()


export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(5, 'password must to be minimum 5 charters')
}).strict()
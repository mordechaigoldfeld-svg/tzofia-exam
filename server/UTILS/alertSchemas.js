import { z } from 'zod'


export const createAlertSchema = z.object({

    displayName: z.string().min(1),
    description: z.string().min(1),
    priority: z.enum(['Low', 'Medium', 'High', 'Critical']),
    arena: z.enum(['North', 'South', 'Center']),
    status: z.enum(['Active', 'Handled']),
    lon: z.number().min(-90).max(90),
    lat: z.number().min(-180).max(180)

})
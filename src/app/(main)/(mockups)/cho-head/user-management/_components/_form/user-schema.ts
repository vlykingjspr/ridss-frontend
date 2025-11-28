import z from "zod";

export const USERSCHEMA = z.object({
    first_name: z.string().min(1, "the first name field is required."),
    last_name: z.string().min(1, "the last name field is required."),
    middle_name: z.string().min(1, "the middle name field is required."),
    role: z.enum(['cho-head', 'cho-staff', 'bhw-head', 'bh-staff']),
    barangay: z.string().optional()
})

export type IFormUser = z.infer<typeof USERSCHEMA>;

export const defaultUser = {
    first_name: '', last_name: '', middle_name: '', role: undefined, barangay: undefined
}
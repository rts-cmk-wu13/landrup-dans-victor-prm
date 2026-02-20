import z from "zod"

export const contactSchema = z.object({
    name: z
        .string({ message: "Type a valid email" })
        .min(2, { message: "Skriv min. 2 karakterer" }),
    email: z
        .email({ message: "Email ikke gyldig" }),
    message: z
        .string({ message: "Type a valid message" })
        .min(2, { message: "Skriv min. 24 karakterer" }),

    //Alternativ, hvis logik skal være mere custom
    /* .refine(v => v.length > 10, {
        message: "Message not long enough",
    }), */
});

export const newsletterSchema = z.object({
    email: z.email({ message: "Email ikke gyldig" }),
});
import z from "zod"

/*--- Schema for /auth/token ---*/
export const loginSchema = z.object({
    username: z
        .string({ message: "Brugernavn påkrævet" }),
    password: z
        .string({ message: "Password påkrævet" }),
});


/*--- Schema for /newsletter ---*/
export const newsletterSchema = z.object({
    email: z.email({ message: "Email ikke gyldig" }),
});


/*--- Schema for /messages ---*/
export const contactSchema = z.object({
    name: z
        .string({ message: "Brugernavn påkrævet" })
        .min(2, { message: "Skriv min. 2 karakterer" }),
    email: z
        .email({ message: "Email ikke gyldig" }),
    message: z
        .string({ message: "Besked påkrævet" })
        .min(24, { message: "Skriv min. 24 karakterer" }),

    //Alternativ, hvis logik skal være mere custom
    /* .refine(v => v.length > 10, {
        message: "Message not long enough",
    }), */
});


/*--- Schema for adding/removing user from calsses ---*/
export const addRemoveUserSchema = z.object({
    userId: z
        .string({ message: "User ID ikke gyldigt" }),
    activityId: z
        .string({ message: "Activity ID ikke gyldigt" }),
});


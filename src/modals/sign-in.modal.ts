import { EInputType, TFormField } from "@/types/form-field";
import { z } from "zod";

export const signInFormSchema = z.object({
    email: z.string().email({message: "Please enter valid email"}),
    password: z.string({required_error: "Please enter password"}).min(1, {message: "Please enter passwords"})
})

export type TSignInFormSchema = z.infer<typeof signInFormSchema> //use this in TFormField generic

export const SignInFormDefaultValues: Partial<TSignInFormSchema> = {
    email: "",
    password: "",
}

export const SingInFormField: TFormField<TSignInFormSchema>[] = [
    {
        label: "Email",
        name: "email",
        placeholder: "Eg: hello@gmail.com",
        required: true,
        type: EInputType.EMAIL,
        description: "hello email"
    },
    {
        label: "Password",
        name: "password",
        type: EInputType.PASSWORD,
        required: true,
        placeholder: "Enter password",
        description: 'hello password'
    }
]
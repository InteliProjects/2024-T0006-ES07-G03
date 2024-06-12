import { useSignup } from "@/hook/useSignup";
import { generateRandomPassword } from "@/utils/generateRandomPassword";
import { zodResolver } from "@hookform/resolvers/zod";
    import { useForm } from "react-hook-form";
import { z } from "zod";

export function useSignupForm() {
    const { signup, isPending, error } = useSignup();
    const phoneValidateRegex =  /^\+?[0-9]{11}$/;

    const registerSchema = z.object({
        fullName: z.string().min(4, "Nome inválido. Ele deve ter no mínimo 4 caracteres"),
        email: z.string().email('Email inválido').min(1),
        phoneNumber: z.string().refine(value => phoneValidateRegex.test(value), {
            message: 'Número de telefone inválido.'
        }),
    });

    const registerFormAction = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            fullName: "",
            email: "",
            phoneNumber: "",
        }
    });

    const onSubmit = async (data: z.infer<typeof registerSchema>) => {
        try {
            const randomPasswordGenerated = generateRandomPassword();
            await signup(data.email, randomPasswordGenerated, data.fullName, data.phoneNumber);
        } catch (error) {
            console.error('Erro ao efetuar cadastro:', error);
        }
    };

    return {
        isPending,
        registerFormAction,
        onSubmit,
        error
    }
}
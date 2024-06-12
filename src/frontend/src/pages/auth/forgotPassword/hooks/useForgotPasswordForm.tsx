import usePasswordReset from "@/hook/usePasswordReset";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useForgotPasswordForm() {
    const { resetPassword, errorMessage, isEmailSent } = usePasswordReset();
    const [messangeResult, setMessangeResult] = useState("")    

    const forgotPasswordSchema = z.object({
        email: z.string().email('Email inválido').min(1),
    });

    const forgotPasswordAction = useForm<z.infer<typeof forgotPasswordSchema>>({
        resolver: zodResolver(forgotPasswordSchema),
        defaultValues: {
            email: "",
        }
    });

    const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
        try {
            const resultMessage = await resetPassword(data.email);
            setMessangeResult(resultMessage)
        } catch (error) {
            console.log(error);
        }
    };

    return {
        forgotPasswordAction,
        onSubmit,
        isEmailSent,
        messangeResult,
        errorMessage
    };
}
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLogin } from '@/hook/useLogin';


export function useLoginForm() {
    const { isPending, login } = useLogin();
    const [showPassword, setShowPassword] = useState(false);

    const LoginSchema = z.object({
        email: z.string().email('Email inválido').min(1),
        password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres'),
    });

    const loginFormAction = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
        try {
            await login(data.email, data.password);
        } catch (error) {
            console.error('Erro ao efetuar login:', error);
        }
    };

    return {
        isPending, 
        showPassword, 
        setShowPassword,
        loginFormAction,
        onSubmit
    }
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useSignupForm } from "../hooks/useSignupForm";

export function SignupForm() {
    const { onSubmit, registerFormAction, isPending } = useSignupForm();

    return (
        <Form {...registerFormAction}>
            <form onSubmit={registerFormAction.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-4" >
                <FormField
                    control={registerFormAction.control}
                    name="fullName"
                    render={({ field }) => (
                        <FormItem>
                            <FormMessage className='text-[12px]' />
                            <FormControl>
                                <Input  {...field}
                                    type="text"
                                    placeholder="Digite seu nome"
                                    className="border-[1px] outline-none border-[#35363C] bg-[#111317] text-white mt-4 py-3 px-5 rounded-[10px] w-80 h-11"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={registerFormAction.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormMessage className='text-[12px]' />
                            <FormControl>
                                <Input
                                    {...field}
                                    type="email"
                                    placeholder="Digite seu email"
                                    className="border-[1px] outline-none border-[#35363C] bg-[#111317] text-white py-3 px-5 rounded-[10px] w-80 h-11"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={registerFormAction.control}
                    name="phoneNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormMessage className='text-[12px]' />
                            <FormControl>
                                <Input
                                    {...field}
                                    type="tel"
                                    placeholder="Digite o número do seu telefone"
                                    className="border-[1px] outline-none border-[#35363C] bg-[#111317] text-white py-3 px-5 rounded-[10px] w-80 h-11"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button
                    disabled={isPending}
                    type="submit"
                    className="border-[1px] font-semibold text-[16px] h-[46px] leading-5 mb-2 text-center bg-yellow-500 hover:bg-yellow-500 flex items-center justify-center gap-4 rounded-[30px] py-2 px-3 w-[25vw] text-black"
                >
                    {isPending ? (
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    ) : null}
                    {isPending ? "Criando a conta..." : "Criar minha conta"}
                </Button>
            </form>
        </Form>
    )
}

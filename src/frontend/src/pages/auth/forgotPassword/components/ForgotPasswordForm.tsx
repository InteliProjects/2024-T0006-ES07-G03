import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormField, FormItem, FormMessage, FormControl } from "@/components/ui/form";
import { useForgotPasswordForm } from "../hooks/useForgotPasswordForm";

export function ForgotPasswordForm() {

    const { onSubmit, forgotPasswordAction } = useForgotPasswordForm();

    return (
        <Form {...forgotPasswordAction}>
            <form onSubmit={forgotPasswordAction.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center space-y-6" >
                <FormField
                    control={forgotPasswordAction.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormMessage className='text-[12px]' />
                            <FormControl>
                                <Input  {...field}
                                    type="text"
                                    placeholder="Digite seu email para recuperar senha"
                                    className="border-[1px] outline-none border-[#35363C] bg-[#111317] text-white mt-4 py-3 px-5 rounded-[10px] w-80 h-11"
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    className="border-[1px] font-semibold text-[16px] h-[46px] leading-5 mb-2 text-center bg-yellow-500 hover:bg-yellow-500 flex items-center justify-center gap-4 rounded-[30px] py-2 px-3 w-[25vw] text-black"
                >
                    Enviar senha temporária
                </Button>
            </form>
        </Form>

    )
}
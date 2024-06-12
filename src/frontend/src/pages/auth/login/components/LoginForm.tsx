import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useLoginForm } from '../hooks/useLoginForm';

export function LoginForm() {
    const { onSubmit, loginFormAction, showPassword, setShowPassword, isPending } = useLoginForm();

    return (
        <Form {...loginFormAction}>
            <form onSubmit={loginFormAction.handleSubmit(onSubmit)} className="flex flex-col justify-center items-center space-y-4">
                <FormField
                    control={loginFormAction.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormMessage className='text-[12px]' />
                            <FormControl>
                                <Input placeholder='usuario@gmail.com' {...field}
                                    className="border-[1px] outline-none border-[#35363C] bg-[#111317] text-white py-3 px-5 rounded-[10px] w-80 h-11 pr-[40px]" // Increase the padding-right to accommodate the eye icon button
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={loginFormAction.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <div className='relative'>
                                <FormMessage className='text-[12px] mb-2' />
                                    <Input 
                                        {...field}
                                        placeholder='umaSEN@Dif'
                                        type={showPassword ? "text" : "password"}
                                        className="border-[1px] outline-none border-[#35363C] bg-[#111317] text-white py-3 px-5 rounded-[10px] w-80 h-11 pr-[40px]" // Increase the padding-right to accommodate the eye icon button
                                    />
                                    <Button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer bg-[#111317]">                                                                                
                                        {showPassword ? <BsEyeSlash size={20} color="white" /> : <BsEye size={20} color="white" />}
                                    </Button>
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button
                    disabled={isPending}
                    type="submit"
                    style={{ fontFamily: "Epilogue, sans-serif" }}
                    className="border-[1px] font-semibold text-[16px] h-[46px] leading-5 mb-2 text-center bg-yellow-500 hover:bg-yellow-500 flex items-center justify-center gap-4 rounded-[30px] py-2 px-3 w-[25vw] text-black"
                >
                    {isPending ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : null}
                    {isPending ? "Entrando..." : "Entrar"}
                </Button>
            </form>
        </Form>
    );
}
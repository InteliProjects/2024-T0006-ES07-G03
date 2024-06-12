import { Link } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";
import logo from '@/assets/logo.png';
import { useMediaQuery } from "@/hook/useMediaQuery";

export function Login() {

    const isMobile = useMediaQuery("(max-width: 640px)");

    return (
        <div className={`h-screen w-screen bg-[#0E0E11] flex flex-col justify-center  items-center `}>
            <img src={logo} alt="logo" className="h-32 w-32 mb-8" />

            <div className={`flex ${isMobile ? 'w-fit' : 'w-[40%]'} py-8 px-5 justify-center flex-col bg-[#0E0E11] rounded-2xl`}>

                <div className="flex flex-col justify-center mb-4 items-center" style={{ fontFamily: "Epilogue, sans-serif" }}>
                    <h1 className="font-bold text-[25px] leading-5 mb-2 text-white text-center">Entre na sua conta</h1>
                    <p className="font-normal text-[15px] mt-4 leading-4 text-center text-[#4D5461]">A senha que deve ser utilizada é a que chegou no seu email.</p>
                </div>

                <LoginForm />

                <div className="flex flex-col items-center justify-center mt-4">
                    <p className="font-normal text-[13px] leading-4 text-white">Não tem uma conta? <Link to="/signup" className="text-yellow-600">Cadastre-se</Link></p>
                    <p className="font-normal text-[13px] mt-2 leading-4 text-white">Esqueceu sua senha? <Link to="/forgotPassword" className="text-yellow-600">Recuperar senha</Link></p>
                </div>
            </div>
        </div>
    );
}

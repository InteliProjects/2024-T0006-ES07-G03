import { Link } from "react-router-dom";
import logo from '@/assets/logo.png'; 
import { ForgotPasswordForm } from "./components/ForgotPasswordForm";

export function ForgotPassword() {

  return (
    <div className="h-screen w-screen bg-[#0E0E11] flex flex-col justify-center items-center overflow-hidden">
      <div className="bg-[#0E0E11] mb-8">
        <img src={logo} alt="logo" className="h-32 w-32" />
      </div>
      <div className="flex w-[40%] p-10 justify-center flex-col mx-auto bg-[#0E0E11] rounded-2xl">
        <div className="flex flex-col justify-center mb-4 items-center" style={{ fontFamily: "Epilogue, sans-serif" }}>
          <h1 className="font-bold text-[25px] leading-5 mb-2 text-white">Recupere sua senha</h1>
          <p className="font-normal text-[15px] mt-4 leading-4 text-[#4D5461]">Informe seu e-mail para recuperar sua senha</p>
        </div>

        <ForgotPasswordForm />

        <div className="flex flex-col items-center justify-center">
          <p className="font-normal text-[13px] mt-4 leading-4 text-white">Não tem uma conta? <Link to="/register" className="text-yellow-600">Cadastre-se</Link></p>
          <p className="font-normal text-[13px] mt-2 leading-4 text-white">Já tem uma conta? <Link to="/login" className="text-yellow-600">Fazer login</Link></p>
        </div>
      </div>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { SignupForm } from './components/SignupForm';
import logo from '@/assets/logo.png';

export function Signup() {
  return (
    <div className="h-screen w-screen bg-[#0E0E11] flex flex-col justify-center items-center overflow-hidden">
      <div className="bg-[#0E0E11] mb-8">
        <img src={logo} alt="logo" className="h-32 w-32 mt-8" />
      </div>
      <div className="flex w-[40%] p-10 justify-center flex-col mx-auto bg-[#0E0E11] rounded-2xl">
        <div className="flex flex-col justify-center mb-4 items-center" style={{ fontFamily: "Epilogue, sans-serif" }}>
          <h1 className="font-bold text-[25px] leading-5 mb-2 text-white">Cadastre-se</h1>
          <p className="font-normal text-[15px] mt-4 leading-4 text-[#4D5461]">Insira os dados pedidos abaixo e crie sua conta</p>
        </div>
        <SignupForm />
        <div className="flex flex-col items-center justify-center">
          <p className="font-normal text-[15px] mt-4 leading-4 text-[#4D5461]">Já tem uma conta? <Link to="/login" className="text-yellow-600">Entrar</Link></p>
          <p className="font-normal text-[15px] mt-2 leading-4 text-[#4D5461]">Esqueceu sua senha? <Link to="/forgot-password" className="text-yellow-600">Recuperar senha</Link></p>
        </div>
      </div>
    </div>
  )
}

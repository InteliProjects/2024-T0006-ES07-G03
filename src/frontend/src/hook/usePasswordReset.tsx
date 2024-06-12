import { useState } from 'react';
import { auth } from '../firebase/config';
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'sonner';

const usePasswordReset = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resetPassword = async (email: string) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setIsEmailSent(true);
      setErrorMessage(null); 
  
      toast("Email enviado com sucesso !", {
        description: `usuário: ${email}`
      })
      return 'Email enviado com sucesso para ' + email;
    } catch (error) { 
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
      if (error.code === 'auth/user-not-found') {
        setErrorMessage('Email não encontrado. Verifique o email e tente novamente.');
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
      } else if (error.code === 'auth/invalid-email') {
        setErrorMessage('Email inválido. Verifique o email e tente novamente.');
      } else {
        setErrorMessage('Ocorreu um erro ao redefinir a senha. Tente novamente mais tarde.');
      }
  
      toast("Erro ao enviar o email. Tente novamente");
      setIsEmailSent(false);
      throw error;
    }
  };
  

  return { resetPassword, isEmailSent, errorMessage };
};

export default usePasswordReset;
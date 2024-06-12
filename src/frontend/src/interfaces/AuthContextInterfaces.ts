import { AuthAction } from "@/types/AuthContextTypes";
import { User } from "firebase/auth";
import { ReactNode } from "react";

export interface AuthContextType {
    user: User | null;
    authIsReady: boolean;
    dispatch: React.Dispatch<AuthAction>;
  }

  export interface AuthContextProviderProps {
    children: ReactNode;
  }
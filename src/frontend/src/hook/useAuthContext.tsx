
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthContextType } from "@/interfaces/AuthContextInterfaces";

export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext deve ser usado dentro de um AuthContextProvider");
  }
  return context;
}
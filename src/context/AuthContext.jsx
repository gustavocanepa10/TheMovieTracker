import { createContext, useContext, useState } from "react";




export const AuthContext = createContext()



export function AuthProvider({children}) {
  


  const [loginData, setLoginData] = useState(null)


  


  return (
    <AuthContext.Provider value={{loginData, setLoginData }}>



        {children}




    </AuthContext.Provider>

  )




}

export function useAuthContext() {
    const context = useContext(AuthContext)

    if (context === undefined) throw new Error("O contexto não está sendo fornecido dentro desse componente")

    return context
}
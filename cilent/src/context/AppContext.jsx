import { createContext, use, useContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const [user, setUser] = useState(null)
    const [isSeller, setIsSeller] = useState(false)

;    const value ={navigate, user, setUser, isSeller, setIsSeller}
  return <AppContext.Provider value={{value}}>
      {children}
    </AppContext.Provider>
  

}

export const useAppContext = () =>{
    return useContext(AppContext)
}
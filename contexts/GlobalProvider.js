import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../lib/appwrite";
import { toast } from '../lib/toast'

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
   const [isLogged, setIsLogged] = useState(false);
   const [user, setUser] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      getCurrentUser()
         .then((res) => {
            if (res) {
               setIsLogged(true);
               setUser(res);
            } else {
               setIsLogged(false);
               setUser(null);
            }
         })
         .catch((error) => {
            toast(error);
         })
         .finally(() => {
            setIsLoading(false);
         });
   }, []);


   return (
      <GlobalContext.Provider value={{ isLogged, setIsLogged, isLoading, user, setUser }}>
         {children}
      </GlobalContext.Provider>
   )
}

export default GlobalProvider
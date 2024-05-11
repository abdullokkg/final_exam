import { useState } from "react";

export const saveToLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
   }
  
  export const loadFromLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return { isLoggedIn, setIsLoggedIn };
  };

  
  // Update forceUpdate whenever isLoggedIn changes

  
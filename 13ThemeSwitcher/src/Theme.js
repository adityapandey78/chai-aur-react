import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    // iisse default value set hoti hai
    themeMode: 'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
});
// idhr context create kra hai toh default balue de skte hain,Value de skte hain, even method bhi de skte hain

//new file bnane ki jegeh isme hi bna likh diya and jidhr bhi use krenge ese hi wrapp kr denge
export const ThemeProvider =ThemeContext.Provider

//custom hooks bhi paas kr diya
export default function useTheme(){
    return useContext(ThemeContext)
}
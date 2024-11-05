"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

interface ThemeContextType {
    mode: string;
    setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({children}:{children:React.ReactNode}){
    const [mode, setMode] = useState('');

    const handleThemeChange = () => {
        console.log("Hit");
        
        if (localStorage.theme === 'dark' || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) // This line says if theme is dark from system
            {
                setMode('dark')
                document.documentElement.classList.add('dark')
            }else{
                setMode("light");
                document.documentElement.classList.remove("dark")
        }
        // console.log('LOCAL THEME:',localStorage.theme);
        // var q = "theme" in localStorage
        // console.log('PREFFERD:',q);
        
        
        // if(mode==='dark'){
        //     setMode('dark')
        //     document.documentElement.classList.add('dark')
        // }else{
        //     setMode('light')
        //     document.documentElement.classList.remove('dark')
        //     document.documentElement.classList.add('light')
        // }
    }

    useEffect(()=>{
        handleThemeChange();
    },[mode])

return (
    <ThemeContext.Provider value={{mode, setMode}}>
        {children}
    </ThemeContext.Provider>
)}

export default function useTheme(){
    const context = useContext(ThemeContext)

    if(context === undefined){
        throw new Error('useTheme must be used in a Theme Provider')
    }
    return context
}
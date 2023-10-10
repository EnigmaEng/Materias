import React, { useEffect, useState } from 'react'
import {MdOutlineDarkMode} from 'react-icons/md'
import {BsSun} from 'react-icons/bs'
const DarkMode = () => {

const [theme, setTheme] = useState(() => {
    const guardarTheme = localStorage.getItem('theme');
    if(guardarTheme){
        return guardarTheme;
    }
    if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        return "dark";
    }
    return "light";
})

useEffect(() => {
    
    if (theme == "dark"){
        document.querySelector('html').classList.add('dark')
    }else{
        document.querySelector('html').classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
},[theme])

const handleTheme = async () => {
    setTheme(prevTheme => prevTheme == 'light' ? 'dark' : 'light')
}

return (
<>
<button onClick={handleTheme} className='bg-zinc-800 text-white dark:text-yellow-600  dark:bg-zinc-200  px-6 py-1 rounded-box'>
    <span className='hidden dark:block text-2xl'><BsSun/></span>
    <span className='dark:hidden  text-2xl'><MdOutlineDarkMode/></span>
</button>

</>
)
}

export default DarkMode;
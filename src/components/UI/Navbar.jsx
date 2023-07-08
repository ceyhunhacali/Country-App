import React, { useContext } from 'react'
import { MdDarkMode } from "react-icons/md"
import { BsLightbulb } from "react-icons/bs"
import { ThemeContext } from '../../context/ThemeContext'
import { Link } from 'react-router-dom'

function Navbar() {
    const {color, setColor} = useContext(ThemeContext)

    const mode =() => {
        setColor(!color)
       }
    return (
        <nav className=" navbar navbar-expand-sm navbar-dark container px-sm-0 px-5 text-white d-flex align-items-center justify-content-between">

            <Link to="/" className={`${color ? "text-white" : "text-black"} navbar-brand fs-4`} >React Country App <br /> by Jeyhun Hajaliyev </Link>

            <div onClick={mode} className='d-flex align-items-center gap-2'>
              { !color ?  <BsLightbulb fill='#000'  size={24}/> : <MdDarkMode fill='#fff'  size={24}/>}
                <span className={`${color ? "text-white" : "text-black"} `}>{color ? "Light mode" : "Dark mode"}</span>
            </div>

        </nav>
    )
}

export default Navbar
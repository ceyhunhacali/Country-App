import React, { useContext } from 'react'
import Navbar from '../components/UI/Navbar'
import Routing from '../router/Routing';
import { ThemeContext } from '../context/ThemeContext';


function MainLayout() {

    const {color,  setColor} = useContext(ThemeContext)

    return (
        <>
            <header className={`${color ? 'navbarbg' : 'lightbg'} p-2 navbar-shadow shadow-md`}>
                <Navbar />
            </header>
            <main className={`${color ? 'darkbg' : 'mainlightbg'} `} >
                <div className='container py-5'>
                    <Routing />
                </div>
            </main>
            <footer className='bg-black p-4 text-white'>
                <div className='container'>
                    <p className='mb-0'>Copyright &copy; 2023</p>
                </div>
            </footer>

        </>
    )
}

export default MainLayout
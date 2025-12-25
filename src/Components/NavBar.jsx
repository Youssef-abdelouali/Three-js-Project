import React from 'react'
import { navLinks } from '../Constants/navLinks';

const NavBar = () => {
  return (
    <header className=''>

        <nav className="flex p-4 justify-between items-center w-[90%] mx-auto">
            <img src="/logo.svg" alt="Logo" />
            <ul className='text-white'>
                {
                  navLinks.map((link) => (
                        <li key={link.label} className="inline-block mx-4">
                            <a href="#">{link.label}</a>
                        </li>
                    
                    ))
                }
            </ul>
            <div className='flex items-center gap-3'>
                <button>
                    <img src="/search.svg" alt="Search" />
                </button>
                <button>
                    <img src="/cart.svg" alt="Cart" />
                </button>
                
            </div>
        </nav>
    </header>
  )
}

export default NavBar
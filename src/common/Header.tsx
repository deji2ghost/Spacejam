import { Link, NavLink } from "react-router-dom"
import { nav } from "../data/data"
import { useState } from "react"

export const Header = () => {
    const [ showNav, setShowNav ] = useState(false)
    console.log(nav)
  return (
    <div className="flex items-center justify-between py-2 px-8 md:px-0 md:py-8">
        <img src="image/shared/logo.svg" className="object-contain md:ml-9"/>

        <nav className="hidden bg-slate backdrop-blur-xl md:flex md:gap-5 md:px-10">
            {
                nav.map(list => {
                    return(
                        <NavLink to={list.link} key={list.id} className={ ({isActive}) => isActive ? 'border-b-4 border-[#fff] cursor-pointer flex items-center gap-3 py-6 pr-12' : 'cursor-pointer flex items-center gap-3 py-6 pr-12'}>
                            <p>0{list.id}</p>
                            <p>{list.name}</p>
                        </NavLink>
                    )
                })
            }
        </nav>
        <div onClick={() => setShowNav(!showNav)} className="md:hidden">{ !showNav ? <img src="image/shared/icon-hamburger.svg"/> : <img src="image/shared/icon-close.svg"/>}</div>
        <nav className={`${ showNav ? 'transform translate-x-0' : 'transform translate-x-full'} duration-300 ease-in-out transition-all backdrop-blur-xl md:hidden fixed top-0 right-0 h-screen px-6`}>
            <div onClick={() => setShowNav(!showNav)} className="md:hidden flex justify-end"><img className="py-4 w-[28px]" src="image/shared/icon-close.svg"/></div>
            {
                nav.map(list => {
                    return(
                        <NavLink to={list.link} key={list.id} className={ ({isActive}) => isActive ? 'border-b border-[#fff] cursor-pointer flex items-center gap-3 py-6 pr-12 font-semibold text-xl' : 'cursor-pointer flex items-center gap-3 py-6 pr-12 font-semibold text-xl'}>
                            <p>0{list.id}</p>
                            <p>{list.name}</p>
                        </NavLink>
                    )
                })
            }
        </nav>
    </div>
  )
}

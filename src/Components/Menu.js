import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {navbar} from '../data/navbar'

export const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [links, setLinks] = useState(navbar)

    return (
        <>
            <div className="menu-btn">
                <button onClick={() => {
                    setIsOpen(!isOpen)
                }}>
                    <BiMenuAltRight />
                </button>
            </div>


            <header className={`${isOpen ? "header open" : "header"}`}>
                <nav>
                    <ul>
                        {/* clicking the navbar button that should hide 
                        ie set isOpen to false you will need to
                        copy paste same function to all li elements
                        below code is to solve that issue */}
                        {links.map((link)=>{
                            const {id,title,url}=link
                            return (
                                <li key={id} onClick={()=>setIsOpen(false)}>
                                    <Link to={url}>{title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

            </header>
        </>
    )
}

import { faBars, faBriefcase, faCode, faContactBook, faGlasses, faHouse, faSearch, faShoppingCart, faSquarePollVertical, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"
import { NavLink } from "react-router-dom"




const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const handleOpen = () => {
        setOpenMenu(true);
    }
    const handleClose = () => {
        setOpenMenu(false);
    }
    window.onscroll = () => {
        setOpenMenu(false);
    }
    window.onload = () =>{
        setOpenMenu(false);
    }
    return (
        <header className="header">
            <NavLink
                to="/" 
                className="logo"
            > 
                
                <FontAwesomeIcon className="icon" icon={faGlasses}/>
                glasses<span>shop</span>
            </NavLink>
            <nav className="navbar">
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="nosotros">Nosotros</NavLink></li>
                    <li><NavLink to="#">productos</NavLink>
                        <ul>
                            <li><NavLink to="productos/monofocales">monofocales</NavLink></li>
                            <li><NavLink to="productos/bifocales">bifocales</NavLink></li>
                            {/* <li><a href="bifocales">multifocales</a></li>
                            <li><a href="bifocales">orgánicos</a></li> */}
                        </ul>
                    </li>
                    <li><NavLink to="#">Contacto</NavLink></li>

                </ul>
            </nav>

            <form action="" className="search-form">
                <input type="search" name="" placeholder="Busca aquí..." id="search-box"/>
                <label >
                    <FontAwesomeIcon className="icon" icon={ faSearch } />
                </label>
            </form>

            <div className="icons">
                <FontAwesomeIcon className="icon" icon={faBars} />
                <FontAwesomeIcon className="icon" icon={faSearch} />
                <FontAwesomeIcon className="icon" icon={faShoppingCart} />

            </div>

            
        </header>
    )
}

export default Header;
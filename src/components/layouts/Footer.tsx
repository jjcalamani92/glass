import { faFacebookF, faLinkedin, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavLink } from "react-router-dom"

export const Footer = () => {
    return (
    <section className="footer">
        <div className="box-container">
            <div className="box">
                <h3>links directos</h3>
                <NavLink className="links" to="/">Inicio</NavLink>
                <NavLink className="links" to="/nosotros">Nosotros</NavLink>
                <NavLink className="links" to="/servicios">Servicios</NavLink>
                <NavLink className="links" to="/proyectos">Proyectos</NavLink>
                <NavLink className="links" to="/precios">Precios</NavLink>
                <NavLink className="links" to="/contacto">Contacto</NavLink>
                <NavLink className="links" to="/blogs">Blogs</NavLink>
            </div>
            <div className="box">
                <h3>horario de atención</h3>
                <p> lunes : <i> 7:00am - 10:30pm </i> </p>
                <p> martes : <i> 7:00am - 10:30pm </i> </p>
                <p> miercoles : <i> 7:00am - 10:30pm </i> </p>
                <p> viernes : <i> 7:00am - 10:30pm </i> </p>
                <p> sabado : <i> 7:00am - 12:00pm </i> </p>
                <p> domingo : <i> cerrado </i> </p>
            </div>
            <div className="box">
                <h3>Contacto</h3>
                <p> <FontAwesomeIcon className="icon" icon={faPhone} /> +591 68175851 </p>
                <p> <FontAwesomeIcon className="icon" icon={faPhone} /> +591 68175851 </p>
                <p> <FontAwesomeIcon className="icon" icon={faEnvelope} /> info@jjwebdevelopment.com </p>
                <p> <FontAwesomeIcon className="icon" icon={faMap} /> la paz, BOLIVIA </p>
                <div className="share">
                    <a href="#"> <FontAwesomeIcon className="icon" icon={faFacebookF} /> </a>
                    <a href="#"> <FontAwesomeIcon className="icon" icon={faTwitter} /> </a>
                    <a href="#"> <FontAwesomeIcon className="icon" icon={faLinkedin} /> </a>
                </div>
            </div>
            <div className="box">
                <h3>Nuevas noticias</h3>
                <p>suscribete para estar actualizado</p>
                <form action="">
                    <input type="email" name="" className="email" placeholder="ingresa tu email"/>
                    <input type="submit" value="suscribirse" className="btn"/>
                </form>
            </div>
        </div>
    </section>
)
}

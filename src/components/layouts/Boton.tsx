import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Boton = ( props:any ) => {
    const { title, titleI, className , handleclick } = props;
    return (
        <button 
            className={`${ className }`}
            onClick={ handleclick }
        >
            <span> { title } </span> { titleI }
            <FontAwesomeIcon className="icon" icon={faUser} />
            
        </button>
    )
}

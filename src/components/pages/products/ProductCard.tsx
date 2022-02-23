import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShare, faShoppingCart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
    title: String
    image: String
};
export const ProductCard = ({title, image }:Props) => {

    return (
        <div className="box">
            <div className="image">
                <div className="icons">
                    <a href="#"> <FontAwesomeIcon className='icon' icon={faShoppingCart} /> </a>
                    <a href="#"> <FontAwesomeIcon className='icon' icon={faShare} /> </a>
                    <a href="#"> <FontAwesomeIcon className='icon' icon={faEye} /> </a>
                </div>                
                <img src={`${image}`} alt={`${title}`}/>
            </div>
            <div className="content">
                <h3>{title}</h3>
                <div className="stars">
                    <FontAwesomeIcon className='icon' icon={faStar} />
                    <FontAwesomeIcon className='icon' icon={faStar} />
                    <FontAwesomeIcon className='icon' icon={faStar} />
                    <FontAwesomeIcon className='icon' icon={faStar} />
                    <FontAwesomeIcon className='icon' icon={faStarHalfAlt} />
                </div>
                <div className="price">$20.00 <span>$25.00</span></div>
            </div>
        </div>
    )
}

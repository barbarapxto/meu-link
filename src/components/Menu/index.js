import './menu.css';
import { BsInstagram, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Menu(){
    return(
        <div className="menu"> 
            <a className="social" target="_blank" rel="noreferrer" href="https://youtube.com/c/sujeitoprogramador">
                <BsYoutube size={24} color="#fff"/>
            </a>
            
            <a className="social" target="_blank" rel="noreferrer" href="https://instagram.com/sujeitoprogramador">
                <BsInstagram size={24} color="#fff"/>
            </a>
            
            <Link className="menu-button" to="/links">Meus Links</Link>
        </div>
    )
}

export default Menu;
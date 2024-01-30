import './Navbar.sass';
import urlLogo from '../../assets/25-512.png';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='logoContainer'>
                <img src={urlLogo} alt='Logo' className='navbar_logo' />
            </div>
            <div className='navLine'></div>
            <div className='navLinks'> 
                <NavLink className='navLink' to='/'>00 HOME</NavLink>
                <NavLink className='navLink' to='/destination'>01 DESTINATION</NavLink>
                <NavLink className='navLink' to='/crew'>02 CREW</NavLink>
                <NavLink className='navLink' to='/technology'>03 TECHNOLOGY</NavLink>
            </div>
        </div>
    );
}
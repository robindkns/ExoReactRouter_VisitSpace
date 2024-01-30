import './Destination.sass';
import { Outlet, NavLink } from 'react-router-dom';

export default function Destination() {
    return (
        <div className='destination'>
            <div className="destinationBg"></div>
            <div className='destinationContainer'>
                <div className='destinationHeader'>
                    <span className='spanDesti'>01</span> PICK YOUR DESTINATION
                </div>
            </div>
            <div className='destinationContent'>
                <div className='destinationBlank'>
                    
                </div>
                <div className='destinationNav'>
                    <NavLink className="linkDesti" to='/destination/Moon'>MOON</NavLink>
                    <NavLink className="linkDesti" to='/destination/Mars'>MARS</NavLink>
                    <NavLink className="linkDesti" to='/destination/Europa'>EUROPA</NavLink>
                    <NavLink className="linkDesti" to='/destination/Titan'>TITAN</NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    );
}
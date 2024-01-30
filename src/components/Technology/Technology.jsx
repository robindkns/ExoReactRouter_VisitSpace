import { NavLink,Outlet } from 'react-router-dom';
import './Technology.sass';

export default function Technology() {
    return (
        <div className='technology'>
            <div className="techBg"></div>
            <div className='techHeader'>
                <span className='spanTech'>03</span> SPACE LAUNCH 101
            </div>
            <div className='techBody'>
                <div className="navTechContainer">
                    <NavLink className="navTech" to="/technology/1">1</NavLink>
                    <NavLink className="navTech" to="/technology/2">2</NavLink>
                    <NavLink className="navTech" to="/technology/3">3</NavLink>
                </div>
                <div className="techTextContainer">
                    <span className='techTextSpan'>THE TERMINOLOGY...</span>
                    <h1 className='h1Tech'>LAUNCH VEHICLE</h1>
                    <p className='pTech'>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                </div>
                <div className="techImgContainer">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
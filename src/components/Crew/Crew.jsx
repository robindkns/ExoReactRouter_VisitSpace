import './Crew.sass';
import { NavLink,Outlet } from 'react-router-dom';

export default function Crew() {
    return (
        <div className='crew'>
            <div className="crewBg"></div>
            <div className="crewHeader">
                <span className='spanCrew'>02</span> MEET YOUR CREW
            </div>
            <div className="crewBody">
                <div className="crewTextContainer">
                    <div className='crewText'>
                        <h2 className='h2Crew'>COMMANDER</h2>
                        <h1 className='h1Crew'>DOUGLAS HURLEY</h1>
                        <p className='pCrew'>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2</p>
                    </div>
                    <div className='crewLinks'>
                        <NavLink className='crewLink' to='/crew/perso1'></NavLink>
                        <NavLink className='crewLink' to='/crew/perso2'></NavLink>
                        <NavLink className='crewLink' to='/crew/perso3'></NavLink>
                        <NavLink className='crewLink' to='/crew/perso4'></NavLink>
                    </div>
                </div>
                <div className="crewImgContainer">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
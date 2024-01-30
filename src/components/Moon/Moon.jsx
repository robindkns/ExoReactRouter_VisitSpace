import urlMoon from "../../assets/moon.png"

export default function Moon() {
    return (
        <div className='PlanetChild'>
            <div className="PlanetImg"><img src={urlMoon} alt="PlaneteMoon" /></div>
            <div className="PlanetCol">
                <h1 className="PlanetTitle">MOON</h1>
                <p className="pPlanet">
                    See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <div className="hr"></div>
                <div className="planetFooter">
                    <div className="PlanetTime">
                        <p>EST. TIME TRAVEL</p>
                        <span className="spanPlanet">3 DAYS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
import urlEuropa from "../../assets/europa.png"

export default function Europa() {
    return (
        <div className='PlanetChild'>
            <div className="PlanetImg"><img src={urlEuropa} alt="PlaneteEuropa" /></div>
            <div className="PlanetCol">
                <h1 className="PlanetTitle">EUROPA</h1>
                <p className="pPlanet">
                    The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it is perfect for ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.
                </p>
                <div className="hr"></div>
                <div className="planetFooter">
                    <div className="PlanetTime">
                        <p>EST. TIME TRAVEL</p>
                        <span className="spanPlanet">3 YEARS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
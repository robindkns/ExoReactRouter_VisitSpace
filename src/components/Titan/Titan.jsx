import urlTitan from "../../assets/titan.png"

export default function Europa() {
    return (
        <div className='PlanetChild'>
            <div className="PlanetImg"><img src={urlTitan} alt="PlaneteTitan" /></div>
            <div className="PlanetCol">
                <h1 className="PlanetTitle">TITAN</h1>
                <p className="pPlanet">
                    The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.
                </p>
                <div className="hr"></div>
                <div className="planetFooter">
                    <div className="PlanetTime">
                        <p>EST. TIME TRAVEL</p>
                        <span className="spanPlanet">7 YEARS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
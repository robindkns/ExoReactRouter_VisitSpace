import urlMars from "../../assets/mars.png"

export default function Mars() {
    return (
        <div className='PlanetChild'>
            <div className="PlanetImg"><img src={urlMars} alt="PlaneteMars" /></div>
            <div className="PlanetCol">
                <h1 className="PlanetTitle">MARS</h1>
                <p className="pPlanet">
                    Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetery mountain in our solar system. It's two and a half times the size of Everest!
                </p>
                <div className="hr"></div>
                <div className="planetFooter">
                    <div className="PlanetTime">
                        <p>EST. TIME TRAVEL</p>
                        <span className="spanPlanet">9 MONTHS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
import './App.sass';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Error from './components/Error/Error.jsx';
import Destination from './components/Destination/Destination.jsx';
import Crew from './components/Crew/Crew.jsx';
import Technology from './components/Technology/Technology.jsx';
import Moon from './components/Moon/Moon.jsx';
import Mars from './components/Mars/Mars.jsx';
import Europa from './components/Europa/Europa.jsx';
import Titan from './components/Titan/Titan.jsx';
import Perso1 from './components/Perso1/Perso1.jsx';
import Perso2 from './components/Perso2/Perso2.jsx';
import Perso3 from './components/Perso3/Perso3.jsx';
import Perso4 from './components/Perso4/Perso4.jsx';
import Step1 from './components/Step1/Step1.jsx';
import Step2 from './components/Step2/Step2.jsx';
import Step3 from './components/Step3/Step3.jsx';


function App() {
    return (
        <div className='App'>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/destination" element={<Destination />} >
                        <Route index element={<Moon />} />
                        <Route path='/destination/Moon' element={<Moon />} />
                        <Route path='/destination/Mars' element={<Mars />} />
                        <Route path='/destination/Europa' element={<Europa />} />
                        <Route path='/destination/Titan' element={<Titan />} />
                    </Route>
                    <Route path="/crew" element={<Crew />}>
                        <Route index element={<Perso1 />} />
                        <Route path='/crew/Perso1' element={<Perso1 />} />
                        <Route path='/crew/Perso2' element={<Perso2 />} />
                        <Route path='/crew/Perso3' element={<Perso3 />} />
                        <Route path='/crew/Perso4' element={<Perso4 />} />
                    </Route>
                    <Route path="/technology" element={<Technology />}>
                        <Route index element={<Step1 />} />
                        <Route path='/technology/1' element={<Step1 />} />
                        <Route path='/technology/2' element={<Step2 />} />
                        <Route path='/technology/3' element={<Step3 />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;


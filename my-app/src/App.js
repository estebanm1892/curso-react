
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Eva from './components/Eva';
import Totk from './components/Totk';
import Unplash from './components/Unplash';
import Wallpaper1 from './components/Wallpaper1';
import Navigate from './components/Navigate';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 className='text-center mt-3 mb-3 text-white'>Galeria</h1>
      </div>
      <Routes>
        <Route path="/Eva" Component={Eva} />
        <Route path="/Totk" Component={Totk} />
        <Route path="/Unplash" Component={Unplash} />
        <Route path="/Wallpaper1" Component={Wallpaper1} />

      </Routes>
      
      <Navigate />


    </Router>
  );
}

export default App;

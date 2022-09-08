import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  Routes,
  Route,
  HashRouter
} from 'react-router-dom';

import NotFound from './routes/notfound';

import Character from './routes/character';
import Classes from './routes/character/classes';
import Races from './routes/character/races';

import warrior_data from './data/classes/warrior.json'
import rogue_data from './data/classes/rogue.json'

import Class from './routes/class';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="character" element={<Character />} />
      <Route path="magic" element={<App />} />
      <Route path="extra" element={<App />} />

      <Route path="/character/classes" element={<Classes />} />
      <Route path="/character/classes/warrior" element={<Class data={warrior_data} />} />


      <Route path="/character/races" element={<Races />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
);

reportWebVitals();

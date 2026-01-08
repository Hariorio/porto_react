
import {Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';

export default function App() {
return (
  <div>
    <Routes>
      <Route path='/' Component={HomePage}/>
    </Routes>
  </div> 
    
  )
}


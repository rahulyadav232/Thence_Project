import './App.css';
import EndPage from './components/End_Page/End_Page';
import Home from './components/Home/Home';
import RegistrationForm from './components/Registration/Registration_form';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/registration' element={<RegistrationForm/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/endpage' element={<EndPage/>} />

        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

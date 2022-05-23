import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import HomePage from './pages/HomePage';

//components
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className='Body'>
          <Routes>
            <Route exact path='/' element={<HomePage />} />
          </Routes>

        </div>
      </div>
    </Router>

  );
}

export default App;

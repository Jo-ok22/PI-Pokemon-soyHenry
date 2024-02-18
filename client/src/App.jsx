import './App.css';
import LandingPage from './components/landing/LandingPage';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Cards from './components/cards/Cards';
import SearchBar from './components/searchbar/SearchBar';
import { Routes, Route } from 'react-router-dom';

function App() {

  
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<LandingPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail' element={<Detail/>}/>
        <Route path='/form' element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;

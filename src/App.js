import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addblood from './components/Addblood';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Addblood/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

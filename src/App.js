import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/card';
import Login from './pages/login/login';
import MainPage from './pages/mainPage/mainPage';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/mainpage" element={<MainPage />}/>
      <Route path='/' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

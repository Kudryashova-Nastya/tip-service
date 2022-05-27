import './App.css';
import MainPage from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from './components/RegistrationPage/RegistrationPage';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registration" element={<RegistrationPage/>}/>
        </Routes>
    </>
  );
}

export default App;

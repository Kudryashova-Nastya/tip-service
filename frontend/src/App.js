import './App.css';
import MainPage from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import AccountEmployees from './components/AccountEmployees/AccountEmployees';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/account_employees" element={<AccountEmployees/>}/>
        </Routes>
    </>
  );
}

export default App;

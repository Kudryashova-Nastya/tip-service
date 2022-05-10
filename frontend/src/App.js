import './App.css';
import MainPage from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </>
  );
}

export default App;

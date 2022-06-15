import './App.css';
import MainPage from "./components/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import ComponentWithHeader from "./components/ComponentWithHeader";
import LeaderPage from "./components/LeaderPage/LeaderPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/" element={<ComponentWithHeader />}>
                <Route path="leader/" element={<LeaderPage />} />
                {/*<Route path="leader/add-branch" element={<AddBranch />} />*/}
                {/*<Route path="leader/edit-branch" element={<EditBranch />} />*/}
                {/*<Route path="leader/add-staff" element={<AddStaff />} />*/}
                {/*<Route path="leader/edit-staff" element={<EditStaff />} />*/}
                {/*<Route path="leader/edit" element={<EditLeader />} />*/}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>
  );
}

export default App;

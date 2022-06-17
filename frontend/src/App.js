import './App.css';
import MainPage from "./components/MainPage/MainPage";
import {Route, Routes, Navigate} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import RegistrationPage from './components/RegistrationPage/RegistrationPage';
import ComponentWithHeader from "./components/ComponentWithHeader";
import LeaderPage from "./components/LeaderPage/LeaderPage";
import {observer} from "mobx-react";
import helper from "./store/helper";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import AccountEmployees from "./components/AccountEmployees/AccountEmployees";

const App = observer(() => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/" element={helper._token ? <ComponentWithHeader/> : <Navigate to="/login" replace />} >
                    {/*<Route path="/" element={<ComponentWithHeader/> } >*/}
                        <Route path="leader/" element={<LeaderPage/>}/>
                        {/*<Route path="leader/add-branch" element={<AddBranch />} />*/}
                        {/*<Route path="leader/edit-branch" element={<EditBranch />} />*/}
                        {/*<Route path="leader/add-staff" element={<AddStaff />} />*/}
                        {/*<Route path="leader/edit-staff" element={<EditStaff />} />*/}
                        {/*<Route path="leader/edit" element={<EditLeader />} />*/}
                        <Route path="employee/" element={<AccountEmployees />} />
                    </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
});

export default App;

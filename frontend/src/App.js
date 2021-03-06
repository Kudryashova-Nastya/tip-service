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
import StaffRegistrationPage from "./components/StaffRegistrationPage/StaffRegistrationPage";
import AddBranchPage from "./components/AddBranchPage/AddBranchPage";
import EditBranchPage from "./components/EditBranchPage/EditBranchPage";
import EditStaffPage from "./components/EditStaffPage/EditStaffPage";
import EditLeaderPage from "./components/EditLeaderPage/EditLeaderPage";

const App = observer(() => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/registration" element={<RegistrationPage/>}/>
                    {/*<Route path="/" element={helper._token ? <ComponentWithHeader/> : <Navigate to="/login" replace />} >*/}
                    <Route path="/" element={<ComponentWithHeader/> } >
                        <Route path="leader/" element={<LeaderPage/>}/>
                        <Route path="leader/add-branch" element={<AddBranchPage />} />
                        <Route path="leader/edit-branch" element={<EditBranchPage />} />
                        <Route path="leader/add-staff" element={<StaffRegistrationPage />} />
                        <Route path="leader/edit-staff" element={<EditStaffPage />} />
                        <Route path="leader/edit" element={<EditLeaderPage />} />
                        <Route path="employee/" element={<AccountEmployees />} />
                    </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
});

export default App;

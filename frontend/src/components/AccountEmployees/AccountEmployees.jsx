import React, {Component} from "react";
import UserInfo from "./UserInfo/UserInfo";
import Statistics from "./Statistics/Statistics";
import History from "./History/History";
import StaffStore from "../../store/StaffStore";


class AccountEmployees extends Component {

    render(){
        return (
            <div className="app">
                <UserInfo/>
                <Statistics/>
            </div>
        )
    }
}

export default AccountEmployees;
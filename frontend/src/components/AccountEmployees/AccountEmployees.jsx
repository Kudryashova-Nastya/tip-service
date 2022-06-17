import React, {Component} from "react";
import UserInfo from "./UserInfo/UserInfo";
import Statistics from "./Statistics/Statistics";
import History from "./History/History";


class AccountEmployees extends Component {

    render(){
        return (
            <div className="app">
                <UserInfo/>
                <Statistics/>
                <History/>
            </div>
        )
    }
}

export default AccountEmployees;
import {makeAutoObservable, runInAction} from "mobx";
import Helper from "./helper";


class Auth {

    constructor() {
        makeAutoObservable(this)
    }

    login = (data) => {
        return Helper.getToken(data)
    };

    registration = async (data) => {
        const tokenCORS = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }

        const req = await fetch(`${Helper.host}/leader/`, tokenCORS);
        const res = await req.json();

        if (req.ok && res?.detail == null||undefined) {
            const authData = {
                "username": JSON.stringify(data.username),
                "password": JSON.stringify(data.password)
            }
            return Helper.getToken(authData)
        } else {
            runInAction(() => this.isLogged = false)
            return JSON.stringify(res.detail)
        }

    };

    logout = () => {
        Helper.setToken(null)
    };

    getCORS = () => {
        Helper.getTokenFromRefresh().then()
        return Helper.CORS
    };

    getPOSTCORS = () => {
        Helper.getTokenFromRefresh().then()
        return Helper.POSTCORS()
    };


}

export default new Auth();
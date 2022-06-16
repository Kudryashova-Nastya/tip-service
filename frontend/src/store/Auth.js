import { makeAutoObservable } from "mobx";
import Helper from "./helper";


class Auth {

    constructor() {
        makeAutoObservable(this)
    }

    login = (data) => {
        return Helper.getToken(data).then()
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
import { makeAutoObservable } from "mobx";
import Helper from "./helper";


class Auth {

    constructor() {
        makeAutoObservable(this);
    }

    login = (newTokens) => {
        Helper.setToken(newTokens);
    };

    logout = () => {
        Helper.setToken(null);
    };

    getCORS = () => {
        Helper.getToken().then()
        return Helper.CORS
    };

    getPOSTCORS = () => {
        Helper.getToken().then()
        return Helper.POSTCORS()
    };


}

export default new Auth();
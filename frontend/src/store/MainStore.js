import {makeAutoObservable, runInAction} from "mobx";
import helper from "./helper";

const host = helper.host;

class MainStore {

    constructor() {
        makeAutoObservable(this);
    }

    errorAuth = null

    addRequest = async (data) => {

        // const POSTCORS = Auth.getPOSTCORS(data)
        const POSTCORS = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const req = await fetch(`${host}/payment/`, POSTCORS);
        const res = await req.json()
        if (res?.detail !== null) {
            runInAction(() => {
                this.errorAuth = JSON.stringify(res?.detail)
            });
            console.log(JSON.stringify(res?.detail))
        }
    };

}

export default new MainStore();

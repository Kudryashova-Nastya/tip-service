import {makeAutoObservable, runInAction} from "mobx";


class Helper {

    constructor() {
        makeAutoObservable(this);
    }

    // Токен в формате
    //{
    //   "refresh": "...",
    //   "access": "..."
    // }
    _token = JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH')) || null;

    // host = "http://tip.std-1305.ist.mospolytech.ru/api/v1"
    host = "http://127.0.0.1:8000/api/v1"


    POSTCORS = (data) => {
        return ({
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this._token?.access}`,
            }
        })
    }

    CORS = {
        headers: {
            "Authorization": `Bearer ${this._token?.access}`,
        },
    };

    // узнать дату окончания жизни токена
    getExpirationDate = (jwtToken = null) => {
        if (jwtToken === null) {
            return null;
        }

        const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

        // multiply by 1000 to convert seconds into milliseconds
        return jwt.exp * 1000 || null;
    };

    // узнать не просрочен ли токен
    isExpired = (exp = null) => {
        if (!exp) {
            return false;
        }

        return Date.now() > exp;
    };

    getToken = async (data) => {
        if (!data) {
            return null;
        }

        const tokenCORS = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        }

        const req = await fetch(`${this.host}/token/`, tokenCORS);
        const res = await req.json();
        console.log(JSON.stringify(res.detail))
        console.log(res.detail)
        console.log(data)
        console.log(req.ok)
        if (req.ok && res?.detail == null) {
            this.setToken(res);
            this.isLoggedIn()
            return false
        } else {
            runInAction(() => this.isLogged = false)
            return JSON.stringify(res.detail)
        }
    }

    getTokenFromRefresh = async () => {
        if (!this._token) {
            return null;
        }

        if (this.isExpired(this.getExpirationDate(this._token.access))) {
            const POSTCORS = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: {
                    "refresh": JSON.stringify(this._token.refresh)
                }
            }
            const updatedToken = await fetch(`${this.host}/token/refresh/`, POSTCORS).then(r => r.json());

            this.setToken(updatedToken);
            this.isLoggedIn()
        } else {
            runInAction(() => this.isLogged = false)
        }
    };

    isLoggedIn = () => {
        runInAction(() => this.isLogged = !!this._token)
    };

    setToken = (token) => {
        if (token) {
            localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
        } else {
            localStorage.removeItem('REACT_TOKEN_AUTH');
        }
        this._token = token;
        this.isLoggedIn()
    };

}

export default new Helper();

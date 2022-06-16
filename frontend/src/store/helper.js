import {makeAutoObservable} from "mobx";


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

    host = "127.0.0.1:8000/api/v1"


    POSTCORS = (data) => {
        return ({
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this._token}`,
            }
        })
    }

    CORS = {
        headers: {
            "Authorization": `Bearer ${this._token}`,
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

    getToken = async () => {
        if (!this._token) {
            return null;
        }

        if (this.isExpired(this.getExpirationDate(this._token.access))) {
            const updatedToken = await fetch(`${this.host}/token/refresh/`, {
                method: 'POST',
                body: {
                    "refresh": this._token.refresh
                }
            }).then(r => r.json());

            this.setToken(updatedToken);
        }
    };

    isLoggedIn = () => {
        return !!this._token;
    };

    setToken = (token) => {
        if (token) {
            localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
        } else {
            localStorage.removeItem('REACT_TOKEN_AUTH');
        }
        this._token = token;
    };

}

export default new Helper();

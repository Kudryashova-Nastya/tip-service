import { makeAutoObservable, runInAction } from "mobx";
import Auth from "./Auth";
import helper from "./helper";

const host = helper.host;

class LeaderStore {

  constructor() {
    makeAutoObservable(this);
  }

  ledInfo = null;

  fetchInfo = async (id) => {
    const CORS = Auth.getCORS()
    const ledReq = await fetch(`${host}/leader/${id}`, CORS);
    const ledRes = await ledReq.json();
    if (ledReq.ok && ledRes !== null) {
      runInAction(() => {
        this.ledInfo = {
          id: ledRes.id,
          first_name: ledRes.first_name,
          last_name: ledRes.last_name,
          phone: ledRes.phone,
        };

      });
    }
  };

}

export default new LeaderStore();

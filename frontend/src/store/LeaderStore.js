import { makeAutoObservable, runInAction } from "mobx";
import { getHostInformation, CORS } from "./helper";

const host = getHostInformation();

class LeaderStore {

  constructor() {
    makeAutoObservable(this);
  }

  ledInfo = null;

  fetchInfo = async (id) => {
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

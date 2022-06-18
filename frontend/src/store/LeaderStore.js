import { makeAutoObservable, runInAction } from "mobx";
import Auth from "./Auth";
import helper from "./helper";

const host = helper.host;

class LeaderStore {

  constructor() {
    makeAutoObservable(this);
  }

  ledInfo = {
    id: 1,
    first_name: "Олег Алексеевич",
    last_name: "Нечипоренко",
    phone: "+7(495)-666-66-66",
    user: "leader1"
  };

  branchInfo = {
    id: 1,
    name: "Филиал №1",
    address: "г. Москва, м. ВДНХ",
    leader: "Нечипоренко Олег Алексеевич",
    organization: 'ООО "Шоколадница"'
  };

  staffInBranchInfo = [{
    id: 1,
    first_name: "Валерий Валерьевич",
    last_name: "Жмышенко",
    card_number: "6666 6666 6666 6666",
    user: "staff1",
    id_branch: 1
  },
    {
      id: 2,
      first_name: "Валерия Валерьевна",
      last_name: "Жмых",
      card_number: "6666 6666 6666 6667",
      user: "my Love",
      id_branch: 1
    }];

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

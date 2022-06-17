import { makeAutoObservable, runInAction } from "mobx";
import Auth from "./Auth";
import helper from "./helper";

const host = helper.host;

class StaffStore {

  constructor() {
    makeAutoObservable(this);
  }

  staffInfo = {
    id: 1,
    first_name: "Валерий Валерьевич",
    last_name: "Жмышенко",
    card_number: "6666 6666 6666 6666",
    user: "staff1",
    id_branch: 1
  };

  paymentsInfo = [{
    id: 1,
    staff_id: 1,
    sum_tea: 349,
    data: '23-05-2022',
    rating: 4,
    review: "АААААААаааааа"
  },{
    id: 2,
    staff_id: 1,
    sum_tea: 50,
    data: '16-06-2022',
    rating: 5,
    review: "Да трэш"
    }]


  // fetchInfo = async (id) => {
  //   const CORS = Auth.getCORS()
  //   const ledReq = await fetch(`${host}/leader/${id}`, CORS);
  //   const ledRes = await ledReq.json();
  //   if (ledReq.ok && ledRes !== null) {
  //     runInAction(() => {
  //       this.ledInfo = {
  //         id: ledRes.id,
  //         first_name: ledRes.first_name,
  //         last_name: ledRes.last_name,
  //         phone: ledRes.phone,
  //       };
  //
  //     });
  //   }
  // };

}

export default new StaffStore();

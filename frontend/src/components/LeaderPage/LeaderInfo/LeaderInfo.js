import React, {Component} from "react";
import avatar from '../../../media/ВАЛЕРИЙ.jpg'
import edit from "../../../media/edit.png";


class LeaderInfo extends Component{

    render(){

        return (
            <div>
                <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center h-20'>
                    <div className="data col-start-4 col-span-2 md:grid-cols-1">
                        <span className="data">Ваши данные</span>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center'>
                    <div className="w-full grid grid-cols-1 col-start-4 col-span-6">
                        <div className="card_staff p-6 grid grid-cols-1 md:grid-cols-12">
                            <div className="col-start-1 col-span-9 items-center md:grid-cols-1 pl-7">
                                <h2 className="staff_name mb-1">Колтунов Ростислав Маратович</h2>
                                <p className="mb-1">Организация: ООО "Шоколадница"</p>
                                <p className="mb-1">Телефон: +7(495)-666-66-66</p>
                                <p className="mb-1">Логин: user1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeaderInfo;
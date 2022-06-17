import React, {Component} from "react";
import {Link} from "react-router-dom";
import './UserInfo.css'
import avatar from '../../../media/ВАЛЕРИЙ.jpg'


class UserInfo extends Component{

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
                                    <h2 className="staff_name mb-1">Жмышенко Валерий Валерьевич</h2>
                                    <p className="mb-1">Организация: ООО "Шоколадница"</p>
                                    <p className="mb-1">Филиал 1</p>
                                    <p className="mb-1">Руководитель: Иванов Иван Иванович</p>
                                    <p className="mb-1">Номер карты: 12345678</p>
                                    <p className="mb-1">Логин: user1</p>
                                </div>
                                <div className="block_photo_staff col-start-10 col-span-3 md:grid-cols-1">
                                    <img className="mt-2 photo_staff h-40 w-40 object-cover object-center rounded-full" src={avatar} alt="photo_staff"/>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default UserInfo;
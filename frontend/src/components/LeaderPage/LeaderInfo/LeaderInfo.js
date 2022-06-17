import React, {Component} from "react";
import {observer} from "mobx-react";
import LeaderStore from "../../../store/LeaderStore";
import {Link} from "react-router-dom";
import edit from "../../../media/edit.png";


const LeaderInfo = observer( () =>{

    return (
        <div>
            <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center h-20'>
                <div className="data col-start-4 col-span-2 md:grid-cols-1">
                    <span className="data">Ваши данные</span>
                </div>
                <div className="ml-20 col-start-9 col-span-2 md:grid-cols-1">
                    <Link to="/leader/edit">
                        <div className="round">
                            <img src={edit} className="img-edit" alt="редактировать данные"/>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center'>
                <div className="w-full grid grid-cols-1 col-start-4 col-span-6">
                    <div className="card_staff p-6 grid grid-cols-1 md:grid-cols-12">
                        <div className="col-start-1 col-span-9 items-center md:grid-cols-1 pl-7">
                            <h2 className="staff_name mb-1">{LeaderStore.ledInfo.last_name} {LeaderStore.ledInfo.first_name}</h2>
                            <p className="mb-1">Организация: {LeaderStore.branchInfo.organization}</p>
                            <p className="mb-1">Телефон: {LeaderStore.ledInfo.phone}</p>
                            <p className="mb-1">Логин: {LeaderStore.ledInfo.user}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
)


export default LeaderInfo;
import React, {Component} from "react";
import avatar from '../../../media/ВАЛЕРИЙ.jpg'
import edit from '../../../media/edit.png'
import plus_light from '../../../media/plus-light.png'
import {observer} from "mobx-react";
import {Link} from "react-router-dom";

const StaffInBranch = observer(({staff}) =>{
    return (
        <>
            <div className="staff col-start-2 col-end-13 mb-5 p-6">
                <Link to="/leader/edit-staff">
                    <div className="data col-start-4 col-span-2 md:grid-cols-1 ml-1 mt-5">
                        <img src={edit} className="edit-staff" alt="редактировать сотрудника"/>
                    </div>
                </Link>
                <div className="block_photo_staff float-left">
                    <img className="photo_staff h-28 w-28 object-cover object-center rounded-full"
                         src={avatar} alt="photo_staff"/>
                </div>
                <h2 className="staff_name mb-2">{staff.last_name} {staff.first_name}</h2>
                <p className="mb-2">Номер карты: {staff.card_number}</p>
                <p className="mb-1">Логин: {staff.user}</p>
            </div>
        </>
    )
})

export default StaffInBranch;
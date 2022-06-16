import React, {Component} from "react";
import avatar from '../../../media/ВАЛЕРИЙ.jpg'
import edit from '../../../media/edit.png'
import plus_light from '../../../media/plus-light.png'

class StaffInBranch extends Component{

    render(){

        return (
            <>
               <h5 className="staff-text">Сотрудники</h5>
               <a href="" className="mb-20">
                <div className="data col-start-4 col-span-2 md:grid-cols-1 ml-1 mt-5">
                     <img src={plus_light} className="img-add" alt="добавить сотрудника"/>
                </div>
                   <span className="add-staff">Добавить сотрудника</span>
                </a>
                <div className="staff col-start-2 col-end-13 mb-5 p-6">
                    <a href="">
                        <img src={edit} className="edit-staff" alt="редактировать сотрудника"/>
                    </a>
                    <div className="block_photo_staff float-left">
                        <img className="photo_staff h-28 w-28 object-cover object-center rounded-full"
                             src={avatar} alt="photo_staff"/>
                    </div>
                    <h2 className="staff_name mb-2">Жмышенко Валерий Валерьевич</h2>
                    <p className="mb-2">Организация: ООО "Шоколадница"</p>
                    <p className="mb-1">Телефон: +7(495)-666-66-66</p>
                </div>
            </>
        )
    }
}

export default StaffInBranch;
import React, {Component} from "react";
import avatar from '../../../media/ВАЛЕРИЙ.jpg'
import edit from '../../../media/edit.png'
import plus from '../../../media/plus.png'
import plus_light from '../../../media/plus-light.png'
import StaffInBranch from "../StaffInBranch/StaffInBranch";

class Branches extends Component{

    render(){

        return (
            <>
                <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center h-20'>
                    <div className="data col-start-4 col-span-2 md:grid-cols-1">
                        <span className="data">Филиалы</span>
                    </div>
                </div>
                <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center'>
                    <div className="w-full grid grid-cols-1 col-start-4 col-span-6">
                        <div className="branch pt-6 pl-6 pr-6 grid md:grid-cols-12 items-center">
                            <div className="col-start-1 col-end-13 items-center md:grid-cols-1 pl-7">
                                <div className="round mr-4 float-right">
                                    <a href="/editBranch/{{ branch.id }}">
                                        <img src={edit} className="img-edit" alt="редактировать филиал"/>
                                    </a>
                                </div>
                                <h2 className="staff_name mb-1">Филиал №1 | ООО "ШОКОЛАДНИЦА"</h2>
                                <p className="mb-1">г. Москва, м. ВДНХ</p>
                                {<StaffInBranch/>}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Branches;
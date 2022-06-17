import React from "react";
import edit from '../../../media/edit.png'
import StaffInBranch from "../StaffInBranch/StaffInBranch";
import {observer} from "mobx-react";
import LeaderStore from "../../../store/LeaderStore";
import plus_light from "../../../media/plus-light.png";
import {Link} from "react-router-dom";

const Branches = observer( () =>
{
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
                            <Link className="mb-20" to="/leader/edit-branch">
                                <div className="round mr-4 float-right">
                                    <a href="/editBranch/{{ branch.id }}">
                                        <img src={edit} className="img-edit" alt="редактировать филиал"/>
                                    </a>
                                </div>
                            </Link>
                            <h2 className="staff_name mb-1">{LeaderStore.branchInfo.name} | {LeaderStore.branchInfo.organization}</h2>
                            <p className="mb-1"></p>
                            <h5 className="staff-text">Сотрудники</h5>
                            <Link className="mb-20" to="/leader/add-staff">
                                <div className="data col-start-4 col-span-2 md:grid-cols-1 ml-1 mt-5">
                                    <img src={plus_light} className="img-add" alt="добавить сотрудника"/>
                                </div>
                                <span className="add-staff">Добавить сотрудника</span>
                            </Link>

                            {LeaderStore.staffInBranchInfo.map((staff) => (
                                <StaffInBranch staff={staff} key={staff.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
})


export default Branches;
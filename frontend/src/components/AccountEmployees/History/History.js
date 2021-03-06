import React, {Component} from "react";
import './History.css'
import StaffStore from "../../../store/StaffStore";
import {observer} from "mobx-react";


const History = observer(({payment}) =>{
    return (
        <div>
            <div className='w-full grid grid-cols-1 md:grid-cols-12 mb-5'>
                <div className="w-full grid grid-cols-1 col-start-4 col-span-6">
                    <div className="history grid grid-cols-2 md:grid-cols-12 h-28">
                        <div className="rating col-start-1 col-span-3 md:grid-cols-1 ml-16 mt-6">
                            <p className="">{payment.sum_tea} р</p>
                            <p className="">*****</p>
                        </div>
                        <div className="review_blocks col-start-4 col-span-6 md:grid-cols-1">
                            <p className="review h-10 p-3 mt-9">{payment.review}</p>
                        </div>
                        <div className="date col-start-10 col-span-3 md:grid-cols-1 mt-4 mr-3">
                            <p>{payment.data}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default History;
import React, {Component} from "react";
import {Link} from "react-router-dom";
import './Statistics.css'
import rating from '../../../media/rating.png'
import money from '../../../media/money.png'
import graph from '../../../media/graph.png'
import {observer} from "mobx-react";
import StaffStore from "../../../store/StaffStore";
import History from "../History/History";


const Statistics = observer(() =>{
    return (
        <div>
            <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center h-20'>
                <div className="data col-start-4 col-span-2 md:grid-cols-1">
                    <span className="data">Статистика</span>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center'>
                <div className="w-full grid grid-cols-1 col-start-4 col-span-6">
                    <div className="statistic_staff grid grid-cols-1 items-center md:grid-cols-3 p-5">
                        <div className="my_block col-start-1 col-span-1 items-center md:grid-cols-1">
                            <img className="h-24 w-24 ml-8" src={money} alt="photo_money"/>
                            <p className="mb-1 mt-1">Всего чаевых:</p>
                            <p className="staff_money mb-1">3434 р</p>
                        </div>
                        <div className="col-start-2 col-span-1 items-center md:grid-cols-1">
                            <img className="h-24 w-24 ml-10" src={graph} alt="photo_graph"/>
                            <p className="mb-1 mt-1">Средняя сумма:</p>
                            <p className="staff_money mb-1">298 р</p>
                        </div>
                        <div className="col-start-3 col-span-1 items-center md:grid-cols-1">
                            <img className="h-24 w-24 ml-8" src={rating} alt="photo_rating"/>
                            <p className="mb-1 mt-1">Рейтинг:</p>
                            <p className="staff_money mb-1">4,6</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center h-20'>
                <div className="data col-start-4 col-span-2 md:grid-cols-1">
                    <span className="data">История</span>
                </div>
            </div>
            {StaffStore.paymentsInfo.map((payment) => (
                <History payment={payment} key={payment.id} />
            ))}
        </div>
    )
})



export default Statistics;
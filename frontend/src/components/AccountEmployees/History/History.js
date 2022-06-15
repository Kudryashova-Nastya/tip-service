import React, {Component} from "react";
import './History.css'


class History extends Component{

    render(){

        return (
            <div>
            <div className='w-full grid grid-cols-1 md:grid-cols-12 items-center h-20'>
                <div className="data col-start-2 col-span-2 md:grid-cols-1 ml-14">
                    <span className="data">История</span>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-12 mb-5'>
                <div className="w-full grid grid-cols-1 col-start-4 col-span-6">
                    <div className="history grid grid-cols-2 md:grid-cols-12 h-28">
                        <div className="rating col-start-1 col-span-3 md:grid-cols-1 ml-16 mt-6">
                            <p className="">200 р</p>
                            <p className="">*****</p>
                        </div>
                        <div className="review_blocks col-start-4 col-span-6 md:grid-cols-1">
                            <p className="review h-10 p-3 mt-9">А как какать??</p>
                        </div>
                        <div className="date col-start-10 col-span-3 md:grid-cols-1 mt-4 mr-3">
                            <p>13 марта 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full grid grid-cols-1 md:grid-cols-12'>
                <div className="w-full grid grid-cols-1 col-start-4 col-span-6">
                    <div className="history_light grid grid-cols-2 md:grid-cols-12 h-28">
                        <div className="rating col-start-1 col-span-3 md:grid-cols-1 ml-16 mt-6">
                            <p className="">50 р</p>
                            <p className="">*****</p>
                        </div>
                        <div className="review_blocks col-start-4 col-span-6 md:grid-cols-1">
                           <p className="review_light h-10 p-3 mt-9">Блин четкий пацан ваще</p>
                        </div>
                        <div className="date col-start-10 col-span-3 md:grid-cols-1 mt-4 mr-3">
                            <p>11 декабря 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default History;
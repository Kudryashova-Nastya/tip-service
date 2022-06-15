import React, {Component} from "react";
import '../style.css'
import './style.css'
import NotFoundHeader from "./NotFoundHeader";
import {Link} from "react-router-dom";

class NotFoundPage extends Component {
    render() {
        return (
            <>
                <NotFoundHeader/>
                <div className='notfound-main flex flex-row-reverse justify-center mt-36'>
                    <div className='notfound-main__illustration'>
                        <img className='notfound-main__illustration__image lg:w-80 md:w-72 sm:w-44'
                             src={require('../../media/teacup.png')} alt='TeaCup'/>
                    </div>
                    <div className='notfound-main__text-block flex flex-col justify-center lg:mr-36 md:mr-28 sm:mr-24'>
                        <h2 className='lg:text-9xl md:text-8xl sm:text-5xl text-center font-bold'>
                            УПС!
                        </h2>
                        <p className='lg:text-6xl md:text-5xl sm:text-3xl text-center'>
                            404. Страница не найдена
                        </p>
                        <Link to="/">
                            <button className='notfound-main__button mt-16 text-center'>
                                <p className='lg:text-6xl md:text-4xl sm:text-3xl'>
                                    Вернуться на Главную страницу
                                </p>
                            </button>
                        </Link>

                    </div>

                </div>

            </>
        )
    }

}

export default NotFoundPage;
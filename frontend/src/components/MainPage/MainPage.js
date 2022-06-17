import React, {useState} from "react";
import './main.css'
import './fullpage.css'
import {Link} from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll/lib/anchor-link";

import StarRating from "./StarRating/StarRange";
import {useForm} from "react-hook-form";
import MainStore from "../../store/MainStore";

function MainPage() {
    const [state, setState] = useState({
        starsSelected: 1,
    })

    const change = (starsSelected) => setState({starsSelected});


    const starsSelected = state.starsSelected

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        reset
    } = useForm({
        mode: "onChange"
    })

    const onSubmit = (data) => {
        data = {...data, "rating": starsSelected.toString()}
        MainStore.addRequest(data).then()
        reset()
    }

    return (
        <div id="fullpage">
            <div className="section">
                <button className="button-login">
                    <Link to="/login" className="text-login">Войти</Link>
                    <Link to="/login">
                        <img alt="icon" src={require('../../media/login.png')} className="img-login"/>
                    </Link>
                </button>

                <div className="logo-and-hand">
                    <img alt="icon" src={require('../../media/logo-main.png')} className="img-logo"/>
                    <img alt="icon" src={require("../../media/giving_hand.png")} className="img-giving-hand"/>
                </div>

                <div className="name-and-leaf">
                    <img alt="icon" src={require("../../media/green-tea.png")} className="img-green-tea"/>
                    <div className="text-logo">
                        <span className="text-logo-el">Дай </span>
                        <span className="text-logo-el">на </span>
                        <span className="text-logo-el">Чай</span>
                    </div>
                </div>

                <div className="tips-service-group">
                    <span className="text-tips-service">Сервис перевода чаевых</span>
                    <img alt="icon" src={require("../../media/tips-service.png")} className="img-tips-service"/>
                </div>

                <AnchorLink href='#transfer-money'>
                    <button className="button-transfer-money">
                        <span className="text-transfer-money">Перевести</span>
                        <img alt="icon" src={require("../../media/coins.png")} className="img-transfer-money"/>
                    </button>
                </AnchorLink>

            </div>

            <div className="section">
                <h1 className="second">Наши преимущества:</h1>

                <div className="parent">
                    <div className="column">
                        <figure>
                            <img alt="icon" src={require("../../media/cool.png")} className="img-column"/>
                            <figcaption><p className="text-column">Мы классные</p></figcaption>
                        </figure>
                    </div>

                    <div className="column">
                        <figure>
                            <img alt="icon" src={require("../../media/open-source.png")}
                                 className="img-column"/>
                            <figcaption><p className="text-column">Мы <b><a
                                href="https://github.com/zakhep66/tip_service"
                                className="git-link">open-source</a></b> проект, а значит другие разработчики
                                могут
                                помогать проекту развиваться</p></figcaption>
                        </figure>
                    </div>

                    <div className="column">
                        <figure>
                            <img alt="icon" src={require("../../media/shield.png")} className="img-column"/>
                            <figcaption><p className="text-column">У нас безопасные переводы без комиссии
                                (деньги нигде не хранятся,
                                а переходят сразу от вас к сотруднику)</p></figcaption>
                        </figure>
                    </div>
                </div>
            </div>


            <div className="section">
                <h1>Подключить сотрудников вашего заведения можно всего в пару кликов</h1>
                <div className="line"/>
                <button className="button-registration">
                    <Link to="/registration" className="text-registration">Подключить</Link>
                    <Link to="/registration">
                        <img alt="icon" src={require("../../media/people.png")} className="img-registration"/>
                    </Link>
                </button>
                <div className="reg-steps-num">
                    <p className="step-num">1.</p>
                    <p className="step-num">2.</p>
                    <p className="step-num">3.</p>
                </div>
                <div className="reg-steps">
                    <p className="step">Заполните форму регистрации руководителя</p>
                    <p className="step">Зарегистрируйте вашу организацию и добавьте филиал</p>
                    <p className="step">Добавьте и зарегистрируйте сотрудников</p>
                </div>
                <p className="done">Готово!</p>
                <div className="done-block">
                    <p className="done-details">На чеках в вашем заведении будет печататься QR-код и id
                        сотрудника</p>
                    <p className="done-details">Посетители смогут перейти на наш сайт и через простую форму
                        перевести сотруднику чаевые</p>
                </div>
                <img alt="icon" src={require("../../media/tips-hand.png")} className="tips-hand-img"/>
                <img alt="icon" src={require("../../media/tips-jar.png")} className="tips-jar-img"/>
            </div>

            <div className="section" id="transfer-money">
                <h1 className="last">Перевод чаевых сотруднику</h1>
                <img alt="icon" src={require("../../media/qr-code.png")} className="img-qr"/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {MainStore.errorAuth ?
                        <p className='main-form-error-text mb-3 -mt-4 p-4 rounded-md border border-red-400'>
                            {MainStore.errorAuth}</p> : null}
                    <div className="form-main">
                        <div className="form-col">
                            <label htmlFor="staff">Введите ID сотрудника, указанный на чеке рядом с QR-кодом:</label>
                            <input id="staff" name="staff" type="number" placeholder="ID сотрудника..." min="1"
                                   {...register("staff", {
                                       required: "Это поле обязательное"
                                   })}/>
                            {errors?.staff &&
                                <p className='main-form-error-text mb-3 -mt-4 p-4 rounded-md border border-red-400'>{errors?.staff?.message}</p>}

                            <label htmlFor="sum_tea">Введите сумму чаевых:</label>
                            <input id="sum_tea" type="number" placeholder="cумма..."
                                   {...register("sum_tea", {
                                       required: "Это поле обязательное"
                                   })}
                                   min="1"/>
                            {errors?.sum_tea &&
                                <p className='main-form-error-text mb-3 -mt-4 p-4 rounded-md border border-red-400'>{errors?.sum_tea?.message}</p>}
                        </div>
                        <div className="form-col">
                            <label htmlFor="review">Отзыв на сотрудника:</label>
                            <input id="review" placeholder="комментарий..."
                                   {...register("review", {
                                       required: "Это поле обязательное"
                                   })}/>
                            <label htmlFor="rating">Оценка:</label>
                            <div className="star-rating">
                                <div className="App">
                                    <StarRating starsSelected={starsSelected} totalStars={5} onRate={change}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="button-form" disabled={!isValid}>
                        <span className="text-logo-el">Дать </span>
                        <span className="text-logo-el">на </span>
                        <span className="text-logo-el">Чай</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default MainPage;
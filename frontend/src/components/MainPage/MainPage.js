import React, {Component} from "react";
import {Helmet} from "react-helmet";
import './main.css'
import './fullpage.css'
// import './fullpage.js'
// import './scroll.js'


class MainPage extends Component {
    render() {
        return (
            <>
                <Helmet>
                    {/*<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>*/}
                    {/*<link href={require("./main.css")} rel="stylesheet" type="text/css"/>*/}
                    {/*<link href={require("./fullpage.css")} rel="stylesheet" type="text/css"/>*/}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    {/*<script src="./fullpage.js" type="text/javascript"/>*/}
                    {/*<script src="./scroll.js" type="text/javascript"/>*/}
                </Helmet>
                <div id="fullpage">
                    <div className="section">
                        <button className="button-login">
                            <a href="" className="text-login">Войти</a>
                            <img alt="icon" src={require('../../media/login.png')} className="img-login"/>
                        </button>

                        <div className="logo-and-hand">
                            <img alt="icon" src={require('../../media/logo-main.png')} className="img-logo"/>
                            <img alt="icon" src={require("../../media/giving_hand.png")} className="img-giving-hand"/>
                        </div>

                        <div className="name-and-leaf">
                            <img alt="icon" src={require("../../media/green-tea.png")} className="img-green-tea"/>
                            <div className="text-logo">
                                <span className="text-logo-el">Дай</span>
                                <span className="text-logo-el">на</span>
                                <span className="text-logo-el">Чай</span>
                            </div>
                        </div>

                        <div className="tips-service-group">
                            <span className="text-tips-service">Сервис перевода чаевых</span>
                            <img alt="icon" src={require("../../media/tips-service.png")} className="img-tips-service"/>
                        </div>

                        <button className="button-transfer-money">
                            <a href="#block4" className="text-transfer-money">Перевести</a>
                            <img alt="icon" src={require("../../media/coins.png")} className="img-transfer-money"/>
                        </button>

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
                            <a href="" className="text-registration">Подключить</a>
                            <img alt="icon" src={require("../../media/people.png")} className="img-registration"/>
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

                    <div className="section">
                        <h1 className="last">Перевод чаевых сотруднику</h1>
                        <img alt="icon" src={require("../../media/qr-code.png")} className="img-qr"/>
                        <form method="POST" action="">

                            <div className="form-col">
                                <label htmlFor="review">Отзыв на сотрудника:</label>
                                <input id="review" name="review" placeholder="комментарий..." required/>
                                <label htmlFor="rating">Оценка:</label>
                                <input id="rating" name="rating" type="number" min="1" max="5" step="1"
                                       placeholder="оценка от 1 до 5..." required/>
                            </div>
                            <div className="form-col">
                                <label htmlFor="staff">Введите ID сотрудника, указанный на чеке рядом с
                                    QR-кодом:</label>
                                <input id="staff" name="staff" type="number" placeholder="ID сотрудника..." min="1"
                                       required/>
                                <label htmlFor="sum_tea">Введите сумму чаевых:</label>
                                <input id="sum_tea" name="sum_tea" type="number" placeholder="cумма..." required
                                       min="1"/>
                            </div>

                            <button type="submit" className="button-form">
                                <span className="text-logo-el">Дать</span>
                                <span className="text-logo-el">на</span>
                                <span className="text-logo-el">Чай</span>
                            </button>
                        </form>
                    </div>

                </div>
                {/*<Helmet>*/}
                {/*    <script src="./scroll.js" type="text/javascript"/>*/}
                {/*</Helmet>*/}
            </>
        )
    }
}

export default MainPage;
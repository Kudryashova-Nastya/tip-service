import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../style.css'

class RegistrationPage extends Component {
    render() {
        return (
            <>
                <div className='w-full grid grid-cols-1 md:grid-cols-12 mt-5' style={{marginBottom: '-70px'}}>
                    <div className="w-full grid grid-cols-1 col-start-2 col-span-1">
                        <button type="submit"
                                className="button-loginPage group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                            <Link to="/">Назад</Link>
                        </button>
                    </div>
                </div>
                <div className="min-h-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full space-y-8">
                        <div>
                            <img className="mx-auto h-20 w-auto" src={require('../../media/logo-main.png')} alt="Workflow"/>
                            <h1 className="mt-6 text-center text-3xl font-extrabold">
                            Регистрация руководителя
                            </h1>
                        </div>
                        <form className="mt-8 space-y-6 w-1/3" action="#" method="POST">
                            <div className="rounded-md shadow-sm -space-y-px reg">
                                <div>
                                    <label htmlFor="username" className="sr-only">Логин</label>
                                    <input id="login" name="username" type="login" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Логин"/>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="sr-only">Телефон</label>
                                    <input id="phone" name="phone" type="tel" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Телефон"/>
                                </div>
                                <div>
                                    <label htmlFor="first_name" className="sr-only">Имя и отчество</label>
                                    <input id="first_name" name="first_name" type="text" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Имя и отчество"/>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="sr-only">Фамилия</label>
                                    <input id="last_name" name="last_name" type="text" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Фамилия"/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Пароль</label>
                                    <input id="password" name="password" type="password" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:z-10 sm:text-sm" placeholder="Пароль"/>
                                </div>
                                <div>
                                    <label htmlFor="confirm_password" className="sr-only">Подтверждение пароля</label>
                                    <input id="confirm_password" name="confirm_password" type="password" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Пароль ещё раз"/>
                                </div>
                            </div>
                            <div>
                                <button type="submit"
                                        className="button-loginPage group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                           fill="currentColor"
                                           aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                              clipRule="evenodd"/>
                                      </svg>
                                    </span>
                                    Зарегистрироваться
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        )
    }
}

export default RegistrationPage;
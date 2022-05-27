import React, {Component} from "react";
import {Link} from "react-router-dom";
import '../style.css'

class RegistrationPage extends Component {
    render() {
        return (
            <>
                <div class="min-h-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div class="w-full space-y-8">
                        <div>
                            <img className="mx-auto h-20 w-auto" src={require('../../media/logo-main.png')} alt="Workflow"/>
                            <h1 class="mt-6 text-center text-3xl font-extrabold">
                            Регистрация руководителя
                            </h1>
                        </div>
                        <form class="mt-8 space-y-6 w-1/3" action="#" method="POST">
                            <div class="rounded-md shadow-sm -space-y-px reg">
                                <div>
                                    <label for="username" class="sr-only">Логин</label>
                                    <input id="login" name="username" type="login" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Логин"/>
                                </div>
                                <div>
                                    <label for="phone" class="sr-only">Телефон</label>
                                    <input id="phone" name="phone" type="tel" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Телефон"/>
                                </div>
                                <div>
                                    <label for="first_name" class="sr-only">Имя и отчество</label>
                                    <input id="first_name" name="first_name" type="text"required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Имя и отчество"/>
                                </div>
                                <div>
                                    <label for="last_name" class="sr-only">Фамилия</label>
                                    <input id="last_name" name="last_name" type="text"required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm" placeholder="Фамилия"/>
                                </div>
                                <div>
                                    <label for="password" class="sr-only">Пароль</label>
                                    <input id="password" name="password" type="password" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none  focus:z-10 sm:text-sm" placeholder="Пароль"/>
                                </div>
                                <div>
                                    <label for="confirm_password" class="sr-only">Подтверждение пароля</label>
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
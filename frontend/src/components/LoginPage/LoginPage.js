import React, { useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import '../style.css'
import {useForm} from "react-hook-form";
import Auth from "../../store/Auth";
import {observer} from "mobx-react";

const LoginPage = observer(() => {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit
    } = useForm({
        mode: "onChange"
    })

    const [authErrors, setAuthErrors] = useState(null)
    // const [auth, setAuth] = useState(false)

    const history = useNavigate()

    const onSubmit = async (data) => {

        // useEffect(() => { setAuth(Auth.login(data)) }, [])
        // const auth = Auth.login(data)
        // console.log(auth)
        if (await Auth.login(data)) {
            setAuthErrors(await Auth.login(data))
        } else {
            history("/leader")
        }
    }

    return (
        <>
            <div className='w-full grid grid-cols-1 md:grid-cols-12 mt-5'>
                <div className="w-full grid grid-cols-1 col-start-2 col-span-1">
                    <button
                        className="button-loginPage group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
                        <Link to="/">Назад</Link>
                    </button>
                </div>
            </div>
            <div className="min-h-full flex justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full">
                    <div>
                        <img className="mx-auto h-20 w-auto" src={require('../../media/logo-main.png')}
                             alt="Workflow"/>
                        <h1 className="mt-6 text-center text-3xl font-extrabold">
                            Авторизация
                        </h1>
                    </div>
                    <form className="mt-8 space-y-6 w-1/3" onSubmit={handleSubmit(onSubmit)}>
                        {/*<input type="hidden" name="remember" value="true"/>*/}
                        {authErrors ? <p className='form-error-text mb-3 -mt-4 p-2 rounded-md border border-red-400'>Ошибка {authErrors}</p> : null}
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">Логин</label>
                                <input id="login" type="login" autoComplete="login"
                                       {...register("username", {required: "Обязательное поле"})}
                                       className="appearance-none w-full relative block px-3 py-2 border placeholder-gray-500 rounded-md focus:outline-none focus:z-10 sm:text-sm"
                                       placeholder="Логин"/>
                                {errors?.username && <p className='form-error-text mb-3 -mt-4 p-2 rounded-md border border-red-400'>{errors?.username?.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Пароль</label>
                                <input id="password" type="password"
                                       autoComplete="current-password"
                                       {...register("password", {required: "Обязательное поле"})}
                                       className="appearance-non w-full relative block px-3 py-2 border placeholder-gray-500 rounded-md focus:outline-none focus:z-10 sm:text-sm"
                                       placeholder="Пароль"/>
                                {errors?.password && <p className='form-error-text mb-3 -mt-4 p-2 rounded-md border border-red-400'>{errors?.password?.message}</p>}
                            </div>


                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input id="remember-me" name="remember-me" type="checkbox"
                                       className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                                <label htmlFor="remember-me" className="ml-2 block text-sm remember-text">
                                    Запомнить
                                </label>
                            </div>
                            <div className="forgot text-sm">
                                <a href="#" className="font-medium">
                                    Забыли пароль?
                                </a>
                            </div>
                        </div>
                        <div>
                            <button type="submit" disabled={!isValid}
                                    className="button-loginPage group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50">
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                           fill="currentColor"
                                           aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                              clipRule="evenodd"/>
                                      </svg>
                                    </span>
                                Войти
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
})

export default LoginPage;
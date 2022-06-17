import React from "react";
import {Link} from "react-router-dom";
import '../style.css'
import {useForm, Controller} from "react-hook-form";
import InputMask from 'react-input-mask';


function EditLeaderPage() {
    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        control
    } = useForm({
        mode: "onChange"
    })

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    }

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
                            Ваши данные
                        </h1>
                    </div>
                    <form className="mt-8 space-y-6 w-1/3" onSubmit={handleSubmit(onSubmit)}>
                        <div className="rounded-md shadow-sm -space-y-px reg">
                            <div>
                                <label htmlFor="first_name" className="sr-only">Имя и отчество</label>
                                <input id="first_name" name="first_name" type="text"
                                       {...register("first_name", {
                                           required: "Это поле обязательно к заполнению"
                                       })}
                                       className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm"
                                       placeholder="Имя и отчество"/>
                                {errors?.first_name && <p className='form-error-text mb-3 -mt-4 p-2 rounded-md border border-red-400'>{errors?.first_name?.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="last_name" className="sr-only">Фамилия</label>
                                <input id="last_name" name="last_name" type="text"
                                       {...register("last_name", {
                                           required: "Это поле обязательно к заполнению"
                                       })}
                                       className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm"
                                       placeholder="Фамилия"/>
                                {errors?.last_name && <p className='form-error-text mb-3 -mt-4 p-2 rounded-md border border-red-400'>{errors?.last_name?.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="phone" className="sr-only">Телефон</label>
                                <Controller
                                    control={control}
                                    name="phone"
                                    render={({ field: { onChange, ref } }) => (
                                        <InputMask
                                            mask="+7 (999) 999-99-99"
                                            onChange={onChange}
                                            inputRef={ref}
                                            id="phone" type="tel"
                                            className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:z-10 sm:text-sm"
                                            placeholder="Телефон"
                                        />
                                    )}
                                    {...register("phone", {
                                        required: "Это поле обязательно к заполнению"
                                    })}
                                />
                                {errors?.phone && <p className='form-error-text mb-3 -mt-4 p-2 rounded-md border border-red-400'>{errors?.phone?.message}</p>}
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
                                Редактировать
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default EditLeaderPage;
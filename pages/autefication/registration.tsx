import { baseApi } from '../../api/baseApi'
import { POST, BASE_ROUTES} from '../../constants'
import useInput from './useInput'

function RegistrationUser() {

    const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true })
    const password = useInput('', { isEmpty: true, minLength: 8, maxLength: 14 })


    var data = Math.round(new Date().getTime() / 1000.0);


    async function formHandler(e: any) {
        e.preventDefault();
        const value = e.target.elements


        console.log("dadadad", value.password.value)

        const submitData = {
            firstName: value.firstName.value,
            email: value.email.value,
            password: value.password.value,
            role: value.role.value,
            register_data: data,
        }


        await baseApi(BASE_ROUTES.users, POST, submitData)
    }
    return (
        <main className="w-full h-full px-40 py-40 bg-gray-100">
            <div className="flex justify-center">
                <div className="w-[520px] text-left bg-white shadow-2xl px-8 py-12">
                    <div>
                        <h1 className="text-2xl">Create an account </h1>
                    </div>
                    <div className="flex">
                        <span className="text-sm">Already have an account?</span>
                        <a href="sign" className="pl-1 text-sm text-indigo-500">Log in</a>
                    </div>
                    <form onSubmit={(e) => formHandler(e)} className="mt-4" action="server/controllers/UserController" method="post">
                        <div >
                            <span className="text-sm text-gray-700">First name</span>
                            <div className="">
                                <input id="firstname" required className="w-full py-2 mb-3 bg-gray-100 border border-gray-300 rounded-lg" placeholder="" name="firstName"></input>
                            </div>
                            <span className="text-sm text-gray-700">Email</span>
                            <div className=''>
                                <input onChange={event => email.onChange(event)} onBlur={event => email.onBlur(event)} value={email.value} type="text" required className="w-full py-2 mb-3 bg-gray-100 border border-gray-300 rounded-lg" placeholder="" name="email"></input>
                                {(email.isDirty && email.isEmpty) && <div className='text-red-600'>Поле не может быть пустым</div>}
                                {(email.isDirty && email.minLengthError) && <div className='text-red-600'>Неккоректная длина</div>}
                                {(email.isDirty && email.emailError) && <div className='text-red-600'>Неккоректный емейл</div>}
                            </div>
                            <span className="text-sm text-gray-700">Create a Password</span>
                            <div>
                                <input onChange={event => password.onChange(event)} onBlur={event => password.onBlur(event)} value={password.value} required className="w-full py-2 mb-3 bg-gray-100 border border-gray-300 rounded-lg" placeholder="" name="password" type="password"></input>
                                {(password.isDirty && password.isEmpty) && <div className='text-red-600'>Поле не может быть пустым</div>}
                                {(password.isDirty && password.minLengthError) && <div className='text-red-600'>Неккоректная длина</div>}
                            </div>
                        </div>
                        <div>
                            <span className="text-sm text-gray-700">Role</span>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 px-4 py-2 mr-1 bg-gray-100 border border-gray-300 rounded-lg">
                                <input required className="mt-2 mb-3 text-indigo-500 form-radio " type="radio" value="Seller" name="role"></input>
                                <label className="px-12 text-gray-700 text-md">Seller</label>
                            </div>
                            <div className="w-1/2 px-4 py-2 ml-1 bg-gray-100 border border-gray-300 rounded-lg">
                                <input required className="mt-2 mb-3 text-indigo-500 form-radio" type="radio" value="Buyer" name="role"></input>
                                <label className="px-12 text-gray-700 text-md">Buyer </label>
                            </div>
                        </div>
                        <button disabled={!email.inputValid || !password.inputValid} type="submit" className="w-full py-2 mt-4 text-center text-white bg-indigo-500 rounded-lg">
                            <span>Sign up</span>
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}
export default RegistrationUser
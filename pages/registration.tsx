


 function RegistrationUser() {

    var data = Math.round(new Date().getTime()/1000.0);

    
    function formHandler(e:any){
        e.preventDefault();
        const value = e.target.elements
        console.log(value.firstName.value)
        console.log(value.email.value)
        console.log(value.password.value)
        console.log(value.role.value)
        console.log(data)


        const submitData = {
            firstName :value.firstName.value,
            email: value.email.value,
            password: value.password.value,
            role: value.role.value,
            createdAt : data,
            updatedAt : data
        }
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
                        <a className="pl-1 text-sm text-indigo-500">Log in</a>
                    </div>
                    <form  onSubmit={(e)=>formHandler(e)} className="mt-4" action="server/controllers/UserController" method="post">
                        <div >
                            <span className="text-sm text-gray-700">First name</span>
                            <div className="">
                                <input className="w-full py-2 mb-3 bg-gray-100 border border-gray-300 rounded-lg" placeholder="" name="firstName"></input>
                            </div>
                            <span className="text-sm text-gray-700">Email</span>
                            <div>
                                <input className="w-full py-2 mb-3 bg-gray-100 border border-gray-300 rounded-lg" placeholder="" name="email"></input>
                            </div>
                            <span className="text-sm text-gray-700">Create a Password</span>
                            <div>
                                <input className="w-full py-2 mb-3 bg-gray-100 border border-gray-300 rounded-lg" placeholder="" name="password"></input>
                            </div>
                        </div>
                        <div>
                            <span className="text-sm text-gray-700">Role</span>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 px-4 py-2 mr-1 bg-gray-100 border border-gray-300 rounded-lg">
                                <input className="mt-2 mb-3 text-indigo-500 form-radio " type="radio" value="Seller" name="role"></input>
                                <label className="px-12 text-gray-700 text-md">Seller</label>
                            </div>
                            <div className="w-1/2 px-4 py-2 ml-1 bg-gray-100 border border-gray-300 rounded-lg">
                                <input className="mt-2 mb-3 text-indigo-500 form-radio"  type="radio" value="Buyer" name="role"></input>
                                <label className="px-12 text-gray-700 text-md">Buyer </label>
                            </div>
                        </div>
                        <div className="w-full py-2 mt-4 text-center text-white bg-indigo-500 rounded-lg">
                            <button type="submit">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
export default RegistrationUser
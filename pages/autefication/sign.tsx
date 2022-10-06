

 function SignUser() {
    return (
        <main className="w-full h-full py-40 bg-gray-100">
            <div className="py-20 bg-gray-100">
            <div className="flex justify-center py-3">
                <div className="w-[520px] text-left bg-white shadow-2xl px-8 py-12">
                    <div>
                        <h1 className="text-2xl">Sign User</h1>
                    </div>
                    <form className="mt-4">
                        <div >
                            <span className="text-sm text-gray-700">Email</span>
                            <div>
                                <input className="w-full py-2 mb-3 bg-gray-100 border border-gray-300 rounded-lg" placeholder="" name="email"></input>
                            </div>
                            <span className="text-sm text-gray-700">Password</span>
                            <div>
                                <input className="w-full py-2 mb-3 bg-gray-100 border border-gray-300 rounded-lg" placeholder="" name="password"></input>
                            </div>
                        </div>
                        <button type="submit" className="w-full py-2 mt-4 text-center text-white bg-indigo-500 rounded-lg">
                            <span>Sign up</span>
                        </button>
                    </form>
                </div>
            </div>
            </div>
        </main>
    )
}
export default SignUser
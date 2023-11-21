import React from 'react'

const LoginForm = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen mt-[-700px]">
                <div className="w-96 p-6 shadow-lg bg-slate-200 rounded-md">
                    <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i> Login</h1>
                    <hr className="mt-3" />
                    <div className="mt-3">
                        <label htmlFor="username" className="block text-base mb-2">Username</label>
                        <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="password" className="block text-base mb-2">Password</label>
                        <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
                    </div>
                    <div className="mt-3 flex justify-between items-center">
                        <div>
                            <input type="checkbox" />
                            <label>Remember Me</label>
                        </div>
                        <div>
                            <a href="#" className="text-indigo-800 font-semibold">Forgot Password?</a>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button type="submit" className="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm

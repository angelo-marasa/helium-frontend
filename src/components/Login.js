import React, { useState, useEffect } from 'react'
import axios from "axios";
import '../App.css';




const Login = () => {

    useEffect(() => {
        //-- Call the login API
        console.log('test');
        axios.post('https://helium-backend.loc/v1/helium/user-login', {
            user: "r@b.com",
            password: "abc123"
        }).then((response) => {
            console.log(response.data);
            if (response.data.status == 200) {
                localStorage.setItem("logged", true);
                localStorage.setItem("email", response.data.user.email);
                localStorage.setItem("ID", response.data.user.id);
                localStorage.setItem("name", response.data.user.name);
            } else {
                localStorage.removeItem("logged");
                localStorage.removeItem("email");
                localStorage.removeItem("ID");
                localStorage.removeItem("name");
            }
          });
      }, []);


    return (
        <div className="App">
            <section className="min-h-screen flex flex-col">
                <div className="flex flex-1 items-center justify-center">
                    <div className="rounded-lg sm:border-2 px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                        <form className="text-center">
                            <h1 className="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                                Sign in
                            </h1>
                            <div className="py-2 text-left">
                                <input type="email" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
                            </div>
                            <div className="py-2 text-left">
                                <input type="password" className="bg-gray-200 border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
                            </div>
                            <div className="py-2">
                                <button type="submit" className="border-2 border-gray-100 focus:outline-none bg-purple-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-purple-700">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="text-center">
                            <a href="#" className="hover:underline">Forgot password?</a>
                        </div>
                        <div className="text-center mt-12">
                            <span>
                                Don't have an account?
                            </span>
                            <a href="#" className="font-light text-md text-indigo-600 underline font-semibold hover:text-indigo-800">Create One</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
"use client";
import React, { useCallback, useState } from "react";
import Input from "@/Components/Input";

const Auth = () => {

    const [name, setName] = useState<string>("");

    const [email, setEmail] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const [variant, setVariant] = useState<string>("login");

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === "login" ? "register" : "login");
    }, []);

    return (
        <div className="relative h-full w-full bg-[url('/assets/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5 flex justify-center lg:justify-start">
                    <img src="/assets/logo.png" className="h-10" alt="Logo" />
                </nav>

                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-12 py-10 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-6 font-semibold">
                            {variant === "login" ? "Sign in" : "Register"}
                        </h2>

                        <div className="flex flex-col space-y-4">
                            {variant === "register" && (
                                <Input
                                    id="name"
                                    type="text"
                                    label="Username"
                                    value={name}
                                    onChange={(e: any) => setName(e.target.value)}
                                />
                            )}

                            <Input
                                id="email"
                                type="email"
                                value={email}
                                label="Email"
                                onChange={(e: any) => setEmail(e.target.value)}
                            />

                            <Input
                                type="password"
                                id="password"
                                label="Password"
                                value={password}
                                onChange={(e: any) => setPassword(e.target.value)}
                            />
                        </div>

                        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-6 font-semibold hover:bg-red-700 transition">
                            {variant === "login" ? "Login" : "Sign up"}
                        </button>

                        <p className="text-neutral-500 mt-4">
                            {variant === "login" ? "First time using Netflix?" : "Already have an account?"}
                            <span
                                onClick={toggleVariant}
                                className="text-white ml-4 hover:underline cursor-pointer"
                            >
                                {variant === "login" ? "Create an Account" : "Login"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Auth;
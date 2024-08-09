"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import Cart from "./Cart";

export default function Navbar() {
    const [isopen , setIsopen] = useState(false)
    const togglecart = () => {
        setIsopen(true);
    };
    return (
        <>
            <div className="w-screen  dark:text-white text-black">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="w-40 p-5">
                        <img src="./image/HUngary_(1).png" alt="" className="w-20 h-20 border rounded-full" />
                    </div>
                    <div className="min-w-min flex justify-center items-center">
                        <div className=" ">
                            <Link href="/" className="px-4 py-2 text-2xl  mx-5 hover:underline-offset-4">Home</Link>
                            <Link href="/About" className="px-4 py-2 text-2xl  mx-5 hover:underline-offset-4 ">About</Link>
                            <Link href="/Order" className="px-4 py-2 text-2xl hmx-5over:underline-offset-4">Order</Link>
                            <Link href="/Contact" className="px-4 py-2 text-2xl   hover:underline-offset-4 mx-5">Contact Us</Link>
                            <Link href="/Menu" className="px-4 py-2 text-2xl hmx-5over:underline-offset-4">Menu</Link>
                        </div>

                        <div className="flex justify-center md:justify-end ">
                            <button
                                type="button"
                                className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl  dark:focus:ring-yellow-900 p-5 mx-5">
                                <Link href="/Signin">SignIn</Link>
                            </button>
                            <button
                                type="button"
                                className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl  dark:focus:ring-yellow-900 p-5 m-2"
                            >
                                <Link href="/Signup">SignUp</Link>
                            </button>
                        </div>
                        <FaCartShopping onClick={togglecart} className="text-4xl m-5" />
                    </div>
                </div>
                {isopen && <Cart close={setIsopen} open={isopen}/>}
            </div>
        </>
    );
}


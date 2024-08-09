"use client";

import { useState } from "react";

export default function page() {
  const [Val, setVal] = useState({
    email: "",
    password: "",
    cpassword: "",
  });

  const handle = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setVal({ ...Val, [name]: value });
  };
  const btnClick = async (e: any) => {
    e.preventDefault();
    const { email, password, cpassword } = Val;
    const res = await fetch("/signIn", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 400 || !data) {
      window.alert("Invalid credentials");
      console.log("Invalid credentials");
    } else {
      window.alert("sign in successfull");
    }
  };
  return (
    <> 
            <div className="p-4 md:p-5">
              <form className="space-y-4 grid justify-center items-center mt-20" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-3xl font-medium  text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl font-medium focus:ring-yellow-500 focus:border-yellow-500 block  w-full md:w-[40rem] p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-3xl font-medium  text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-3xl font-medium focus:ring-yellow-500 focus:border-yellow-500 block  w-full md:w-[40rem] p-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-yellow-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ms-2 text-3xl font-medium  text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-3xl font-medium  hover:underline dark:text-yellow-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className=" w-full md:w-[40rem] text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-3xl dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 p-5"
                >
                  Login to your account
                </button>
                <div className="text-3xl font-medium  text-yellow-700 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="/Signup"
                    className="text-yellow-700 hover:underline dark:text-yellow-500"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div> 
    </>
  );
}

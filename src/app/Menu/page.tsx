"use client";

import { useState } from "react";
import Data from "../../components/Data";
import Cards from "../../components/Card";
import Cart from "../../components/Cart";
const myStyle = {
  background: 'rgba(0,0,0,0.5)url("./image/break.jpg")',
  backgroudRepeat: "no-repeat",
};

export default function page() {
  const [items, setItems] = useState(Data);

  const [showItems, setShowItems] = useState(false);
  const ShowOnClick = (catItems: string) => {
    const updatedData = Data.filter((curEle) => {
      return curEle.category === catItems;
    });
    setItems(updatedData);
  };

  const add = () => {
    setShowItems(true);
  };

  return (
    <>
      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {items.map((item) => {
              const { category, price, title, image, id } = item;
              return (
                <>
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={id}>
                    <a className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={image}
                      />
                    </a>
                    <div className="mt-4">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        Category :{category}
                      </h3>
                      <h2 className="title-font text-lg font-medium">
                          Name : {title}
                      </h2>
                      <p className="mt-1">Price : {price}</p>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center p-2 text-[1.5rem] font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                    >
                      Add-to-cart
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

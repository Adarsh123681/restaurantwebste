"use client"
import Cards from "@/components/Card";
import Footer from "@/components/Footer";
import Table from "@/components/Table";
import { useState } from "react";

const mystyle = {
  background: `rgba(0, 0, 0, 0.5)url('./image/bg.jpg')`,
};

const mystyle1 = {
  background: `rgba(0, 0, 0, 0.4)url('https://as2.ftcdn.net/v2/jpg/01/88/42/77/1000_F_188427770_DQw2GQ3NcZn7e88nu1sDHJXsWXtRt3Xx.jpg')`,
};
 
function page() {
  const [show , setShow] = useState(false)
  // const[ close , setClose] = useState(true)
   

  return (
    <>
      {/* main */}
      <div className="w-fill h-screen m-0 ">
        <div
          className="w-fill h-screen no-repeat bg-fixed bg-cover bg-center bg-blend-darken"
          style={mystyle}
        >
          {" "}
          <div className="w-screen h-[50rem] dark:text-white text-center grid items-center justify-center">
            <div className="flex flex-col justify-center items-center">
              <span className="text-3xl my-2 font-mono text-yellow-500">
                Join to
              </span>
              <span className="text-5xl text-white">SPECIAL EVENT</span>
              <span className="m-0 text-xl mt-2 text-white">
                Fish is one of the most wholesome foods that man can eat. In
                fact, people have been <br /> eating fish throughout human
                history.
              </span>
              <section className="text-white body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2 mx-5">
      <p className="leading-relaxed">Mobile Number</p>
        <h2 className="title-font font-medium sm:text-4xl text-3xl">23454657</h2>
        
      </div>
      <div className="p-4 sm:w-1/4 w-1/2 mx-10">
      <p className="leading-relaxed">Email</p>
        <h2 className="title-font font-medium sm:text-4xl text-3xl">hungary120Gmail.com</h2>
         
      </div>
    
    </div>
  </div>
</section>
            </div>
          </div>
        </div>
        {/* section */}

        <div className="bg-white w-screen">
          <div className="mb-3 mx-5  p-10 flex justify-center py-10 text-xl">
            <span className="w-[30rem] mr-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore similique dicta ullam minima sit modi possimus,
              laboriosam necessitatibus qui sapiente quae, praesentium porro.
              Harum id blanditiis recusandae sed consequatur nam ipsum soluta ut
              officiis ratione neque eos, laborum pariatur voluptatibus sunt
              quaerat, debitis error consectetur et aliquam odit nulla earum?
            </span>
            <span className="w-[30rem]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem vero impedit dignissimos eum, quisquam eaque itaque
              nihil facere odio. Ut eaque, nisi earum officiis ab maxime et! Ab,
              praesentium quaerat!
            </span>
          </div>
          <div className="w-screen m-auto my-20 text-center">
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl  dark:focus:ring-yellow-900 p-5 mb-5 "
            >
              Read More Abour Us
            </button>
          </div>
        </div>
        <div />
        {/* CARDS */}

        <div className="w-screen h-40 text-center my-10 text-3xl">
          <span className="text-yellow-600 text-5xl">Menu</span>
          <span className="text-5xl">
            <br />
            Special Dishes
          </span>
        </div>
        <div className="w-screen grid md:grid-cols-3 rounded-lg mt-10 gap-4 justify-center m-5">
          <div className="w-[48rem] md:w-[30rem] justify-center md:m-auto border border-gray-800">
            <a href="#">
              <img className="rounded-t-lg" src="./image/bg.jpg" alt="" />
            </a>
            <div className="p-5 ">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-black text-xl">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
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
          </div>

          {/* 2nd */}
          <div className="w-[46rem] md:w-[30rem] justify-center md:m-auto border border-gray-800">
            <a href="#">
              <img className="rounded-t-lg" src="./image/bg.jpg" alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-black text-xl">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
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
          </div>

          {
            /* 3rd grid */

            <div className="w-[46rem] md:w-[30rem] justify-center md:m-auto border border-gray-800">
              <a href="#">
                <img className="rounded-t-lg" src="./image/bg.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight ">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-black text-xl">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
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
            </div>
          }

          <div className="w-screen m-auto my-20 text-center">
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl  dark:focus:ring-yellow-900 p-5 mb-5 "
            >
              View all menu
            </button>
          </div>
        </div>

        {/* table booking */}

        <div
          className="w-screen h-80 relative bg-cover bg-center no-repeat bg-blend-darken"
          style={mystyle1}
        >
          <div className="w-screen m-auto my-20 text-center">
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-700 hover:bg-yellow-700 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-3xl md:text-5xl  dark:focus:ring-yellow-900 p-5 mb-5 absolute top-1/2 left-[30%] md:left-[40%]" onClick={(()=>{
                setShow(!show)
              })}
            >
              RESERVE YOUR TABLE
            </button>
          </div>
        </div>
        {show && <Table close={setShow} />}
        {/*image-section */}
        <section className="w-[100%] ">
          {/* 1st section  */}
          <div className="p-32 flex flex-col md:flex-row md:justify-start justify-center items-center">
            {/* image */}
            <div className="w-[40rem] h-[20rem] md:w-[60rem] md:h-[40rem] ">
              <img
                src="./image/dinner.jpg"
                alt=""
                className="border border-gray-800 rounded-2xl"
              />
            </div>

            {/* card */}
            <div className="card w-[35rem] h-[30rem]  md:w-[40rem] md:h-[35rem] text-center bg-white text-[.5rem] md:text-[1.3rem] p-16 shadow-2xl shadow-black border border-gray-800 rounded-2xl md:-mx-10">
              {/* heading */}
              <span className="font-bold text-[2rem] md:text-[3rem] mb-5">
                HUNGARY RESTURANT
              </span>
              {/* content */}
              <p className="text-2xl md:text-3xl m-5 text-center p-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores labore accusamus itaque fugit hic. Reiciendis commodi,
                consequuntur saepe fugiat porro molestiae quos, animi rerum
                ducimus maxime quis! Quaerat expedita nihil facere atque minima?
              </p>
            </div>
          </div>

          {/* 2nd section  */}
          <div className="p-32 flex flex-col md:flex-row md:justify-end justify-center items-center">
            {/* card */}
            <div className="card w-[35rem] h-[30rem]  md:w-[40rem] md:h-[35rem] text-center bg-white text-[.5rem] md:text-[1.3rem] p-16 shadow-2xl shadow-black border border-gray-800 rounded-2xl md:-mx-10">
              {/* heading */}
              <span className="font-bold text-[2rem] md:text-[3rem] mb-5">
                ONLY FRESH FOOD
              </span>
              {/* content */}
              <p className="text-2xl md:text-3xl m-5 text-center p-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores labore accusamus itaque fugit hic. Reiciendis commodi,
                consequuntur saepe fugiat porro molestiae quos, animi rerum
                ducimus maxime quis! Quaerat expedita nihil facere atque minima?
              </p>
            </div>
            {/* image */}

            <div className="w-[40rem] h-[20rem] md:w-[60rem] md:h-[40rem]">
              <img src="./image/dinner.jpg" alt="" className="rounded-2xl " />
            </div>
          </div>
        </section>

        {/* more menu */}

        <div className="w-screen h-fit bg-white mt-10">
          <div className="w-screen h-40 text-center mt-10 text-3xl">
            <span className="text-yellow-600 text-5xl my-5">More Dishes</span>
            <span className="text-5xl ">
              <br />
              FROM OUR MENU
            </span>
          </div>

          <div className="w-full justify-center p-10 grid md:grid-cols-2">
            <div className="">
            <span className="w-20 h-10 rounded-full py-5">
              <img
                src="./image/lunch.jpg"
                alt=""
                className="w-20 h-20 border border-gray-800 rounded-full "
              />
            </span>
            <div className="ml-5 p-2">
              {/* heding */}
              <span className="text-3xl font-semibold">
                MOJITO - <span className="font-thin"> Price : $ 11.00</span>
              </span>
              <br />
              {/* paragraph */}
              <span className="para text-2xl ">
                White Rum, Mint Leaves, Lime Juice, Brown Sugar, Soda Water
              </span>
            </div>
          </div>

          {/* 2nd */}
          <div className="w-full flex justify-center p-10">
            <span className="w-20 h-10 rounded-full py-5">
              <img
                src="./image/lunch.jpg"
                alt=""
                className="w-20 h-20 border border-gray-800 rounded-full "
              />
            </span>
            <div className="ml-5 p-2">
              {/* heding */}
              <span className="text-3xl font-semibold">
                BREAKFAST PANINI -{" "}
                <span className="font-thin"> Price : $ 11.00</span>
              </span>
              <br />
              {/* paragraph */}
              <span className="para text-2xl ">
                White Rum, Mint Leaves, Lime Juice, Brown Sugar, Soda Water
              </span>
            </div>
          </div>

          {/* 3rd */}
          <div className="w-full flex justify-center p-10">
            <span className="w-20 h-10 rounded-full py-5">
              <img
                src="./image/lunch.jpg"
                alt=""
                className="w-20 h-20 border border-gray-800 rounded-full "
              />
            </span>
            <div className="ml-5 p-2">
              {/* heding */}
              <span className="text-3xl font-semibold">
                BLOODY MARY -{" "}
                <span className="font-thin"> Price : $ 11.00</span>
              </span>
              <br />
              {/* paragraph */}
              <span className="para text-2xl ">
                White Rum, Mint Leaves, Lime Juice, Brown Sugar, Soda Water
              </span>
            </div>
          </div>

          {/* 4th */}
          <div className="w-full flex justify-center p-10">
            <span className="w-20 h-10 rounded-full py-5">
              <img
                src="./image/lunch.jpg"
                alt=""
                className="w-20 h-20 border border-gray-800 rounded-full "
              />
            </span>
            <div className="ml-5 p-2">
              {/* heding */}
              <span className="text-3xl font-semibold">
                CHERRY BOMB -{" "}
                <span className="font-thin"> Price : $ 11.00</span>
              </span>
              <br />
              {/* paragraph */}
              <span className="para text-2xl ">
                White Rum, Mint Leaves, Lime Juice, Brown Sugar, Soda Water
              </span>
            </div>
          </div>
        </div>

            </div>
        {/* special menu */}

        <div className="w-screen h-[24rem] flex justify-center items-center mt-[10rem]">
          <span className="w-30 h-30 md:m-10">
            <img
              src="./image/web.jpg"
              alt=""
              className="w-[30rem] h-[25rem] md:w-[36rem] md:h-[32rem]"
            />
          </span>
          <span className="">
            <img
              src="./image/menu.webp"
              alt=""
              className="w-[30rem] h-[25rem] md:w-[36rem] md:h-[32rem]"
            />
          </span>
        </div>
        <div className="w-screen h-[21rem] flex flex-col md:flex-row justify-center items-center">
          <div className="w-screen bg-white p-5"> 
            <span className="w-1/2 text-center text-[1.2rem] mt-0 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus sapiente sint quis quidem sunt debitis non possimus
              deleniti dolore soluta minus repellendus exercitationem, amet
              labore. Tenetur sequi facilis odit placeat eveniet quidem iste
              ratione assumenda officiis. Repellendus ab ea sint non tempore
              omnis autem necessitatibus quae voluptatem magnam eaque corrupti,
              sapiente sit ex atque obcaecati blanditiis voluptatibus modi. Amet
              id explicabo maiores reiciendis assumenda. Ducimus ut consectetur
              ab cumque qui repellendus, iste veritatis tempora commodi, aperiam
              nam consequuntur perferendis. Quia beatae vitae excepturi, omnis
              optio culpa ducimus sit harum quibusdam quod unde ipsum odio et
              velit ipsa corrupti. Eum, tenetur.
            </span>
          </div>
        </div>
        {/* chef */}
        <div className="w-screen flex flex-col md:flex-row justify-center items-center md:mt-[15rem]">
          <img
            src="./image/chef.jpg"
            alt=""
            className="w-[30rem] h-[40rem] md:w-[40rem] md:h-[50rem] border-2 border-gray-800 rounded-lg shadow-2xl mt-20 md:mt-0"
          />

          <div className="w-[40rem] grid justify-center items-center mx-20 text-2xl p-10 text-center">
            <span className="text-3xl my-2 font-mono text-yellow-500">
              Chief’s Word
            </span>
            <span className="text-5xl ">SPECIAL EVENT</span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
            molestiae quasi nam nisi labore fugiat? Nulla exercitationem ab,
            nesciunt eius commodi autem fugit earum facere illo, nemo hic enim
            ullam eaque dolorum, architecto reprehenderit magni ut odio tempore
            perferendis. Tempora eveniet quam adipisci modi, laborum unde ipsam
            iure, eligendi vel magni deserunt odio incidunt natus qui ut illum
            sint error dolor molestias inventore id fugit nemo dolores
            laudantium? Ea, repellendus sit voluptatum quasi dolorem quam qui
            ullam sint ipsam aut laborum pariatur! Expedita error quam nemo ab
            corrupti alias voluptatem vero mollitia dolorum commodi distinctio
            saepe culpa, neque maxime perferendis.
          </div>
        </div>

        {/* gallery */}
        <div className="">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mt-10 p-5">
            <div>
              <img
                className="h-auto w-full rounded-lg"
                src="https://media.istockphoto.com/id/666908954/photo/handsome-chef-pouring-olive-oil-on-meal.jpg?s=1024x1024&w=is&k=20&c=9tUx_yV12Ev4flFhnsvR4MLZ6d25w7LZ8fv7aJBv6nI="
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=1024x1024&w=is&k=20&c=MtsKbcN1l8P5hMDebtnMFevzdMfSJLbiH0VR8wA7hps="
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://media.istockphoto.com/id/866699668/photo/gourmet-chef-cooking-in-a-commercial-kitchen.jpg?s=1024x1024&w=is&k=20&c=X_xZPLpdI4XneHOckYBm462TRKxpkZiJQOLb8MYIyz8="
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://media.istockphoto.com/id/143919031/photo/team-of-professional-chefs.jpg?s=1024x1024&w=is&k=20&c=cUbtiUV_fyNKWHUICroWpRGXSbgVU0JrMQsFa51oLLk="
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="https://media.istockphoto.com/id/1081422898/photo/pan-fried-duck.jpg?s=1024x1024&w=is&k=20&c=MtsKbcN1l8P5hMDebtnMFevzdMfSJLbiH0VR8wA7hps="
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="hhttps://media.istockphoto.com/id/1389932284/photo/slicing-carrots.jpg?s=1024x1024&w=is&k=20&c=LKVGsM1mNkk7GcL25M7T6k9OYu_54DcnHGXseCafKsE=g"
                alt=""
              />
            </div>
            
          </div>
        </div>

        {/* card 3 */}

        <div className="">
          <Footer />
        </div>
      
      </div>
    </>
  );
}

export default page;

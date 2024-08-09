import Link from "next/link";
const mybg = {
    background : 'rgba(0,0,0,0.5)url("https://as1.ftcdn.net/v2/jpg/03/66/73/36/1000_F_366733676_qTLsnBUZqNflzkE9bGgiMpurlkiUwUQc.jpg")'
}
export default function Footer() {
  return (
    <>
      <footer className="rounded-lg shadow text-white m-4 bg-center bg-cover bg-blend-darken no-repeat" style={mybg}>
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center">
          <div className="sm:flex sm:items-center sm:justify-between m-auto">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              
              <span className="self-center text-5xl font-semibold whitespace-nowrap p-10 m-auto">
                Hungary Restaurant
              </span>
            </a>
            <ul className="flex flex-wrap i  mb-6 text-sm  text-white sm:mb-0 px-5 text-center justify-center items-center">
              <Link href="/" className="px-4 py-2 text-2xl m-2">
                Home
              </Link>
              <Link href="/About" className="px-4 py-2 text-2xl m-2 ">
                About
              </Link>
              <Link href="/Order" className="px-4 py-2 text-2xl m-2 ">
                Order
              </Link>
              <Link href="/Contact" className="px-4 py-2 text-2xl m-2 ">
                Contact Us
              </Link>
              <Link href="/Menu" className="px-4 py-2 text-2xl m-2 ">
                Menu
              </Link> 
            </ul>
          </div>
          <hr className="my-6  sm:mx-auto bg-white lg:my-8 my-5" />
          <span className="block text-2xl sm:text-center text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              hungaryRestaurant™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

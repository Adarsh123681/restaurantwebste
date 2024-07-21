import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center p-2">
      <div className="rounded-full">
        <img
          src="/image/HUngary_(1).png"
          alt="Logo"
          width={50}
          height={50}
          className="border-2 rounded-full"
        />
      </div>
      <Link href="/" passHref>
        <button className="nav-link px-4 py-2 rounded bg-blue-500 text-white mr-2">
          Home
        </button>
      </Link>
      <Link href="/About" passHref>
        <button className="nav-link p-6 rounded bg-blue-500 text-white mr-2">
          About
        </button>
      </Link>
      <Link href="/Order" passHref>
        <button className="nav-link px-4 py-2 rounded bg-blue-500 text-white mr-2">
          Order
        </button>
      </Link>
      <Link href="/Contact" passHref>
        <button className="nav-link px-4 py-2 rounded bg-blue-500 text-white mr-2">
          ContactUs
        </button>
      </Link>
      <Link href="/Menu" passHref>
        <button className="nav-link px-4 py-2 rounded bg-blue-500 text-white mr-2">
          Menu
        </button>
      </Link>
      <Link href="/Signin" passHref>
        <button className="btn px-4 py-2 rounded bg-green-500 text-white mr-2">
          Signin
        </button>
      </Link>
      <Link href="/Signup" passHref>
        <button className="btn px-4 py-2 rounded bg-green-500 text-white mr-2">
          Signup
        </button>
      </Link>
    </div>
  );
}

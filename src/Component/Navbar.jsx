import Link from "next/link"
export default function Navbar() {
  return (
    <>
      <div>
        <div className="nav flex p-2 bg-red-200">
          <div className="logo">
            <img src="./image/HUngary_(1).png" alt="" style={{ width: "10rem", height: "9.5rem", }} />
          </div>
          <Link href="/Home" className='li'>Home</Link>
          <Link href="/About" className='li'>About</Link>
          <Link href="/Order" className='li'>Order</Link>
          <Link href="/Contact" className='li'>ContactUs</Link>
          <Link href="/Menu" className='li'>Menu</Link>
          <button className='btn'><Link className="btn_link" href="/SignIn">SignIn</Link></button>
          <button className='btn1'><Link className="btn_link" href="/SignUp">SignUp</Link></button>
        </div>
      </div>
    </>
  )
}


"use client";
export default function Cart(props) {
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-[30rem] h-full bg-white shadow-lg transition-all transform ${props.close} ? "-translate-x-full" : "translate-x-0"} transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
          <h2 className="text-xl">Cart</h2>
        </div>
        
        <button
          onClick={() => props.close(false)}
          className="absolute top-4 right-4  bg-orange-700 p-2 rounded-md z-50 "
        >
          X
        </button>
      </div>
    </>
  );
}

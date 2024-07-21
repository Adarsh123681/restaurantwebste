 
"use client";

export default function page() {
  const handle = () => {};
  return (
    <>
      <div
        className="text-center text-2xl"
      >
        !!! ORDER NOW !!!
      </div>

      <form
        action=""
        method="post"
        
      >
        <img
          src="./image/orderFood.png"
          alt=""
          srcSet=""
          style={{ width: "40rem", height: "40rem", margin: "10rem" }}
        />

        <div
          className="signUp_input"
          style={{ width: "50rem", margin: "10rem 1rem 1rem 2rem" }}
        >
          <input
            onChange={handle}
            name="name"
            type="text"
            className="Uname"
            placeholder="Enter Your Name"
          />

          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Enter your address..."
            style={{
              border: ".2rem solid black ",
              backgroundColor: "whitesmoke",
              marginTop: "1rem",
              fontSize: "2rem",
            }}
          ></textarea>

          <input
            onChange={handle}
            name="number"
            type="number"
            className="number"
            placeholder="Enter the quantity"
          />

          <button
            style={{
              width: "15rem",
              height: "5rem",
              background: "navy",
              margin: "auto",
              border: ".1rem solid black",
              borderRadius: "2rem",
              color: "white",
            }}
          >
            Order
          </button>
          {/* second */}
        </div>
        <div
          className="signUp_input"
          style={{ margin: "10rem 1rem 1rem 2rem" }}
        >
          <input
            onChange={handle}
            name="email"
            type="email"
            className="email"
            placeholder="Enter your email"
          />
          <input
            onChange={handle}
            name="password"
            type="Password"
            className="password"
            placeholder="Enter your password"
          />
          <input
            onChange={handle}
            name="cpassword"
            type="Password"
            className="cPassword"
            placeholder="Confirm your password"
          />
          <button
            style={{
              width: "15rem",
              height: "5rem",
              background: "grey",
              margin: "auto",
              border: ".1rem solid black",
              borderRadius: "2rem",
              backgroundColor: "red",
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

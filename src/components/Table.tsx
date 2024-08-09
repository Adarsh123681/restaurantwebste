"use client";

export default function Table(props) {
  return (
    
    <div className="tableDiv relative ">
      <div className="w-screen h-screen absolute top-0 left-0 bg-black/10 flex items-center justify-center">
      <form className="bg-black p-6 rounded shadow-lg">
          <div className="form-group">
            <label htmlFor="date">Enter Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              style={inputStyle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Enter Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              style={inputStyle}
            />
          </div>
          <div className="button-group">
            <button
              type="submit"
              className="btn2"
              style={bookButtonStyle}
            >
              Book My Table
            </button>
            <button
              type="button"
              className="btn2"
              style={closeButtonStyle}
              onClick={() => props.close(false)}
            >
              Close Modal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  margin: ".9rem",
  border: ".1em solid black",
  borderRadius: ".5rem",
  padding: ".9rem",
};

const bookButtonStyle = {
  padding: "1rem",
  fontSize: "1.5rem",
  backgroundColor: "blue",
  color: "white",
  border: ".1rem solid black",
  borderRadius: "1rem",
  marginLeft: "3rem",
};

const closeButtonStyle = {
  padding: "1rem",
  margin: "1rem",
  fontSize: "1.5rem",
  backgroundColor: "red",
  color: "white",
  border: ".1rem solid black",
  borderRadius: "1rem",
  marginLeft: "5rem",
};

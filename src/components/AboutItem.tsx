export default function AboutItem({ title, title1 }) {
  return (
    <>
      <div className="w-screen bg-red-400">
        <div className="w-screen flex flex-col md:flex-row justify-center">
          <div className="m-5 w-[20rem] h-[20rem]">
            <img
              src="https://resdiary.com/hubfs/shutterstock_1176110662.jpg"
              alt=""
              srcSet=""
              className="w-[20rem] h-[20rem]"
            />
          </div>
          <div className="w-[40rem] h-[20rem] text-2xl md:p-10">
            <h1 className="text-4xl py-5">{title}</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            dignissimos veritatis assumenda, magnam quas dolore distinctio
            officia labore deleniti itaque velit facilis, odit mollitia debitis
            unde magni. Unde, earum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </div>
        </div>

        <div className="w-screen flex flex-col md:flex-row justify-center">
          <div className="m-5 w-[20rem] h-[20rem] float-right">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN_tvU3fClkPkX8HbQBNBSOYuM0aWifMBxZg&usqp=CAU"
              alt=""
              srcSet=""
              className="w-[20rem] h-[20rem] object-cover"
            />
          </div>
          <div className="w-[40rem] text-2xl md:p-10 justify-start">
            <h1 className="text-4xl py-5">{title}</h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            dignissimos veritatis assumenda, magnam quas dolore distinctio
            officia labore deleniti itaque velit facilis, odit mollitia debitis
            unde magni. Unde, earum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </div>
        </div>
      </div>
    </>
  );
}

import AboutItem from "@/components/AboutItem";
export default function page() {
  const title = "OUR MANAGING TEAM";
  const title1 = "OUR STAFF MEMBERS";
  return (
    <>
      <div className="bg-white text-black font-">
        {" "}
        <div className="text-center text-2xl m-0 p-0">
          About Us
        </div>
        <div className="about_container">
          <div className="about_image">
            <img src="./image/bg.jpg" alt="" srcSet="" className="w-30 h-30" style={{width:"20rem"}} />
          </div>
          <div className="about_content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            dignissimos veritatis assumenda, magnam quas dolore distinctio
            officia labore deleniti itaque velit facilis, odit mollitia debitis
            unde magni. Unde, earum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </div>
          <AboutItem title={title1} />
          <div>
            <img src="./image/web.jpg" alt="" srcSet="" className="w-30 h-30" />
            <div className="team_content">
              <h1>OUR COOKS</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
              dignissimos veritatis assumenda, magnam quas dolore distinctio
              officia labore deleniti itaque velit facilis, odit mollitia
              debitis unde magni. Unde, earum. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit.
            </div>
          </div>
          <AboutItem title={title} />
        </div>
      </div>
    </>
  );
}

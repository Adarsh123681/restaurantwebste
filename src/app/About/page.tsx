import AboutItem from "@/components/AboutItem";
export default function page() {
  const title = "OUR MANAGING TEAM";
  const title1 = "OUR STAFF MEMBERS";
  return (
    <>
      <div className=" text-black"> 
        {" "}
        <div className="about_container m-auto bg-no-repeat text-white"> 
          <div className=" w-1/2 h-full bg-gray-400">
          <h2 className="text-4xl my-auto p-5">
            <span>OUR</span> SOTRY
          </h2>
          <div className="text-2xl md:text-3xl p-4   md:h-[16rem] text-white ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
            dignissimos veritatis assumenda, magnam quas dolore distinctio
            officia labore deleniti itaque velit facilis, odit mollitia debitis
            unde magni. Unde, earum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit.
          </div> 
          </div>
        </div>
        <AboutItem title={title} title1={title1} />
      </div>
    </>
  );
}

{/* <section className = "text-gray-600 body-font">
<div className = "container px-5 py-24 mx-auto">
<div className = "flex flex-col text-center w-full mb-20">
<h1 className = "sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
<p className = "lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
</div>
<div className = "flex flex-wrap -m-4">
<div className = "lg:w-1/2 sm:w-1/2 p-4">
  <div className = "flex relative w-screen">
  <img src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudCUyMHN0b3J5JTIwaW1hZ2VzfGVufDB8fDB8fHww" alt="" className="w-[60rem] h-[30rem] m-auto object-cover border-b-rose-500 rounded-2xl"/>
    <div className = "px-8 py-10 relative z-10 w-full border-4 border-gray-200 opacity-0 bg-black/10 hover:opacity-100">
      <h2 className = "tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
      <h1 className = "title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
      <p className = "leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
    </div>
  </div>
</div> 
</div>
</div>
</section> */}
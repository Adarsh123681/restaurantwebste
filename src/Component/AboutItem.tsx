export default function AboutItem(props) {
  const {title} = props
  return (
    <>
      <div className="team_img flex w-20">
        <img
          src="./image/web.jpg"
          alt=""
          srcSet="" 
          className="w-12 h-32" 
        />
        
          <h1>{title}</h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus,
          dignissimos veritatis assumenda, magnam quas dolore distinctio officia
          labore deleniti itaque velit facilis, odit mollitia debitis unde
          magni. Unde, earum. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
       
      </div>
    </>
  );
}

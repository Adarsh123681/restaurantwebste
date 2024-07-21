import { url } from "inspector"

 
const mystyle = {
  background :`rgba(0, 0, 0, 0.5)url('./image/bg.jpg') no-repeat center center`
}
function page() {
  return (
    
<div className="w-fill h-screen m-0 ">
        <div className="" style={mystyle}></div>
</div>  )
}

export default page
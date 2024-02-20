import {useState,useEffect} from "react"
function SliderSection(){
    const [index,setIndex]=useState(0)
    const images=["./banner9.jpg","./banner10.jpg"]
    useEffect(()=>{
const interval = setInterval(()=>{
    setIndex((prevIndex)=>prevIndex===images.length-1 ? 0 : prevIndex +1)

    return clearInterval(interval)
},2000)
    },)
    return(
        <div className="w-full overflow-hidden">
            <img src={images[index]} className="w-full"></img>

        </div>
    )
}
export default SliderSection
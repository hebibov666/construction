function AboutUs({about}){
    console.log(about)
    return(
        <div className="w-full flex gap-[10px] items-center flex-col p-[20px]">
<div className="flex items-center justify-center">
    <h1 className="title2 text-white flex flex-col items-center w-full text-center font-bold text-xl">Haqqımızda</h1>
</div>
<div>
    <p className="text-white text-start">{about && about[0].description}</p>
</div>
        </div>
    )
}
export default AboutUs
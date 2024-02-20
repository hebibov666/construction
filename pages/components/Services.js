import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';
export const services=[
    {
        name:"Təmir",
        img:"./repair.jpg"
    },
    {
        name:"Tikinti",
        img:"./indir.jpg"
    },
    {
        name:"Dizayn",
        img:"./design.jpg"
    },
    {
        name:"Dekorativ incəsənət",
        img:"./art.jpg"
    },
    {
        name:"Lepka-paduqa",
        img:"./lepka.jpg"
    }
]
function Service(){
 
    return(
        <div className="flex flex-col w-full overflow-hidden pt-[20px]">
            <div className="flex items-center justify-center">
                <h1 className="text-white text-2xl font-bold">Xidmətlər</h1>
            </div>
            <div className="w-full  p-[20px] gap-[10px] place-items-center grid max-[470px]:grid-cols-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
{services.map(service=>{
    return <Link href={`projects/${service.name}`} className="min-w-1/1 max-[470px]:w-[90%] h-[300px] bg-black shadow-sm shadow-black">
         <div>
        <div className="w-full h-[250px]">
            <img src={service.img} className="w-full h-full object-cover rounded-t-[7px]"></img>
        </div>
        <div className="flex items-center h-[50px] justify-between pl-2">
            <h1 className="text-white">{service.name}</h1>
            <ArrowRightIcon className='text-white'/>
        </div>
    </div>
    </Link>
})}
            </div>

        </div>
    )
}
export default Service
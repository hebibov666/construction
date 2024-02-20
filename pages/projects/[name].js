import { useRouter } from "next/router"
import {useState} from "react"
import { client } from "@/sanity/lib/client";
import { ArrowBackIos } from "@mui/icons-material";
function Name({posts,decodedUrl}){
    const router=useRouter()
    const [bigPhoto,setbigPhoto]=useState(false)
    const zoomPhoto = (photoId) => {
        bigPhoto === photoId ? setbigPhoto(null) : setbigPhoto(photoId);
    };
    return(
        <div className="w-full flex flex-col overflow-hidden">
          <div className="flex w-full h-[50px] items-center pl-4 bg-red-600 text-white font-bold">
            <ArrowBackIos onClick={()=>{router.back()}}/>
<h1>{decodedUrl}</h1>
          </div>
          {posts.length != 0 ? <div className="grid p-[20px] gap-[10px] place-items-center grid-cols-2 max-[450px]:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {posts.map(post=>{
              return <div className={`w-1/1 ${post.description != null ?  "h-[290px]" : "h-[250px]"} bg-black`}>
                 <div onClick={()=>{zoomPhoto(post._id)}} className={`${bigPhoto===post._id ? "full-screen" : "w-full h-[250px]" }`}>
                 <img src={post.mainImage.asset.url} className={`${bigPhoto===post._id ? "w-auto h-auto" : "w-full h-full rounded-t-[7px] object-cover"}`}></img>
                 </div>
                 {post.description !=null ? <div className="pl-2 pt-[2px] bg-black h-[40px]">
                    <h1 className="text-white">{post.description}</h1>
                    </div> : null}
              </div>
          })}
        </div> : <div className="w-full flex items-center justify-center min-h-[100vh]">
            <h1 className="text-white">Bu kateqoriyada paylaşım yoxdur</h1>
            </div>}
        </div>
    )
}
export async function getServerSideProps(context) {
    const { params } = context;
    const decodedUrl = decodeURIComponent(params.name);
    try {
        const posts = await client.fetch(
            `*[_type=="post" && type == "${decodedUrl}"]{
                _id,
                title,
                description,
                mainImage{
                    asset -> {
                        _id,
                        url
                    }
                }
            }`
        );
        return {
            props: {
                posts,
                decodedUrl
            }
        };
    } catch (error) {
        console.log(error);
        return {
            props: {
                posts: [],
                decodedUrl
            }
        };
    }
}
export default Name
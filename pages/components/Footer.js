import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
function Footer({contact}){
    return(
        <div id='contact' className="pt-[50px] bg-black flex mt-[-40px] pt-[20px] gap-[30px]">
            <div className='text-white flex flex-col gap-[10px] p-[20px]'>
            <h1 className='font-bold text-xl'>Əlaqə</h1>
                <a href={`tel://${contact && contact[0].phone}`} className='flex gap-[15px] bg-blue-600 rounded-[7px] flex items-center justify-center h-[35px] w-[120px]'><CallIcon/>Zəng et</a>
                <a href={`mailto:${contact && contact[0].email}`} className='flex gap-[15px] bg-red-600 rounded-[7px] flex items-center justify-center h-[35px] w-[120px]'><MailIcon/>Email</a>
            </div>
            <div className='text-white flex flex-col gap-[10px] p-[20px]'>
                <h1 className='font-bold text-xl'>Sosial media</h1>
                <a href={`https://wa.me/${contact && contact[0].whatsapp}`} className='flex gap-[15px]'><WhatsAppIcon/> WhatsApp</a>
                <a href={`${contact && contact[0].instagram}`}  className='flex gap-[15px]'><InstagramIcon></InstagramIcon>Instagram</a>
           <a href={`${contact && contact[0].facebook}`} className='flex gap-[15px]'><FacebookOutlinedIcon/>Facebook</a>
            </div>
            <div>
                <h1>{contact && contact[0].adress}</h1>
            </div>
            </div>
    )
}
export default Footer
import img from '../../images/landingpage.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function LandingPage(){
    const router=useRouter();
    const studentLogin=()=>{
        router.push('/studentLogin')
    }
    const staffLogin=()=>{
        router.push('/staffLogin')
    }
    return (
        <div className="flex justify-evenly w-full h-full gap-5">
        <div className="w-1/2 p-3 flex flex-col justify-center gap-2">
            <div className='w-full text-center text-4xl mb-6 font-semibold'>
            Login into the Library System
            </div>
            <div className='w-full flex justify-evenly'>
                <div style={{width:"360px",height:"80px",background: "#FDB713",borderRadius: "13px"}}>
                    <button className='w-full h-full text-4xl font-black text-white' onClick={studentLogin}>Student</button>
                </div>
                <div style={{width:"360px",height:"80px",background: "#FDB713",borderRadius: "13px"}}>
                    <button className='w-full h-full text-4xl font-black text-white' onClick={staffLogin}>Staff</button>
                </div>
            </div>
        </div>
        <div className="w-1/2 p-3 flex flex-col justify-center">
            <Image src={img} alt="logo" />
        </div>
        </div>
    )
}
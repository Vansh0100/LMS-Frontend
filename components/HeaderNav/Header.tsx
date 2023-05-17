import logo from '../../images/iiitdmj-logo.png'
import Image from 'next/image'


export default function Header() {
  return (
    <div className='w-full h-full' style={{backgroundColor:"rgb(60,92,169)"}}>
        <div className='h-5/6 bg-white lg:w-1/5 md:w-2/5 sm:w-3/5 flex align-middle' style={{borderBottomRightRadius:"50px"}}>
          <div className='w-1/5 p-2 '>
            <Image src={logo} alt='logo'/>
          </div>
          <div className='w-4/5 p-2 '>
            <p className=' leading-tight font-medium'>P.D.P.M Indian Institute
of Information Technology, Design and manufacturing, 
Jabalpur</p>
          </div>
        </div>
    </div>
  )
}

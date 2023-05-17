import img from '../images/studentLogin.png'
import Image from 'next/image'
import StudentLoginForm from '@/components/Login/StudentLoginForm'
import Header from '@/components/HeaderNav/Header'
export default function StudentLogin() {
  return (
    <div className='h-screen w-screen'>
        <div className="w-full" style={{height:"10vh"}}>
        <Header/>
      </div>
      <div className="w-full p-2" style={{height:"90vh"}}>
      <div className='flex w-full container-fluid '>
        <div className='w-3/5 flex align-middle justify-center'>
            <Image src={img} alt="" className=' object-cover '/>
            
        </div>
        <div className='w-2/5 flex flex-col justify-center align-middle p-24'>
            <div className=' w-4/5 flex flex-col justify-center align-middle shadow-md text-center p-10 border-2'>
                <h2 style={{color:"rgb(60,92,169)",fontSize:"30px"}}>Login</h2>
                <div className='mt-3'>
                  <StudentLoginForm/>
                </div>
            </div>
        </div>

    </div>
      </div>
    </div>
  )
}

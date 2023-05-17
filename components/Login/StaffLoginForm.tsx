import { useState,ChangeEvent, FormEvent } from 'react'
import { useRouter } from 'next/router'
export default function StaffLoginForm(){
    const router=useRouter();
    const [userData,setUserData]=useState({
        username:"",
        password:"",
      })
      const updateData= (event: ChangeEvent<HTMLInputElement>) =>{
        setUserData({
          ...userData,
          [event.target.name]:event.target.value
        })
      }
      const submitHandler=(event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        if(userData.username==="user" && userData.password==="user@123"){
          console.log("hello"),
          router.push("/staffDashboard")
        }
        console.log(userData);
      }
    return (
        <>
        <form action="" onSubmit={submitHandler}>
                    <div className='mb-3 w-full h-12'>
                      <input type="text" name="username" id="username" placeholder='User Name' className='w-full h-full p-4 rounded-md' style={{background: "rgba(240, 247, 251, 1)"
}} onChange={updateData} required/>
                    </div>
                    <div className='mb-3 w-full h-12'>
                      <input type="password" name="password" id="" placeholder='Password' className='w-full h-full p-4 rounded-md' style={{background: "rgba(240, 247, 251, 1)"
}} onChange={updateData} required/>
                    </div>
                    <div className='mb-3 w-full h-12'>
                      {/* <button className=' text-lg p-2 w-4/5 rounded-lg text-white' style={{backgroundColor:"rgb(60,92,169)"}}>
                        LOG IN
                      </button> */}
                      <input type="submit" value="LOG IN" className='text-lg p-2 w-4/5 rounded-lg text-white' style={{backgroundColor:"rgb(60,92,169)"}}/>
                    </div>
                  </form>
        </>
    )
}
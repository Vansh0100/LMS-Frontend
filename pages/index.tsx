import Header from "@/components/HeaderNav/Header"
import Login from "@/components/Login/StudentLoginForm"
import LandingPage from "@/components/LandingPage/LandingPage"

export default function Home() {
  return (
    <div className=" h-screen w-screen">
      <div className="w-full" style={{height:"10vh"}}>
        <Header/>
      </div>
      <div className="w-full p-2" style={{height:"90vh"}}>
    <LandingPage/>
      </div>
    </div>
  )
}

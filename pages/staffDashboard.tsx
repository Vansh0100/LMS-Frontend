import Header from "@/components/HeaderNav/Header";
import { useState } from "react";
import { BiSearch,BiChevronDown } from "react-icons/bi";
// import Router from "next/router";
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgUser, CgProfile, CgBell, CgLogOff, CgCross } from "react-icons/cg";
import Profile from "@/components/HomePage/Profile";
import DashboardHome from "@/components/HomePage/Dashboard";
import StudentDashboard from "@/components/Dashboard/StudentDashboard";
export default function StaffDashboard(){
    const [isopen, setIsOpen] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [profile, setProfile] = useState(true);
  const router = useRouter();
  const logoutHandler = () => {
    router.push("/");
  };
    return (
        
        <div className="w-screen h-screen">
      <div className="w-full" style={{ height: "10vh" }}>
        <Header />
      </div>
      <div className="w-full" style={{ height: "6vh" }}>
        <div className="w-full h-full p-2 flex justify-between border-b-2 border-gray-200">
          <div className="pl-4">
            <RxHamburgerMenu size={30} />
          </div>
          <div className="flex gap-3 w-1/2 align-middle justify-end">
            <div
              className="w-3/5 p-2 flex gap-2"
              style={{ background: "rgba(240, 247, 251, 1)" }}
            >
              <div className="p-1">
                <BiSearch size={18} />
              </div>
              <div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="w-full rounded-lg"
                  placeholder="Search..."
                  style={{ background: "rgba(240, 247, 251, 1)" }}
                />
              </div>
            </div>
            <div className="flex  gap-1" style={{}}>
              <div className="">
                <p className="text-lg">Rakesh Roshan</p>
              </div>
              <div className="p-2">
                <CgProfile size={25} />
              </div>
              <div className="p-2">
                <CgBell size={25} />
              </div>
              <div className="p-2">
                <CgLogOff size={25} onClick={() => logoutHandler()} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full" style={{ height: "84vh" }}>
        <div
          className="h-full flex flex-col justify-between p-4 border-r-2 border-gray-200"
          style={{ width: "15vw" }}
        >
          <div>
          <div
            className="w-full flex p-3 border-b-2 border-gray-200 hover:bg-blue-100"
            style={{ color: "rgba(60, 92, 169, 1)" }}
          >
            <button
              className="w-full h-full text-left"
              onClick={() => setSelectedChoice(1)}
            >
              Masters
            </button>
            <button>
              <BiChevronDown size={20}/>
            </button>
          </div>
          <div
            className="w-full flex p-3 border-b-2 border-gray-200 hover:bg-blue-100"
            style={{ color: "rgba(60, 92, 169, 1)" }}
          >
            <button
              className="w-full h-full text-left"
              onClick={() => setSelectedChoice(2)}
            >
              Acquistioning
            </button>
            <button>
              <BiChevronDown size={20}/>
            </button>
          </div>
          <div
            className="w-full p-3 flex border-b-2 border-gray-200 hover:bg-blue-100"
            style={{ color: "rgba(60, 92, 169, 1)" }}
          >
            <button
              className="w-full h-full text-left"
              onClick={() => setSelectedChoice(3)}
            >
              Cataloging
            </button>
            <button>
              <BiChevronDown size={20}/>
            </button>
          </div>
          <div
            className="w-full flex p-3 border-b-2 border-gray-200 hover:bg-blue-100"
            style={{ color: "rgba(60, 92, 169, 1)" }}
          >
            <button
              className="w-full h-full text-left"
              onClick={() => setSelectedChoice(4)}
            >
              Circulation
            </button>
            <button>
              <BiChevronDown size={20}/>
            </button>
          </div>
          <div
            className="w-full flex p-3 border-b-2 border-gray-200 hover:bg-blue-100"
            style={{ color: "rgba(60, 92, 169, 1)" }}
          >
            <button
              className="w-full h-full text-left"
              onClick={() => setSelectedChoice(5)}
            >
              OPAC
            </button>
            
          </div>
          </div>
          <div className="flex justify-center w-full">
          <div
            className="w-full p-3 rounded-md"
            style={{backgroundColor:"#F0F7FB" }}
          >
            <button
              className="w-full h-full text-xl"
              onClick={()=>logoutHandler()}            >
             Logout
            </button>
          </div>
          </div>
        </div>

        
      </div>
    </div>
      
    )
}
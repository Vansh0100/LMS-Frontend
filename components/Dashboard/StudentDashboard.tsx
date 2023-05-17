import Image from "next/image"
import img from '../../images/studentDashboard.png'
export default function StudentDashboard(){
    return (
        <div className="w-full h-full flex flex-col justify-center">
            <Image src={img} alt="studentDashboard"/>

        </div>
    )
}
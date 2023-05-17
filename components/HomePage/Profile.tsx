import Details from "../User/Details"

export default function Profile(){
    return <div className="w-full p-10 flex flex-col">
    <div className="w-full flex justify-between">
        <div className="flex gap-3">
          <Details/>
        </div>
        <div className="p-4">
            <button className=" text-xl text-white p-2 rounded-lg" style={{background: "rgba(60, 92, 169, 1)"}}>
                View Report
            </button>
        </div>
    </div>
    <div className="w-full flex justify-between gap-4 mt-8">
        <div className="w-1/2 border-2 border-gray-200 rounded-md p-2">
            <h4 className="mb-4 text-2xl" style={{color: "rgba(60, 92, 169, 1)"}}>Personal Details</h4>

            <div className="mb-3">
                <p style={{color: "rgba(60, 92, 169, 1)"}} className=" text-xl">Department</p>
                <p className=" text-base" style={{color: "rgba(113, 113, 113, 1)"}}>IIITDMJ-Computer Science & Engineering</p>
            </div>
            <div className="mb-3">
                <p style={{color: "rgba(60, 92, 169, 1)"}} className=" text-xl">Member Group</p>
                <p className=" text-base" style={{color: "rgba(113, 113, 113, 1)"}}>UG Student</p>
            </div>
            <div className="mb-3">
                <p style={{color: "rgba(60, 92, 169, 1)"}} className=" text-xl">Year</p>
                <p className=" text-base" style={{color: "rgba(113, 113, 113, 1)"}}>3rd</p>
            </div>
            <div className="mb-3">
                <p style={{color: "rgba(60, 92, 169, 1)"}} className=" text-xl">Course/Designation</p>
                <p className=" text-base" style={{color: "rgba(113, 113, 113, 1)"}}>Student</p>
            </div>
            <div className="w-full flex justify-center p-2">
                <button className="p-2 text-white rounded-lg w-60 h-12 text-2xl" style={{background: "rgba(253, 183, 19, 1)"}}>
                    UPDATE
                </button>
            </div>
        </div>
        <div className="w-1/2 border-2 border-gray-200 rounded-md p-2">
            <h4 className="mb-4 text-2xl" style={{color: "rgba(60, 92, 169, 1)"}}>Library Status</h4>

            <div className="mb-3">
                <p style={{color: "rgba(60, 92, 169, 1)"}} className=" text-xl">Issue Limit</p>
                <p className=" text-base" style={{color: "rgba(113, 113, 113, 1)"}}>7</p>
            </div>
            <div className="mb-3">
                <p style={{color: "rgba(60, 92, 169, 1)"}} className=" text-xl">Already Issue</p>
                <p className=" text-base" style={{color: "rgba(113, 113, 113, 1)"}}>4</p>
            </div>
            <div className="mb-3">
                <p style={{color: "rgba(60, 92, 169, 1)"}} className=" text-xl">Duration Limit</p>
                <p className=" text-base" style={{color: "rgba(113, 113, 113, 1)"}}>30 Days</p>
            </div>
           
            <div className="w-full flex justify-center relative  p-2">
                <button className="p-2 text-white rounded-lg w-60 h-12 text-2xl" style={{background: "rgba(253, 183, 19, 1)"}}>
                    VIEW DASHBOARD
                </button>
            </div>
        </div>
    </div>
</div>
}
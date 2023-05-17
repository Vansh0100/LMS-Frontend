import Details from "../User/Details";
import { BiSearch } from "react-icons/bi";
import TableData from "./TableData";

export default function DashboardHome() {
  return (
    <div className="w-full p-10 flex flex-col">
      <div className="w-full flex justify-between">
        <div className="flex gap-3">
          <Details />
        </div>
        <div className="flex gap-4 p-2">
          <div className="flex flex-col w-2/5">
            <p
              style={{ color: "rgba(60, 92, 169, 1)" }}
              className=" text-xl font-medium"
            >
              Search Book
            </p>
            <div
              className=" p-2 flex gap-2 rounded-md"
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
          </div>
          <div className="flex flex-col w-1/5">
            <p
              style={{ color: "rgba(60, 92, 169, 1)" }}
              className=" text-base font-medium"
            >
              Search Book
            </p>
            <div
              className="w-3/4 p-2 flex gap-2 rounded-md"
              style={{ background: "rgba(253, 183, 19, 1)"              }}
            >
              <div className="w-3/4">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="w-full rounded-lg"
                //   placeholder="Search..."
                  style={{ background: "rgba(253, 183, 19, 1)" }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/5">
            <p
              style={{ color: "rgba(60, 92, 169, 1)" }}
              className=" text-base font-medium"
            >
              Search Book
            </p>
            <div
              className="w-3/4 p-2 flex gap-2 rounded-md"
              style={{ background: "rgba(253, 183, 19, 1)"              }}
            >
              <div className="w-3/4">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="w-full rounded-lg"
                //   placeholder="Search..."
                  style={{ background: "rgba(253, 183, 19, 1)" }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/5">
            <p
              style={{ color: "rgba(60, 92, 169, 1)" }}
              className=" text-base font-medium"
            >
              Suggestion For New Books
            </p>
            <div
              className="w-3/4 p-2 flex gap-2 rounded-md"
              style={{ background: "rgba(253, 183, 19, 1)"              }}
            >
              <div className="w-3/4">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="w-full rounded-lg"
                //   placeholder="Search..."
                  style={{ background: "rgba(253, 183, 19, 1)" }}
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <TableData/>
    </div>
  );
}

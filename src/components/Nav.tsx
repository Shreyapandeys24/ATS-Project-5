import { SlCalender } from "react-icons/sl";
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdModeNight } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
interface NavProps {
  name: string;
  position: string;
}
export default function Navbar(props: NavProps) {
  return (
    <div className="flex flex-row justify-between items-center p-4">
      <div className="flex flex-row items-center">
        <SlCalender />
        <FaRegSquareCheck />
      </div>
      <div className="flex flex-row items-center">
        <MdModeNight />
        <div>
          <div className="text-[10px]">{props.name}</div>
          <div className="text-[10px]">{props.position}</div>
        </div>
        <CgProfile />
      </div>
    </div>
  );
}

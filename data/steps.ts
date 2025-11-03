import { RiDraftLine, RiCodeBoxLine, RiSearchEyeLine } from "react-icons/ri";
import { IoBrushOutline } from "react-icons/io5";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { HiOutlineSupport } from "react-icons/hi";

export const steps = [
  { Icon: RiDraftLine, title: "1. Planning", desc: ["Discovery Phase", "UX Research"] },
  { Icon: IoBrushOutline, title: "2. Design", desc: ["Wireframing", "Prototyping"] },
  { Icon: RiCodeBoxLine, title: "3. Development", desc: ["Front End", "Back End"] },
  { Icon: RiSearchEyeLine, title: "4. Testing", desc: ["Quality Assurance", "Optimization"] },
  { Icon: HiOutlineRocketLaunch, title: "5. Launch", desc: ["Launch Your", "Project"] },
  { Icon: HiOutlineSupport, title: "6. Support", desc: ["Ongoing Support", "Maintenance"] },
];
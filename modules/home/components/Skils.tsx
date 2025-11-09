import SectionHeader from "@/common/components/elements/SectionHeader";
import { GrTechnology } from "react-icons/gr";

function Skils() {
  return (
    <div className='py-6 '>
      <SectionHeader
        icon={<GrTechnology size={24} />}
        title='skills & tools'
        description='My professional Skills & Tools.'
      />
      <div></div>
    </div>
  );
}

export default Skils;

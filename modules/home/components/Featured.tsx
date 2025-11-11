import SectionHeader from "@/common/components/elements/SectionHeader";
import { MdBackupTable } from "react-icons/md";

function Featured() {
  return (
    <div className='py-6 border-b border-muted/50'>
      <SectionHeader
        icon={<MdBackupTable size={24} />}
        title='Featured Section'
        description='Explore everything I’ve crafted, contributed, and accomplished.'
      />
    </div>
  );
}

export default Featured;

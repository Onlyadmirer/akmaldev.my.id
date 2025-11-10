import SectionHeader from "@/common/components/elements/SectionHeader";
import { GrTechnology } from "react-icons/gr";
import { useSkill } from "./useSkill";
import Image from "next/image";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";

function Skils() {
  const skills = useSkill();

  return (
    <div className='py-6 '>
      <SectionHeader
        icon={<GrTechnology size={24} />}
        title='skills & tools'
        description='My professional Skills & Tools.'
      />
      <div className='grid grid-cols-5 md:grid-cols-7 lg:grid-cols-11 items-start pt-6 space-y-4'>
        {skills.map((skill) => (
          <Tooltip key={skill.key}>
            <Link
              href={skill.link}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:scale-105 transition-all duration-300 ease-in-out'
            >
              <TooltipTrigger>
                <Image
                  src={skill.icon}
                  alt={skill.key}
                  width={50}
                  height={50}
                  priority
                />
              </TooltipTrigger>
            </Link>
            <TooltipContent>
              <p>{skill.key}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}

export default Skils;

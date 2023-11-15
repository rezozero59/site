import Image from "next/image";

const SkillCard = ({ iconClass, skillName, hoverClass, iconImage }) => {
  return (
    <div
      className={`skill-card bg-gray-100 text-gray-900 flex flex-col items-center gap-y-2 p-4 rounded-lg shadow-md transition duration-500 ease-in-out cursor-default border-black border-2 ${hoverClass} w-full`}
    >
      {iconClass ? (
        <i className={`${iconClass} text-4xl`}></i>
      ) : iconImage ? (
        <Image src={iconImage} alt={skillName} className="h-12 w-12" />
      ) : null}
      <p className="text-lg">{skillName}</p>
    </div>
  );
};

export default SkillCard;

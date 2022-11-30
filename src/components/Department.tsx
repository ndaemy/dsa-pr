import type { FC } from "react";

import Magnifier from "../icons/Magnifier";

type Props = {
  name: string;
  tags: string[];
  desc: string;
  color: string;
}

const Department: FC<Props> = ({ name, tags, desc, color }) => {
  const colorName = `bg-${color}-900`;

  return (
    <div className={`${colorName} p-6 rounded-lg w-full h-48 cursor-pointer`}>
      <p className="text-sm font-thin tracking-wider mb-3">
        {tags.map(tag => <span className="mr-1.5">{`#${tag}`}</span>)}
      </p>
      <p className="text-2xl font-bold mb-5">{name}</p>
      <p className="">
        <Magnifier />
      </p>
    </div>
  );
};

export default Department;

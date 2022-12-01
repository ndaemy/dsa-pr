import classNames from "classnames";
import { type FC, useState } from "react";

import Magnifier from "../icons/Magnifier";

type Props = {
  name: string;
  tags: string[];
  desc: string;
  color: string;
}

const Department: FC<Props> = ({ name, tags, desc, color }) => {
  const [clicked, setClicked] = useState(false);

  const colorName = `bg-${color}-900`;

  const toggleClick = () => {
    setClicked(prev => !prev);
  }

  return (
    <div
      className={
        `relative ${colorName} p-6 rounded-lg w-full h-80 cursor-pointer`
      }
      onClick={toggleClick}
    >
      <p
        className={
          classNames(
            "text-sm font-thin tracking-wider transition-all duration-300",
            { "mb-3": !clicked },
            { "mb-2": clicked },
            { "h-5": !clicked },
            { "h-0": clicked },
            { "opacity-0": clicked },
          )
        }
      >
        {tags.map(tag => <span key={tag} className="mr-1.5">{`#${tag}`}</span>)}
      </p>
      <p className="text-2xl font-bold mb-5">{name}</p>
      <p
        className={
          classNames(
            "absolute right-8 bottom-8 transition-all duration-300",
            {
              "opacity-0": clicked,
              "opacity-1": !clicked
            }
          )
        }
      >
        <Magnifier />
      </p>
      <p className={
        classNames(
          "font-extralight whitespace-pre-line transition-all duration-300",
          { "opacity-0": !clicked, "opacity-1": clicked }
        )
      }>
        {desc}
      </p>
    </div>
  );
};

export default Department;

import classNames from "classnames";
import { type FC, useState } from "react";

import Magnifier from "../icons/Magnifier";
import type { Department as TDepartment } from "./Main";

type Props = TDepartment;

const Department: FC<Props> = ({ name, tags, desc, color }) => {
  const [clicked, setClicked] = useState(false);

  const colorName = `bg-${color}-800`;

  const toggleClick = () => {
    setClicked(prev => !prev);
  };

  return (
    <div
      className={classNames(`relative ${colorName} p-6 rounded-lg w-full h-48 cursor-pointer`, {
        "h-fit": clicked,
      })}
      onClick={toggleClick}
    >
      <p
        className={classNames(
          "text-md font-thin tracking-wider leading-none transition-all duration-300",
          { "mb-3": !clicked },
          { "mb-2": clicked },
          { "h-7": !clicked },
          { "h-0": clicked },
          { "opacity-0": clicked },
        )}
      >
        {tags.map(tag => (
          <span key={tag} className="inline-block mr-1">{`#${tag}`}</span>
        ))}
      </p>
      <p className="text-2xl font-bold mb-5">{name}</p>
      <p
        className={classNames("absolute right-8 bottom-8 transition-all duration-300", {
          "opacity-0": clicked,
          "opacity-1": !clicked,
        })}
      >
        <Magnifier />
      </p>
      <p
        className={classNames(
          "text-lg font-light whitespace-pre-line transition-all duration-300",
          {
            "opacity-0": !clicked,
            "opacity-1": clicked,
          },
        )}
      >
        {desc}
      </p>
    </div>
  );
};

export default Department;

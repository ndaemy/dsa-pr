import classNames from "classnames";
import { type FC, useState } from "react";

import Magnifier from "../icons/Magnifier";
import type { Department as TDepartment } from "./Main";
import sorinoeul from "../images/sorinoeul.png";

type Props = TDepartment & {
  isNotOpenable?: boolean;
};

const Department: FC<Props> = ({ name, tags, desc, color, isNotOpenable }) => {
  const [clicked, setClicked] = useState(isNotOpenable ?? false);

  const colorName = `bg-${color}-800`;

  const toggleClick = () => {
    if (!isNotOpenable) {
      setClicked(prev => !prev);
    }
  };

  return (
    <div
      className={classNames(
        `relative ${colorName} p-6 rounded-lg w-full h-48`,
        {
          "h-fit": clicked,
        },
        {
          "cursor-pointer": !isNotOpenable,
        },
      )}
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
        {name === "소리노을" && <img src={sorinoeul} alt="소리노을 이미지" />}
        {desc}
        {name === "소리노을" && (
          <>
            <br />
            <br />
            <a
              href="/sorinoeul.hwp"
              className="text-white cursor-pointer px-3 py-2 bg-cyan-900 rounded-md"
            >
              소리노을 원서 다운로드
            </a>
          </>
        )}
      </p>
    </div>
  );
};

export default Department;

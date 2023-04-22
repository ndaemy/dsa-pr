import { Video } from "./Video";
import { departments } from "../Main";
import Department from "../Department";

const sorinoeul = departments[4];

export const Sorinoeul = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="max-w-3xl grid grid-cols-1 gap-6">
        <Video />
        <Department
          name={sorinoeul.name}
          tags={sorinoeul.tags}
          desc={sorinoeul.desc}
          color={sorinoeul.color}
          isOpenable
        />
      </div>
    </div>
  );
};

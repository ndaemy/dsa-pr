import type { FC } from "react";
import Department from "./Department";

const departments = [
  {
    name: "섬김팀",
    tags: ["헌금수전", "성전정리", "행사보조"],
    desc: "저희는 예배를 가장 가까이서 드림으로써 하나님을 섬기는 부서입니다.\n" +
      "또한 부활절, 추수감사절, 크리스마스 등 다양한 행사를 기획하고 진행합니다.\n" +
      "밝은 분위기에서 즐겁게 봉사할 친구들을 찾습니다.\n" +
      "예배를 준비해보고 싶었던 분들!!!\n" +
      "행사를 기획해보고 싶었던 분들!!\n" +
      "지금 당장 학생회로 연락주세요~!!\n",
    color: "violet",
  },
  {
    name: "학생회",
    tags: ["예배총괄", "큐시트제작", "행사기획"],
    desc: "저희는 예배를 가장 가까이서 드림으로써 하나님을 섬기는 부서입니다.\n" +
      "또한 부활절, 추수감사절, 크리스마스 등 다양한 행사를 기획하고 진행합니다.\n" +
      "밝은 분위기에서 즐겁게 봉사할 친구들을 찾습니다.\n" +
      "예배를 준비해보고 싶었던 분들!!!\n" +
      "행사를 기획해보고 싶었던 분들!!\n" +
      "지금 당장 학생회로 연락주세요~!!\n",
    color: "pink",
  },
];

const Main: FC = () => {
  return (
    <div className="px-4 md:px-8 py-24">
      <h1 className="text-4xl text-center font-bold leading-relaxed mb-3">고등부 학생처</h1>
      <h3 className="text-lg text-center text-neutral-400 font-normal leading-normal mb-12">고등부 학생처는 7개 부서로 이루어져 있습니다.</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {departments.map(({ name, tags, desc, color }) => (
          <Department name={name} tags={tags} desc={desc} color={color} />
        ))}
      </div>

      {/* tailwind build bug fix */}
      <div className="hidden bg-violet-900"></div>
      <div className="hidden bg-pink-900"></div>
    </div>
  );
};

export default Main;

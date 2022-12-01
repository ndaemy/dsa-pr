import {FC, useEffect, useState} from "react";

import Department from "./Department";
import { shuffle } from "../lib";

export type Department = {
  name: string;
  tags: string[];
  desc: string;
  color: string;
}

const departments: Department[] = [
  {
    name: "학생회",
    tags: ["예배총괄", "큐시트제작", "행사기획"],
    desc: "저희는 예배를 가장 가까이서 드림으로써 하나님을 섬기는 부서입니다.\n" +
    "또한 부활절, 추수감사절, 크리스마스 등 다양한 행사를 기획하고 진행합니다.\n" +
    "밝은 분위기에서 즐겁게 봉사할 친구들을 찾습니다.\n" +
    "예배를 준비해보고 싶었던 분들!!!\n" +
    "행사를 기획해보고 싶었던 분들!!\n" +
    "지금 당장 학생회로 연락주세요~!!",
    color: "pink",
  },
  {
    name: "섬김팀",
    tags: ["헌금수전", "성전정리", "행사보조"],
    desc: "저희는 예배를 가장 가까이서 드림으로써 하나님을 섬기는 부서입니다.\n" +
      "또한 부활절, 추수감사절, 크리스마스 등 다양한 행사를 기획하고 진행합니다.\n" +
      "밝은 분위기에서 즐겁게 봉사할 친구들을 찾습니다.\n" +
      "예배를 준비해보고 싶었던 분들!!!\n" +
      "행사를 기획해보고 싶었던 분들!!\n" +
      "지금 당장 학생회로 연락주세요~!!",
    color: "violet",
  },
  {
    name: "선교팀",
    tags: ["선교", "새친구환영", "RevivalKorea"],
    desc: "",
    color: "lime",
  },
  {
    name: "홍보팀",
    tags: ["행사촬영", "성전데코", "포스터,주보디자인", "인스타관리"],
    desc: "지원 담당 교사 : 박요셉 교사 010-5789-9899 (카톡 아이디 : gdandl3 )\n" +
      "지원 방법 : 담당 교사에게 문자,카톡으로 자신의 현재 마을과 연락처,이름을 보내주세요!\n" +
      "면접 날짜 및 장소 : 12월 18일 오후 2시 (비전센터 5층 홍보팀 부실) 장소 모를 시 연락주세요!\n" +
      "       (추가 면접 : 12월 25일 오후 2시)\n" +
      "면접 준비물 : 빛마을 학생처 지원서 (성전 입구에 비치되어 있습니다!)\n" +
      "고등부 진급자라면 누구나 지원 가능하니 많은 지원 부탁드립니다!",
    color: "emerald",
  },
  {
    name: "소리노을",
    tags: ["예배찬양", "워십", "악기연주"],
    desc: "소리노을에서는 다음과 같은 봉사를 합니다.\n" +
      "🧒🎤예배찬양 인도 - 매주 9시, 11시 두 번 드리는 예배를 여는 찬양을 인도합니다. \n" +
      "🎵헌금송, 워십 - 캠프, 절기 예배 때마다 찬양과 워십댄스를 합니다. \n" +
      "🎹악기 연주 - 베이스 기타, 드럼, 일렉기타, 키보드와 같은 악기로 찬양을 연주하고 연습합니다.\n" +
      "🎤노래 - 인도자 선생님과 함께 찬양을 합니다. 테너, 알토, 멜로디같이 파트를 나눠 특화된 연습을 합니다.\n" +
      "🙆워십, 율동 - 예배 때 드려지는 찬양의 율동과 헌금송으로 드려지는 워십댄스를 연습하고 예배를 준비합니다.\n" +
      "노래와 악기 연주, 춤으로 찬양하며 예배에 헌신하고 봉사할 친구들의 많은 지원을 바랍니다.🤗 ",
    color: "cyan",
  },
  {
    name: "방송팀",
    tags: ["방송", "영상제작", "카메라", "자막", "스위쳐", "예배생중계", "OnAir"],
    desc: "🎬방송팀이 하는일🎬\n" +
      "카메라-예배드리는 실황을 촬영합니다.\n" +
      "스위쳐-3대의 카메라로 찍은 예배 장면을 적절하게 스크린&TV화면에 송출해줍니다.\n" +
      "자막-찬양가사, 설교말씀, 광고등 예배에 필요한 내용을 자막으로 송출합니다.\n" +
      "유튜브생중계-온라인으로 예배드리는 친구들을 위해 예배 실황을 유튜브로 생중계합니다.\n" +
      "홍보영상 제작 - 동계파워캠프, 여름파워캠프, 신입생모집 등 홍보가 필요한 영상을 직접 기획하고 촬영 & 제작합니다.\n" +
      "🎞영상 제작이나 촬영으로 봉사하고 싶은 친구들, 방송에 관심이 있는 친구들 많이 지원해주세요~ 🎥 ",
    color: "blue",
  },
  {
    name: "찬양대",
    tags: ["고등부성가대", "찬양대", "빛마을성가대", "함께찬양"],
    desc: "",
    color: "fuchsia",
  },
];

const Main: FC = () => {
    const [suffledList, setSuffledList] = useState<Department[]>([]);

  useEffect(() => {
    setSuffledList(shuffle(departments));
  }, [])

  return (
    <div className="flex place-content-center">
      <div className="w-full max-w-4xl px-4 md:px-8 py-24">
        <h1 className="text-4xl text-center font-bold leading-relaxed mb-3">고등부 학생처</h1>
        <h3 className="text-lg text-center text-neutral-400 font-normal leading-normal mb-12">고등부 학생처는 7개 부서로 이루어져 있습니다.</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {suffledList.map(({ name, tags, desc, color }) => (
            <Department key={name} name={name} tags={tags} desc={desc} color={color} />
          ))}
        </div>

        {/* tailwind build bug fix */}
        <div className="hidden bg-lime-900 bg-emerald-900 bg-cyan-900 bg-blue-900 bg-violet-900 bg-fuchsia-900 bg-pink-900"></div>
      </div>
    </div>
  );
};

export default Main;

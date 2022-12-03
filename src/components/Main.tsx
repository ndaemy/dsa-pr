import { FC, useEffect, useState } from "react";

import Department from "./Department";
import { shuffle } from "../lib";

export type Department = {
  name: string;
  tags: string[];
  desc: string;
  color: string;
};

const departments: Department[] = [
  {
    name: "학생회",
    tags: ["예배총괄", "큐시트제작", "행사기획"],
    desc:
      "저희는 예배를 가장 가까이서 드림으로써 하나님을 섬기는 부서입니다.\n" +
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
    desc:
      "안녕하세요! 섬김팀입니다.😁\n" +
      "우리 섬김팀에서는 예배 시작 전과 예배 후 주님의 몸 된 성전을 깨끗하게 정리하고 예배 때는 헌금 수전을 통해 예배를 섬기고 있습니다.🙏🏻\n" +
      "그리고 빛마을에서 진행하는 행사가 있을 때 보조의 역할로 행사를 준비하고 진행합니다.\n" +
      "또한 파워 캠프 때 스태프로 행사를 준비하고 진행하는 역할을 맡고 있어요.\n" +
      "즐거운 분위기에서 함께 예배를 섬길 고등부 진급 예정 친구들 많이 지원해 주세요~🤗\n" +
      "궁금한 사항이 있으면 담당 교사 연락처로 연락 주시면 됩니다! \n" +
      "\n" +
      "면접 날짜 : 12월 18일, 25일 주일 오후 2시\n" +
      "면접 장소 : 세계선교센터 2층 섬김팀실 (빛마을 교사실 옆)\n" +
      "\n" +
      "담당 교사 : 백운선 010-9391-9212",
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
    desc:
      "안녕하세요! 홍보팀입니다! 저희 홍보팀은 부활절, 추수감사절, 성탄절, 수련회의 성전 데코와 행사 카메라 촬영을 합니다! 평소에 꾸미는 걸 좋아하는 학생, 카메라 촬영에 관심있는 학생, 봉사하고 싶은 학생들은 부담없이 지원해주세요!\n" +
      "\n" +
      "• 지원 담당 교사 : 박요셉 교사 010-5789-9899 (카톡 아이디 : gdandl3 )\n" +
      "\n" +
      "• 지원 방법 : 담당 교사에게 문자,카톡으로 자신의 현재 마을과 연락처,이름을 보내주세요!\n" +
      "\n" +
      "• 면접 날짜 및 장소 : 12월 18일 오후 2시 (비전센터 5층 홍보팀 부실) 장소 모를 시 연락주세요!\n" +
      "       (추가 면접 : 12월 25일 오후 2시)\n" +
      "\n" +
      "• 면접 준비물 : 빛마을 학생처 지원서 (성전 입구에 비치되어 있습니다!)\n" +
      "고등부 진급자라면 누구나 지원 가능하니 많은 지원 부탁드립니다!",
    color: "emerald",
  },
  {
    name: "소리노을",
    tags: ["예배찬양", "워십", "악기연주"],
    desc:
      "소리노을에서는 다음과 같은 봉사를 합니다.\n" +
      "\n" +
      "🧒🎤예배찬양 인도 - 매주 9시, 11시 두 번 드리는 예배를 여는 찬양을 인도합니다. \n" +
      "🎵헌금송, 워십 - 캠프, 절기 예배 때마다 찬양과 워십댄스를 합니다. \n" +
      "🎹악기 연주 - 베이스 기타, 드럼, 일렉기타, 키보드와 같은 악기로 찬양을 연주하고 연습합니다.\n" +
      "🎤노래 - 인도자 선생님과 함께 찬양을 합니다. 테너, 알토, 멜로디같이 파트를 나눠 특화된 연습을 합니다.\n" +
      "🙆워십, 율동 - 예배 때 드려지는 찬양의 율동과 헌금송으로 드려지는 워십댄스를 연습하고 예배를 준비합니다.\n" +
      "\n" +
      "노래와 악기 연주, 춤으로 찬양하며 예배에 헌신하고 봉사할 친구들의 많은 지원을 바랍니다.🤗 ",
    color: "cyan",
  },
  {
    name: "방송팀",
    tags: ["방송", "영상제작", "카메라", "자막", "스위쳐", "예배생중계", "OnAir"],
    desc:
      "🎬방송팀이 하는일🎬\n" +
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

const colors = [
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
];

const Main: FC = () => {
  const [suffledList, setSuffledList] = useState<Department[]>([]);

  useEffect(() => {
    setSuffledList(shuffle(departments));
  }, []);

  return (
    <div className="flex place-content-center">
      <div className="w-full max-w-2xl px-4 py-24">
        <h1 className="text-4xl text-center font-bold leading-relaxed mb-3">고등부 학생처</h1>
        <h3 className="text-lg text-center text-neutral-400 font-normal leading-normal mb-12">
          고등부 학생처는 7개 부서로 이루어져 있습니다.
        </h3>

        <div className="grid grid-cols-1 gap-6">
          {suffledList.map(({ name, tags, desc, color }) => (
            <Department key={name} name={name} tags={tags} desc={desc} color={color} />
          ))}
        </div>

        {/* toggle component with hide className */}
        <div className="flex justify-center gap-2 mt-12">
          {colors.map(color => (
            <div className={`w-4 h-4 bg-${color}-800`} />
          ))}
        </div>

        {/* tailwind build bug fix */}
        <div className="hidden bg-red-800 bg-orange-800 bg-amber-800 bg-yellow-800 bg-lime-800 bg-green-800 bg-emerald-800 bg-teal-800 bg-cyan-800 bg-sky-800 bg-blue-800 bg-indigo-800 bg-violet-800 bg-purple-800 bg-fuchsia-800 bg-pink-800 bg-rose-800" />
      </div>
    </div>
  );
};

export default Main;

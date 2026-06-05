import { ITil } from "@/types";

export const dummyData: ITil[] = [
  {
    id: "1",
    title: "Next.js App Router와 Pages Router의 차이",
    contents:
      "App Router는 app/ 디렉토리를 사용하며 React Server Components를 기본으로 지원한다. Pages Router와 달리 layout.tsx로 공통 레이아웃을 중첩 구조로 관리할 수 있고, 서버 컴포넌트에서 바로 async/await를 사용할 수 있다.",
    date: new Date("2026-05-21"),
    tags: ["Next.js", "React"],
  },
  {
    id: "2",
    title: "TypeScript interface vs type 차이점",
    contents:
      "interface는 선언 병합이 가능하고 객체 타입 정의에 주로 쓰인다. type은 유니온, 인터섹션 등 복잡한 타입 조합에 유리하다. 일반적으로 객체 구조 정의엔 interface, 그 외엔 type을 쓰는 것이 컨벤션이다.",
    date: new Date("2026-05-20"),
    tags: ["TypeScript"],
  },
  {
    id: "3",
    title: "fetch에서 response.ok를 꼭 확인해야 하는 이유",
    contents:
      "fetch는 404, 500 같은 HTTP 에러가 발생해도 catch로 떨어지지 않는다. response.ok가 false일 때 직접 throw 해줘야 에러를 제대로 처리할 수 있다. 네트워크 자체가 끊겼을 때만 catch로 떨어진다.",
    date: new Date("2026-05-19"),
    tags: ["JavaScript", "fetch"],
  },
];

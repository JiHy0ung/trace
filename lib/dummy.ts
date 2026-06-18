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
  {
    id: "4",
    title: "React useEffect 의존성 배열이 중요한 이유",
    contents:
      "useEffect는 의존성 배열에 들어간 값이 변경될 때만 실행된다. 누락되면 stale closure 문제가 발생하거나 lint 경고가 생긴다. 함수나 객체는 매 렌더링마다 참조가 바뀔 수 있어 useCallback, useMemo로 최적화가 필요하다.",
    date: new Date("2026-05-18"),
    tags: ["React", "Hooks"],
  },
  {
    id: "5",
    title: "Next.js에서 Client Component와 Server Component 구분",
    contents:
      "Server Component는 기본이며 서버에서 렌더링되어 번들 크기를 줄일 수 있다. useState, useEffect 등 브라우저 API가 필요하면 'use client'를 선언해야 한다. 클라이언트 컴포넌트는 상호작용이 필요한 UI에만 최소로 사용하는 것이 좋다.",
    date: new Date("2026-05-17"),
    tags: ["Next.js", "Architecture"],
  },
  {
    id: "6",
    title: "Git에서 reset vs revert 차이",
    contents:
      "reset은 커밋 히스토리를 되돌리며 히스토리를 변경한다. 반면 revert는 새로운 커밋을 생성해서 변경사항을 되돌린다. 협업 환경에서는 히스토리를 보존하는 revert가 안전하다.",
    date: new Date("2026-05-16"),
    tags: ["Git"],
  },
];

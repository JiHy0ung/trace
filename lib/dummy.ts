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
  {
    id: "7",
    title: "Hydration 오류가 발생하는 대표적인 이유",
    contents: `
## Hydration 오류란?

Next.js에서 Hydration 오류는 서버에서 렌더링된 HTML과 클라이언트에서 React가 다시 렌더링한 결과가 일치하지 않을 때 발생한다. 이 과정은 SSR(Server Side Rendering)과 CSR(Client Side Rendering)이 함께 동작하면서 생기는 핵심 개념이다.

---

## 주요 원인

### 1. 비결정적인 값 사용
- \`Date.now()\`
- \`Math.random()\`

이 값들은 렌더링 시점마다 결과가 달라지기 때문에 서버와 클라이언트 결과가 서로 다르게 나온다.

---

### 2. 브라우저 전용 API 사용
- window
- document
- localStorage

이 API들은 서버 환경에서는 존재하지 않기 때문에 초기 렌더링 단계에서 mismatch가 발생한다.

---

### 3. 테마/환경 의존 값
예를 들어 \`next-themes\`를 사용하는 경우:

- 서버: 기본 theme로 렌더링
- 클라이언트: 시스템 theme 적용

이 차이 때문에 UI가 다르게 렌더링된다.

---

## 해결 방법

### 1. useEffect로 클라이언트 전용 처리
브라우저에서만 실행되도록 로직을 이동한다.

### 2. dynamic import (SSR 비활성화)
특정 컴포넌트를 클라이언트 전용으로 분리한다.

### 3. 초기 렌더링 값 통일
서버와 클라이언트가 같은 초기 UI를 렌더링하도록 보장한다.

---

## 핵심 정리

Hydration 오류의 본질은 "서버와 클라이언트의 첫 렌더 결과가 달라지는 문제"이다.  
따라서 해결의 핵심은 **렌더링 결과를 동일하게 유지하는 것**이다.
`,
    date: new Date("2026-05-15"),
    tags: ["Next.js", "Debug"],
  },
];

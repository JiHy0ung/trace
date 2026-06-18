import { ITil } from "@/types";

export const dummyData: ITil[] = [
  {
    id: "1",
    title: "Next.js App Router와 Pages Router의 차이",
    contents: `
## Next.js App Router와 Pages Router의 차이

App Router는 \`app/\` 디렉토리를 사용하며 React Server Components를 기본으로 지원한다. Pages Router와 달리 \`layout.tsx\`를 통해 공통 레이아웃을 중첩 구조로 관리할 수 있다.

또한 Server Component에서 바로 \`async/await\`를 사용할 수 있어 데이터 패칭 구조가 단순해진다. 반면 Pages Router는 \`getServerSideProps\`, \`getStaticProps\` 같은 별도 데이터 패칭 방식이 필요하다.

결론적으로 App Router는 서버 중심 아키텍처로 더 현대적인 방식이며 확장성과 유지보수 측면에서 유리하다.
`,
    date: new Date("2026-05-21"),
    tags: ["Next.js", "React"],
  },
  {
    id: "2",
    title: "TypeScript interface vs type 차이점",
    contents: `
## TypeScript interface vs type 차이점

\`interface\`는 선언 병합이 가능하고 객체 타입 정의에 적합하다. 반면 \`type\`은 유니온, 인터섹션 등 더 복잡한 타입 조합에 유리하다.

일반적으로 객체 구조 정의에는 interface를 사용하고, 그 외 복합 타입에는 type을 사용하는 것이 컨벤션이다.

또한 interface는 확장이 자연스럽고 OOP 스타일에 가깝고, type은 함수형 조합에 더 적합하다.
`,
    date: new Date("2026-05-20"),
    tags: ["TypeScript"],
  },
  {
    id: "3",
    title: "fetch에서 response.ok를 꼭 확인해야 하는 이유",
    contents: `
## fetch에서 response.ok를 꼭 확인해야 하는 이유

fetch API는 HTTP 에러(404, 500 등)가 발생해도 자동으로 catch로 떨어지지 않는다.

즉, 네트워크 요청 자체가 실패한 경우만 catch로 들어가고, HTTP 상태 에러는 정상 응답으로 처리된다.

따라서 반드시 \`response.ok\`를 직접 확인하고, false일 경우 수동으로 throw 처리를 해줘야 한다.

이 처리를 하지 않으면 에러 상태인데도 UI에서는 정상 데이터처럼 처리되는 문제가 발생할 수 있다.
`,
    date: new Date("2026-05-19"),
    tags: ["JavaScript", "fetch"],
  },
  {
    id: "4",
    title: "React useEffect 의존성 배열이 중요한 이유",
    contents: `
## React useEffect 의존성 배열이 중요한 이유

useEffect는 의존성 배열에 들어간 값이 변경될 때만 실행된다.

의존성 배열이 누락되면 stale closure 문제가 발생하거나 ESLint 경고가 발생할 수 있다.

또한 객체나 함수는 매 렌더링마다 참조가 변경될 수 있기 때문에 useCallback, useMemo를 사용해 참조 안정성을 유지하는 것이 중요하다.

결론적으로 dependency array는 React 렌더링 최적화와 버그 예방의 핵심이다.
`,
    date: new Date("2026-05-18"),
    tags: ["React", "Hooks"],
  },
  {
    id: "5",
    title: "Next.js에서 Client Component와 Server Component 구분",
    contents: `
## Next.js Client Component vs Server Component

Server Component는 기본이며 서버에서 렌더링되어 번들 크기를 줄이고 성능을 최적화한다.

반면 Client Component는 \`useState\`, \`useEffect\` 같은 브라우저 API를 사용하기 위해 \`'use client'\` 선언이 필요하다.

클라이언트 컴포넌트는 상호작용이 필요한 UI에만 최소로 사용하는 것이 권장된다.

즉, Server Component 중심 + 필요한 부분만 Client Component로 분리하는 구조가 이상적이다.
`,
    date: new Date("2026-05-17"),
    tags: ["Next.js", "Architecture"],
  },
  {
    id: "6",
    title: "Git에서 reset vs revert 차이",
    contents: `
## Git reset vs revert 차이

\`reset\`은 커밋 히스토리를 직접 변경하여 이전 상태로 되돌리는 방식이다.

반면 \`revert\`는 새로운 커밋을 생성하여 변경 사항을 되돌리는 방식이다.

협업 환경에서는 히스토리를 보존하는 revert가 안전하다.

reset은 로컬 작업에서만 사용하는 것이 일반적이며, 이미 push된 커밋에는 revert가 권장된다.
`,
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

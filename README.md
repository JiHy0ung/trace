# Trace

개인 기술 블로그 사이트. NASA 오늘의 사진을 메인 배경으로, TIL(Today I Learn) 기록을 작성하고 관리할 수 있습니다.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui, Radix UI
- **Auth**: Supabase (GitHub OAuth)
- **Markdown**: @uiw/react-md-editor
- **Theme**: next-themes (light / dark / system)
- **Animation**: Motion

## Features

- NASA APOD(Astronomy Picture of the Day) 메인 배경
- TIL 목록 및 상세 페이지
- 마크다운 기반 글 작성 에디터 (관리자 전용)
- GitHub OAuth 소셜 로그인
- 다크 모드 지원

## Project Structure

```
app/
├── page.tsx          # 메인 (NASA APOD 배경)
├── til/
│   ├── page.tsx      # TIL 목록
│   └── [id]/page.tsx # TIL 상세
├── admin/
│   └── write/        # 글 작성 (관리자)
└── login/            # 로그인

components/
├── SideBar.tsx       # 사이드바 (네비게이션, 테마 토글, 로그인)
├── TilCard.tsx       # TIL 카드 컴포넌트
├── MarkdownViewer.tsx
└── AdminLoginButton.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

환경변수 설정 (`.env.local`):

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NASA_API_KEY=
```

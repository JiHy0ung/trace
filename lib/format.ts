export const stripMarkdown = (text: string): string => {
  return text
    .replace(/#{1,6}\s/g, "") // 헤더
    .replace(/\*\*|__|~~|`/g, "") // 볼드, 이탤릭, 취소선, 코드
    .replace(/```[\s\S]*?```/g, "") // 코드블록
    .replace(/\[.*?\]\(.*?\)/g, "") // 링크
    .replace(/^\s*[-*+]\s/gm, "") // 리스트
    .trim();
};

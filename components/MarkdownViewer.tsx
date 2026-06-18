"use client";

import MDEditor from "@uiw/react-md-editor";

export default function MarkdownViewer({ contents }: { contents: string }) {
  return <MDEditor.Markdown source={contents} />;
}

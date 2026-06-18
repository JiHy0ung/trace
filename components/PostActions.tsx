"use client";

import { deletePost } from "@/lib/post";
import { ITil } from "@/types";
import { useRouter } from "next/navigation";

interface Props {
  post: ITil;
}

const PostActions = ({ post }: Props) => {
  const router = useRouter();

  const handleDelete = async () => {
    await deletePost(post.id);
    router.push("/til");
  };

  const handleEdit = async () => {
    router.push(`/admin/edit/${post.id}`);
  };

  return (
    <div className="flex justify-center items-center gap-3">
      <button
        onClick={handleEdit}
        className="text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer"
      >
        수정
      </button>
      <button
        onClick={handleDelete}
        className="text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer"
      >
        삭제
      </button>
    </div>
  );
};

export default PostActions;

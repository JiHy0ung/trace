import { supabase } from "@/lib/supabase";
import { ITil } from "@/types";

export const getPosts = async (): Promise<ITil[]> => {
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);
  return data ?? [];
};

export const getPostById = async (id: number): Promise<ITil | null> => {
  const { data, error } = await supabase
    .from("post")
    .select("*")
    .eq("id", id)
    .single();
  if (error) return null;
  return data;
};

export const createPost = async (
  title: string,
  contents: string,
  tags: string[],
) => {
  const { error } = await supabase
    .from("post")
    .insert({ title, contents, tags });

  if (error) console.log("create error", error);

  return !error;
};

export const deletePost = async (id: number) => {
  const { error } = await supabase.from("post").delete().eq("id", id);

  if (error) console.log("delete error", error);

  return !error;
};

export const editPost = async (
  id: number,
  title: string,
  contents: string,
  tags: string[],
) => {
  const { error } = await supabase
    .from("post")
    .update({ title, contents, tags })
    .eq("id", id);

  if (error) console.log("update error", error);

  return !error;
};

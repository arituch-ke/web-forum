"use client";
import useFetch from "@/hooks/useFetch";
import { Author, Post } from "@/types";
import SkeletonLoader from "@/components/skeleton-loader";
import PostCard from "@/components/post-card";
import { currentTimezone } from "@/utils/formatDate";

export default function Home() {
  const posts = useFetch<Post[]>("/json/posts.json");
  const authors = useFetch<Author[]>("/json/authors.json");

  const findAuthor = (id: number) => {
    return authors.data?.find((author) => author.id === id);
  };

  const displayPosts = () =>
    posts.data &&
    posts.data.map((post) => {
      const author = findAuthor(post.author_id);
      return <PostCard key={post.id} post={post} author={author} />;
    });

  return (
    <section className="flex flex-col items-start justify-start">
      <h1 className="text-3xl font-medium mb-10">MAQE Forum</h1>
      <p className="mb-4">Your current timezone is: &nbsp;{currentTimezone}</p>
      {posts.loading && SkeletonLoader({ length: 10 })}
      {displayPosts()}
    </section>
  );
}

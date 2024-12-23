import React from "react";

async function fetchPost(id: string) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const res = await fetch(url);

  return res.json();
}

export default async function DynamicPostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await fetchPost(params.id);

  return (
    <div className="mx-auto text-center p-8 ">
      <h1 className="text-5xl font-bold mb-4">
        {" "}
        <span className="text-[#044e83]">Title</span> <br />
        {post.title}
      </h1>
      <p className="text-lg">
        {" "}
        <span className="text-[#044e83] text-5xl font-bold">
          Body <br />
        </span>{" "}
        {post.body}
      </p>
      <p className="text-gray-500 mt-4">Post ID: {params.id}</p>
    </div>
  );
}


import Link from "next/link";

export default async function Home() {

  const url = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await url.json();

  return (
    <div>
      
      {res.map((post: any, index: number) => (
        <div key={index} className="font-sans text-2xl text-center mx-auto">
          <Link href={`${post.id}`}>
                {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

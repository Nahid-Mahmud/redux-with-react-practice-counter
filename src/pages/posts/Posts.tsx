import { useGetPostsQuery } from "@/redux/features/post/postApi";
import { Link } from "react-router";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Posts() {
  const { data: postsData, isLoading } = useGetPostsQuery(undefined);
  console.log(isLoading, postsData);
  return (
    <div>
      {isLoading ? (
        <div className="text-center text-2xl font-bold">Loading...</div>
      ) : (
        <ul className="list-disc pl-5">
          {postsData?.map((post: IPost) => (
            <Link to={`/posts/${post.id}`} className="no-underline text-black" key={post.id}>
              <li key={post.id} className="mb-2">
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p>{post.body}</p>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}

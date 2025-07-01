import { useGetPostByIdQuery } from "@/redux/features/post/postApi";
import { useParams } from "react-router";

export default function SinglePost() {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery(id as string, {
    skip: !id,
  });
  console.log(id);
  return (
    <div>
      {isLoading ? (
        <div className="text-center text-2xl font-bold">Loading...</div>
      ) : (
        <div className="p-5">
          <h1 className="text-2xl font-bold mb-4">{post?.title}</h1>
          <p>{post?.body}</p>
        </div>
      )}
    </div>
  );
}

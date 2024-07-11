import { BlogsApi } from "../blogs-api";

export default function Blog({ params }: any) {
  const id = params["blog"];

  console.log(id);

  const blog = BlogsApi.find((blog) => blog.slug === id) as any;

  return (
    <div className="flex flex-col gap-8 p-3">
      <h1 className="text-3xl text-white font-black">{blog?.title}</h1>
      {blog?.comp}
    </div>
  );
}

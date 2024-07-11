import { Fragment } from "react";
import BlogCard from "./BlogCard";
import { BlogsApi } from "./blogs-api";

export default function BlogsPage() {
  return (
    <>
      <div className="flex flex-col gap-8">
        {BlogsApi.map((blog) => (
          <Fragment key={blog.slug}>
            <BlogCard blog={blog} />
          </Fragment>
        ))}
      </div>
    </>
  );
}

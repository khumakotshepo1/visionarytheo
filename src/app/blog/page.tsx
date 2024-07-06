import { Fragment } from "react";
import BlogCard from "./[blog]/BlogCard";
import Blog from "./[blog]/page";

export default function BlogsPage() {
  const blogs = [
    {
      title: "Blog 1",
      slug: "blog-1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa, enim quam at magni maiores excepturi! Sapiente reprehenderit modi nam!",
      date: "2022-01-01",
    },
    {
      title: "Blog 2",
      slug: "blog-2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa, enim quam at magni maiores excepturi! Sapiente reprehenderit modi nam!",
      date: "2022-01-01",
    },
    {
      title: "Blog 3",
      slug: "blog-3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa, enim quam at magni maiores excepturi! Sapiente reprehenderit modi nam!",
      date: "2022-01-01",
    },

    {
      title: "Blog 4",
      slug: "blog-4",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa, enim quam at magni maiores excepturi! Sapiente reprehenderit modi nam!",
      date: "2022-01-01",
    },

    {
      title: "Blog 5",
      slug: "blog-5",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa, enim quam at magni maiores excepturi! Sapiente reprehenderit modi nam!",
      date: "2022-01-01",
    },

    {
      title: "Blog 6",
      slug: "blog-6",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa, enim quam at magni maiores excepturi! Sapiente reprehenderit modi nam!",
      date: "2022-01-01",
    },

    {
      title: "Blog 7",
      slug: "blog-7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa, enim quam at magni maiores excepturi! Sapiente reprehenderit modi nam!",
      date: "2022-01-01",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-8">
        {blogs.map((blog) => (
          <Fragment key={blog.slug}>
            <BlogCard blog={blog} />
          </Fragment>
        ))}
      </div>
    </>
  );
}

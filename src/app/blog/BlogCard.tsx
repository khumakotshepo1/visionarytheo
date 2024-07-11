import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type BlogTypes = {
  title: string;
  slug: string;
  description: string;
  date: string;
};

export default function BlogCard({ blog }: { blog: BlogTypes }) {
  return (
    <Card className="w-full bg-slate-800/40 p-6 rounded-xl text-gray-200 shadow-white">
      <CardHeader>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription className="text-gray-400">{blog.date}</CardDescription>
      </CardHeader>
      <CardContent>{blog.description}</CardContent>
      <CardFooter>
        <Link href={`/blog/${blog.slug}`}>Read more</Link>
      </CardFooter>
    </Card>
  );
}

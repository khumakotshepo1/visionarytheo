import Image from "next/image";

function NotFoundPage() {
  return (
    <div>
      <Image
        src="/404.jpg"
        alt="404"
        width={1920}
        height={1080}
        className="rounded-xl object-cover"
      />
    </div>
  );
}

export default NotFoundPage;

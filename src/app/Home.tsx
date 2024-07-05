import { NavLinks } from "@/components/NavLinks";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center mt-28">
      <span className="flex flex-col justify-start gap-8 p-3">
        <div className="flex justify-start items-center w-full gap-4">
          <div className="rounded-full p-1 bg-yellow-600/25">
            <Avatar className="w-20 h-20 lg:w-28 lg:h-28 border-2 border-yellow-600/70">
              <AvatarImage src="/avatar.webp" alt="Tshepo Theodore Khumako" />
              <AvatarFallback>TT</AvatarFallback>
            </Avatar>
          </div>
          <span>
            <h1 className="font-black text-xl lg:text-3xl text-yellow-600/90 tracking-wider operatorMono.variable">
              VisionaryTT
            </h1>
            <p className="font-bold text-base lg:text-lg text-gray-400">
              Full-Stack Engineer
            </p>
          </span>
        </div>
        <p className="font-bold text-base lg:text-lg text-yellow-600/90">
          What I'm learning about shipping great products, becoming a better
          developer, and growing a career in tech.
        </p>
        <ul className="flex gap-8">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>
                <button className="flex gap-2 items-center">
                  <span
                    className={cn(
                      "bg-gradient-to-tr from-white to-gray-200 p-1 rounded-xl shadow-lg hover:shadow-yellow-600/70"
                    )}
                  >
                    {link.icon}
                  </span>
                  <span className="hidden md:block font-bold text-white capitalize">
                    {link.name}
                  </span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </span>
    </section>
  );
}

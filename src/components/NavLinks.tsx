import { MessageSquareTextIcon, Video, Youtube } from "lucide-react";
import { Icons } from "./icons";

export const NavLinks = [
  {
    name: "videos",
    path: "/videos",
    icon: <Video className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />,
  },
  {
    name: "blog",
    path: "/blog",
    icon: (
      <MessageSquareTextIcon className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />
    ),
  },
  {
    name: "youtube",
    path: "http://www.youtube.com/@VisionaryTT",
    icon: <Youtube className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />,
  },
  {
    name: "twitter",
    path: "https://x.com/khumakotshepo1",
    icon: (
      <Icons.twitter className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />
    ),
  },
  {
    name: "github",
    path: "https://github.com/khumakotshepo1/khumakotshepo1",
    icon: (
      <Icons.gitHub className="h-4 w-4 hover:h-5 hover:w-5 transition-all" />
    ),
  },
];

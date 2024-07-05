import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Logo() {
  return (
    <div className="rounded-full hover:p-[2px] h-12 w-12 flex items-center justify-center bg-gradient-to-tr from-yellow-600 to-yellow-400 hover:from-yellow-400 hover:to-yellow-600">
      <Avatar className="w-10 h-10 hover:w-[44px] hover:h-[44px] transition-all">
        <AvatarImage src="/avatar.webp" alt="Tshepo Theodore Khumako" />
        <AvatarFallback>TT</AvatarFallback>
      </Avatar>
    </div>
  );
}

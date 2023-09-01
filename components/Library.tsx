"use client";

import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

// import { Song } from "@/types";
// import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
// import useAuthModal from "@/hooks/useAuthModal";
// import useSubscribeModal from "@/hooks/useSubscribeModal";
// import useOnPlay from "@/hooks/useOnPlay";

// import MediaItem from "./MediaItem";

function Library() {
  const OnAddClick = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium text-md">Your Library</p>
        </div>
        <AiOutlinePlus
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          size={20}
          onClick={OnAddClick}
        />
      </div>
      <div className="flex flex-col gap-y-2 px-3 mt-4"></div>
    </div>
  );
}

export default Library;

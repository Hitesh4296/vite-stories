// libs
import { formatDateToNow } from "~/utils/date-fns";

// components
import Actions from "~/components/StoryPreview/components/Actions";
import UserDetails from "~/components/StoryPreview/components/UserDetails";

// types
import type { HeaderProps } from "./types";

export default function Header({ story }: HeaderProps) {
  return (
    <div className="absolute top-0 left-0 w-full h-[64px] z-[54] bg-gradient-to-b from-black to-transparent">
      <div className="p-[1rem] flex gap-[1rem] justify-between w-full">
        <UserDetails
          profileImage={story.user.profile_image}
          username={story.user.username}
        >
          {story.media[0].created_at && (
            <p className="text-white text-[0.8rem] font-normal">
              {formatDateToNow(story.media[0].created_at)} ago
            </p>
          )}
        </UserDetails>
        <Actions />
      </div>

      <div className="fixed bottom-0 left-0 w-full h-[64px] z-[51] bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}

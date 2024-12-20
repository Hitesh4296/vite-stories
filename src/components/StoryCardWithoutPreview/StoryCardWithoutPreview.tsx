// libs
import { cn } from "~/utils/tailwind";

// types
import { type Story } from "~/types/mock-stories";

// components
import { useStoriesContext } from "~/components/StoryPreviewHandler/Context";

export default function StoryCardWithoutPreview({ story }: { story: Story }) {
  const isSeen = story.media.every((media) => media.seen);

  const { setActiveStory } = useStoriesContext();

  return (
    <div
      className={cn(
        "flex flex-col gap-[0.5rem] rounded-full overflow-hidden flex-none w-[4rem] p-[4px]",
        {
          "border-2 border-red-500": !isSeen,
          "border-2 border-gray-200": isSeen,
        }
      )}
      onClick={() => setActiveStory(story.id)}
      data-testid="story-card-without-preview"
      data-seen={!isSeen}
    >
      <div className="aspect-square w-full bg-gray-200 rounded-full overflow-hidden">
        <img
          src={story.user.profile_image}
          alt={story.user.username}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}

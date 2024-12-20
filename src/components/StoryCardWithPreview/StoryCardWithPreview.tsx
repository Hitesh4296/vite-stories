// libs
import { cn } from "~/utils/tailwind";

// components
import { useStoriesContext } from "~/components/StoryPreviewHandler/Context";

// types
import { type Story } from "~/types/mock-stories";

export default function StoryCardWithPreview({ story }: { story: Story }) {
  const isSeen = story.media.every((media) => media.seen);

  const { setActiveStory } = useStoriesContext();

  return (
    <div
      className="flex flex-col gap-[0.5rem]"
      onClick={() => setActiveStory(story.id)}
      data-testid="story-card-with-preview"
    >
      <div className="w-[8rem] bg-gray-500 rounded-lg aspect-[3/4] flex relative overflow-hidden">
        <div className="w-full bg-gray-200">
          <img
            src={story.media[0].url}
            alt={story.user.username}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className={cn(
            "aspect-square w-[3rem] rounded-full overflow-hidden self-center absolute bottom-[8px] left-[calc(50%-1.5rem)] p-[3px]",
            {
              "border-2 border-red-500": !isSeen,
              "border-2 border-gray-200": isSeen,
            }
          )}
        >
          <img
            src={story.user.profile_image}
            alt={story.user.username}
            className="w-full h-full object-cover rounded-full overflow-hidden"
          />
        </div>
      </div>
    </div>
  );
}

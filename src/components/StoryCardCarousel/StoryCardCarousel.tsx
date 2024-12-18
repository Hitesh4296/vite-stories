// components
import StoryCardWithPreview from "~/components/StoryCardWithPreview";
import StoryCardWithoutPreview from "~/components/StoryCardWithoutPreview";

// types
import { type Story } from "~/types/mock-stories";

export default function StoryCardCarousel({
  stories,
  showPreview,
}: {
  stories: Story[];
  showPreview?: boolean;
}) {
  const CardComponent = showPreview
    ? StoryCardWithPreview
    : StoryCardWithoutPreview;

  return (
    <div className="flex max-w-screen overflow-x-auto gap-[0.5rem] p-[0.5rem]">
      {stories.map((story) => (
        <CardComponent story={story} key={story.id} />
      ))}
    </div>
  );
}

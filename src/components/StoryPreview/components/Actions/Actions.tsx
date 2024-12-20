// icons
import { RxCross1 } from "react-icons/rx";

// components
import { useStoriesContext } from "~/components/StoryPreviewHandler/Context";

export default function Actions() {
  const { hidePreview } = useStoriesContext();

  return (
    <div className="flex gap-[1rem]">
      <div
        className="cursor-pointer"
        onClick={hidePreview}
        data-testid="hide-preview"
      >
        <RxCross1 size={24} />
      </div>
    </div>
  );
}

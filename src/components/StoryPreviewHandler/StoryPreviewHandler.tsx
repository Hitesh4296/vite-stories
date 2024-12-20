// libs
import { useCallback, useState } from "react";

// components
import StoryPreview from "~/components/StoryPreview/StoryPreview";
import { StoryPreviewHandlerContext } from "./Context";

// types
import type { StoryPreviewHandlerProps } from "./types";
import type { Story } from "~/types/mock-stories";
import Portal from "../Portal";

export default function StoryPreviewHandler({
  children,
  stories,
}: StoryPreviewHandlerProps) {
  const [activeStory, setActiveStory] = useState<string>("");
  const [activeStoryData, setActiveStoryData] = useState<Story | null>(null);

  const hidePreview = useCallback(() => {
    setActiveStory("");
  }, []);

  const onStoryComplete = useCallback(() => {
    const activeStoryIndex = stories.findIndex(
      (story) => story.id === activeStory
    );

    // if next story exists, set it as active story
    if (activeStoryIndex < stories.length - 1) {
      const nextStoryIndex = activeStoryIndex + 1;
      const nextStory = stories[nextStoryIndex];
      if (!(document as any).startViewTransition) {
        setActiveStory(nextStory.id);
        setActiveStoryData(nextStory);
      } else {
        (document as any).startViewTransition(() => {
          setActiveStory(nextStory.id);
          setActiveStoryData(nextStory);
        });
      }
    } else {
      // if no next story, set active story to first story
      setActiveStory("");
      setActiveStoryData(null);
      hidePreview();
    }
  }, [stories, activeStory, hidePreview]);

  const showPreviousStory = useCallback(() => {
    const activeStoryIndex = stories.findIndex(
      (story) => story.id === activeStory
    );
    if (activeStoryIndex > 0) {
      const previousStoryIndex = activeStoryIndex - 1;
      const previousStory = stories[previousStoryIndex];
      setActiveStory(previousStory.id);
      setActiveStoryData(previousStory);
    } else {
      setActiveStory("");
      setActiveStoryData(null);
      hidePreview();
    }
  }, [stories, activeStory, hidePreview]);

  const showPreview = useCallback(
    (storyId: string) => {
      const story = stories.find((story) => story.id === storyId);
      if (story) {
        if (!(document as any).startViewTransition) {
          setActiveStory(story.id);
          setActiveStoryData(story);
        } else {
          (document as any).startViewTransition(() => {
            setActiveStory(story.id);
            setActiveStoryData(story);
          });
        }
      }
    },
    [stories]
  );

  return (
    <StoryPreviewHandlerContext.Provider
      value={{
        stories,
        activeStory,
        setActiveStory: showPreview,
        showNextStory: onStoryComplete,
        hidePreview,
        showPreviousStory,
      }}
    >
      {children}
      <Portal>
        {activeStory && activeStoryData && (
          <StoryPreview story={activeStoryData} key={activeStory} />
        )}
      </Portal>
    </StoryPreviewHandlerContext.Provider>
  );
}

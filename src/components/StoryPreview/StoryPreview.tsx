// libs
import { useCallback, useEffect, useRef, useState } from "react";

// types
import type { StoryPreviewProps } from "./types";

// components
import Header from "./components/Header";

// context
import { useStoriesContext } from "../StoryPreviewHandler/Context";

// utils
import { cn } from "~/utils/tailwind";

export default function StoryPreview({ story }: StoryPreviewProps) {
  const storyCount = story.media.length;
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const duration = 5000;

  const { showNextStory, showPreviousStory } = useStoriesContext();

  const handleNext = useCallback(() => {
    setIsLoaded(false);
    setCurrentStoryIndex((prev) => {
      if (prev < storyCount - 1) {
        return prev + 1;
      } else {
        showNextStory();
        return 0;
      }
    });
  }, [showNextStory, storyCount]);

  const handlePrevious = useCallback(() => {
    setIsLoaded(false);
    if (currentStoryIndex > 1) {
      setCurrentStoryIndex((prev) => prev - 1);
    } else {
      showPreviousStory();
      setCurrentStoryIndex(0);
    }
  }, [currentStoryIndex, showPreviousStory]);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleStoryLoaded = useCallback(() => {
    setIsLoaded(() => {
      timeoutRef.current = setTimeout(() => {
        setIsLoaded(false);
        setCurrentStoryIndex((prev) => {
          if (prev < storyCount - 1) {
            return prev + 1;
          } else {
            showNextStory();
            clearTimer();
            return 0;
          }
        });
      }, duration);
      return true;
    });
  }, [showNextStory, storyCount]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  return (
    <div
      className="fixed inset-0 h-full bg-black top-0 left-0 z-[51] items-center justify-center flex flex-col "
      key={story.id}
    >
      <div className="fixed top-0 w-full z-[55]">
        <div className="relative top-0 left-0 w-full z-[52] h-fit flex gap-[2px] justify-center items-center p-[2px]">
          {Array.from({ length: storyCount }).map((_, index) => (
            <div
              key={index}
              className={`w-full h-[4px] rounded-full relative bg-gray-500`}
            >
              <div
                className={cn(`absolute inset-0 rounded-full`, {
                  "bg-white animate-expand-to-full":
                    index === currentStoryIndex && isLoaded,
                  "bg-white": index < currentStoryIndex,
                })}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <Header story={story} />
      <div className="w-full relative">
        <div
          className="fixed w-[50vw] left-0 top-0 h-full z-[52]"
          onClick={handlePrevious}
        ></div>
        <img
          src={story.media[currentStoryIndex].url}
          alt={story.user.username}
          data-test={currentStoryIndex}
          key={currentStoryIndex}
          className="animate-fade-in"
          onLoad={handleStoryLoaded}
          onError={handleStoryLoaded}
        />
        {!isLoaded && (
          <div
            className="fixed right-[calc(50%-12px)] top-[calc(50%-12px)] z-[52] inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          ></div>
        )}
        <div
          className="fixed w-[50vw] right-0 top-0 h-full z-[52]"
          onClick={handleNext}
        ></div>
      </div>
    </div>
  );
}

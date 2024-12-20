import { createContext, useContext } from "react";
import type { StoryPreviewHandlerContextType } from "./types";

export const StoryPreviewHandlerContext =
  createContext<StoryPreviewHandlerContextType>({
    stories: [],
    activeStory: "",
    setActiveStory: () => {},
    showNextStory: () => {},
    showPreviousStory: () => {},
    hidePreview: () => {},
  });

export const useStoriesContext = () => {
  return useContext(StoryPreviewHandlerContext);
};

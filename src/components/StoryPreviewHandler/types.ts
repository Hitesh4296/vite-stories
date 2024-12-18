import type { Story } from "~/types/mock-stories";

export type StoryPreviewHandlerContextType = {
  stories: Story[];
  activeStory: string;
  setActiveStory: (story: string) => void;
  showNextStory: () => void;
  showPreviousStory: () => void;
  hidePreview: () => void;
};

export type StoryPreviewHandlerProps = {
  stories: Story[];
  children: React.ReactNode | React.ReactNode[];
};

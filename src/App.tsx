import Header from "~/components/Header";
import "./App.css";
import StoryPreviewHandler from "./components/StoryPreviewHandler";
import StoryCardCarousel from "./components/StoryCardCarousel";
import { stories } from "~/mocks/stories";
import { useMemo } from "react";

function App() {
  const transformedStories = useMemo(() => {
    const storiesNotSeen = stories.filter(
      (story) => !story.media.every((media) => media.seen)
    );
    const storiesSeen = stories.filter((story) =>
      story.media.every((media) => media.seen)
    );

    return [...storiesNotSeen, ...storiesSeen];
  }, []);

  return (
    <main>
      <Header />
      <StoryPreviewHandler stories={transformedStories}>
        <StoryCardCarousel stories={transformedStories} />
        <StoryCardCarousel stories={transformedStories} showPreview />
      </StoryPreviewHandler>
    </main>
  );
}

export default App;

import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect, test, describe, vi } from "vitest";
import { stories } from "./mocks/stories";
import App from "./App";

vi.mock("~/components/Portal", () => ({
  __esModule: true,
  default: vi.fn(({ children }) => <>{children}</>),
}));

describe("App", () => {
  test("renders the component without errors", () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  test("renders the component with the correct number of story cards", () => {
    expect(screen.getAllByTestId("story-card-with-preview")).toHaveLength(
      stories.length
    );
  });

  test("renders the component with the correct number of story cards without preview", () => {
    expect(screen.getAllByTestId("story-card-without-preview")).toHaveLength(
      stories.length
    );
  });

  test("verifies that story cards are in the correct state", () => {
    const allElements = screen.getAllByTestId("story-card-without-preview");
    const seenElements = allElements.filter(
      (element) => element.getAttribute("data-seen") === "true"
    );
    const unseenElements = allElements.filter(
      (element) => element.getAttribute("data-seen") === "false"
    );
    expect(seenElements).toHaveLength(stories.length - 3);
    expect(unseenElements).toHaveLength(3);
  });

  test("verifies that the story preview is rendered when a story card is clicked", () => {
    expect(screen.queryByTestId("story-preview")).toBeNull();
    const storyCard = screen.getAllByTestId("story-card-with-preview")[0];
    fireEvent.click(storyCard);
    expect(screen.getByTestId("story-preview")).toBeTruthy();
  });

  test("verified that story preview is shown for the correct story", () => {
    const storyCard = screen.getAllByTestId("story-card-with-preview")[0];
    fireEvent.click(storyCard);
    expect(screen.getByTestId("story-preview")).toBeTruthy();
    expect(
      screen.getByTestId("story-preview").getAttribute("data-story-id")
    ).toBe(stories[0].id);
  });

  test("verifies that story preview is hidden when the hide preview button is clicked", () => {
    // show story preview
    const storyCard = screen.getAllByTestId("story-card-with-preview")[0];
    fireEvent.click(storyCard);
    expect(screen.getByTestId("story-preview")).toBeTruthy();

    // hide story preview
    const hidePreviewButton = screen.getByTestId("hide-preview");
    fireEvent.click(hidePreviewButton);

    // verify that story preview is hidden
    expect(screen.queryByTestId("story-preview")).toBeNull();
  });
});

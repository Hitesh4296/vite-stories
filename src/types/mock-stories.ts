export type Story = {
  id: string;
  user: {
    username: string;
    profile_image: string;
  };
  media: {
    type: "image" | "video";
    url: string;
    created_at: string;
    seen: boolean;
  }[];
};

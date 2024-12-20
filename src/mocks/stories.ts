import type { Story } from "~/types/mock-stories";

export const stories: Story[] = [
  {
    id: "story_001",
    user: {
      username: "travelwithalex",
      profile_image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=101",
        created_at: "2024-12-18T02:00:00Z",
        seen: false,
      },
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=102",
        created_at: "2024-12-17T08:05:00Z",
        seen: false,
      },
    ],
  },
  {
    id: "story_002",
    user: {
      username: "vlogswithbunny",
      profile_image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=103",
        created_at: "2024-12-17T09:30:00Z",
        seen: false,
      },
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=104",
        created_at: "2024-12-17T09:32:00Z",
        seen: false,
      },
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=105",
        created_at: "2024-12-17T09:35:00Z",
        seen: false,
      },
    ],
  },
  {
    id: "story_003",
    user: {
      username: "foodie.journey",
      profile_image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=106",
        created_at: "2024-12-17T14:00:00Z",
        seen: true,
      },
    ],
  },
  {
    id: "story_004",
    user: {
      username: "daily.memes",
      profile_image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=107",
        created_at: "2024-12-17T11:45:00Z",
        seen: false,
      },
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=108",
        created_at: "2024-12-17T11:50:00Z",
        seen: false,
      },
    ],
  },
  {
    id: "story_005",
    user: {
      username: "fitness.guru",
      profile_image: "https://randomuser.me/api/portraits/women/75.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=109",
        created_at: "2024-12-17T12:30:00Z",
        seen: true,
      },
    ],
  },
  {
    id: "story_006",
    user: {
      username: "techno.updates",
      profile_image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=110",
        created_at: "2024-12-17T14:15:00Z",
        seen: false,
      },
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=111",
        created_at: "2024-12-17T14:20:00Z",
        seen: false,
      },
    ],
  },
  {
    id: "story_007",
    user: {
      username: "foodie.journey",
      profile_image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=112",
        created_at: "2024-12-17T15:00:00Z",
        seen: false,
      },
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=113",
        created_at: "2024-12-17T15:05:00Z",
        seen: false,
      },
    ],
  },
  {
    id: "story_008",
    user: {
      username: "daily.memes",
      profile_image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=114",
        created_at: "2024-12-17T16:30:00Z",
        seen: false,
      },
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=115",
        created_at: "2024-12-17T16:35:00Z",
        seen: false,
      },
    ],
  },
  {
    id: "story_009",
    user: {
      username: "travelwithalex",
      profile_image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=116",
        created_at: "2024-12-17T17:00:00Z",
        seen: true,
      },
    ],
  },
  {
    id: "story_010",
    user: {
      username: "techno.updates",
      profile_image: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    media: [
      {
        type: "image",
        url: "https://picsum.photos/1080/1920?random=117",
        created_at: "2024-12-17T18:00:00Z",
        seen: false,
      },
    ],
  },
];

export const fetchMockPromise = async (): Promise<Story[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(stories);
    }, 0);
  });
};

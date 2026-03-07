export type QuickAction = {
  title: string;
  description: string;
  gradient: string;
  href: string;
};

export const quickActions: QuickAction[] = [
  {
    title: "Narrate a Story",
    description: "Bring characters to life with expressive AI narration",
    gradient: "linear-gradient(to bottom right, #5eead4, #67e8f9)",
    href: "/narrate",
  },
  {
    title: "Record an Ad",
    description: "Create professional advertisements with lifelike AI voices",
    gradient: "linear-gradient(to bottom right, #f9a8d4, #f472b6)",
    href: "/record",
  },
  {
    title: "Direct a Movie Scene",
    description: "Generate dramatic dialogue for film and video",
    gradient: "linear-gradient(to bottom right, #c4b5fd, #a78bfa)",
    href: "/movie",
  },
  {
    title: "Voice a Game Character",
    description: "Build immersive worlds with dynamic character voices",
    gradient: "linear-gradient(to bottom right, #fdba74, #fb923c)",
    href: "/game",
  },
  {
    title: "Introduce Your Podcast",
    description: "Hook your listeners from the very first second",
    gradient: "linear-gradient(to bottom right, #67e8f9, #60a5fa)",
    href: "/podcast",
  },
  {
    title: "Guide a Meditation",
    description: "Craft soothing, calming audio for wellness content",
    gradient: "linear-gradient(to bottom right, #86efac, #a3e635)",
    href: "/meditation",
  },
];
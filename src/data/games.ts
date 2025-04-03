export interface Game {
    id: string;
    title: string;
    description: string;
    icon: string;
    playerCount: string;
    link: string;
}

export const games: Game[] = [
    {
        id: "magic-8-ball",
        title: "Magic 8 Ball",
        description: "Make your own Magic 8 Ball to answer questions with a shake.",
        icon: "/icons/magic-8-ball.svg",
        playerCount: "1+ players",
        link: "/games/magic-8-ball"
    },
    {
        id: "truth-or-dare",
        title: "Truth or Dare",
        description: "The classic party game of truth and dares!",
        icon: "/icons/truth-or-dare.svg",
        playerCount: "2+ players",
        link: "/games/truth-or-dare"
    },
    {
        id: "never-have-i-ever",
        title: "Never Have I Ever",
        description: "A fun and revealing party game that gets everyone talking!",
        icon: "/icons/never-have-i-ever.svg",
        playerCount: "3+ players",
        link: "/games/never-have-i-ever"
    },
    {
        id: "who-is-most-likely",
        title: "Who Is Most Likely",
        description: "Find out who's most likely to do unexpected things!",
        icon: "/icons/who-is-most-likely.svg",
        playerCount: "3+ players",
        link: "/games/who-is-most-likely"
    }
]; 
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
    },
    {
        id: "would-you-rather",
        title: "Would You Rather",
        description: "Make tough choices between two interesting scenarios!",
        icon: "/icons/would-you-rather.svg",
        playerCount: "2+ players",
        link: "/games/would-you-rather"
    },
    {
        id: "find-the-spy",
        title: "Find the Spy",
        description: "Can you identify the spy among your friends before it's too late?",
        icon: "/icons/find-the-spy.svg",
        playerCount: "5+ players",
        link: "/games/find-the-spy"
    },
    {
        id: "mafia",
        title: "Mafia",
        description: "A thrilling social deduction game where players must find the mafia members among them!",
        icon: "/icons/mafia.svg",
        playerCount: "6+ players",
        link: "/games/mafia"
    },
    {
        id: "undercover",
        title: "Undercover",
        description: "A party game of deception and deduction",
        icon: "/icons/undercover.svg",
        playerCount: "4+ players",
        link: "/games/undercover"
    },
    {
        id: "guess-this-number",
        title: "Guess This Number",
        description: "A fun drinking game for couples and groups",
        icon: "/icons/guess-this-number.svg",
        playerCount: "2+ players",
        link: "/games/guess-this-number"
    },
    {
        id: "charades",
        title: "Charades",
        description: "Act out words and phrases in this classic party game!",
        icon: "/icons/charades.svg",
        playerCount: "4+ players",
        link: "/games/charades"
    },
    {
        id: "hedbanz",
        title: "Hedbanz",
        description: "Guess what you are in this hilarious guessing game!",
        icon: "/icons/hedbanz.svg",
        playerCount: "2+ players",
        link: "/games/hedbanz"
    },
    {
        id: "sex-dice",
        title: "Sex Dice",
        description: "Roll the dice for a fun and spicy adventure!",
        icon: "/icons/sex-dice.svg",
        playerCount: "2+ players",
        link: "/games/sex-dice"
    },
    {
        id: "coming-soon",
        title: "Coming Soon",
        description: "New exciting party games are on the way! Stay tuned for updates.",
        icon: "/icons/coming-soon.svg",
        playerCount: "TBD",
        link: "#"
    }
]; 
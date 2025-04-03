import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface UpcomingGame {
    title: string;
    description: string;
}

const upcomingGames: UpcomingGame[] = [
    {
        title: "Pictionary",
        description: "Draw and guess pictures with your friends in this fun drawing game."
    },
    {
        title: "Two Truths and a Lie",
        description: "Tell two true statements and one false one, and see if others can spot the lie."
    },
    {
        title: "Word Association",
        description: "Quickly respond with related words in this fast-paced word game."
    },
    {
        title: "Categories",
        description: "Think fast and name items in various categories before time runs out."
    },
    {
        title: "Werewolf",
        description: "A social deduction game where villagers try to identify the werewolves among them."
    },
    {
        title: "Trivia Night",
        description: "Test your knowledge across various topics in this competitive quiz game."
    },
    {
        title: "Scavenger Hunt",
        description: "Race to find items or complete challenges in this exciting search game."
    }
];

export default function TheList() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center">The List</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                        Here's our growing list of party games that we're planning to add soon!
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <ul className="space-y-4">
                            {upcomingGames.map((game, index) => (
                                <li
                                    key={index}
                                    className={index < upcomingGames.length - 1 ? "border-b border-gray-200 dark:border-gray-700 pb-4" : ""}
                                >
                                    <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {game.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Have a suggestion for a game we should add?
                        </p>
                        <a
                            href="/feedback"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200 inline-block"
                        >
                            Submit Your Idea
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
} 
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

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
                            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                <h3 className="text-xl font-semibold mb-2">Charades</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    The classic game of acting out words or phrases without speaking.
                                </p>
                            </li>

                            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                <h3 className="text-xl font-semibold mb-2">Pictionary</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Draw and guess pictures with your friends in this fun drawing game.
                                </p>
                            </li>

                            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                <h3 className="text-xl font-semibold mb-2">Two Truths and a Lie</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Tell two true statements and one false one, and see if others can spot the lie.
                                </p>
                            </li>

                            <li className="border-b border-gray-200 dark:border-gray-700 pb-4">
                                <h3 className="text-xl font-semibold mb-2">Word Association</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Quickly respond with related words in this fast-paced word game.
                                </p>
                            </li>

                            <li>
                                <h3 className="text-xl font-semibold mb-2">Would You Rather</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Choose between two difficult or silly scenarios and discuss your choices.
                                </p>
                            </li>
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
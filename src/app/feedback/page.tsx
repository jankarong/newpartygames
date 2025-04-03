import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function Feedback() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6 text-center">Feedback</h1>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
                        We'd love to hear your thoughts about our party games! Please fill out the form below to share your feedback.
                    </p>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 p-2 dark:bg-gray-700"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 p-2 dark:bg-gray-700"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label htmlFor="game" className="block text-sm font-medium mb-1">Which game are you giving feedback on?</label>
                                <select
                                    id="game"
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 p-2 dark:bg-gray-700"
                                >
                                    <option value="">Select a game</option>
                                    <option value="magic-8-ball">Magic 8 Ball</option>
                                    <option value="truth-or-dare">Truth or Dare</option>
                                    <option value="never-have-i-ever">Never Have I Ever</option>
                                    <option value="who-is-most-likely">Who Is Most Likely</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="feedback" className="block text-sm font-medium mb-1">Your Feedback</label>
                                <textarea
                                    id="feedback"
                                    rows={5}
                                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 p-2 dark:bg-gray-700"
                                    placeholder="Share your thoughts, suggestions, or experiences"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
                                >
                                    Submit Feedback
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
} 
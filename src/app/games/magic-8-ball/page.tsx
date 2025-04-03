import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function MagicEightBall() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow container mx-auto px-4 py-12">
                <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
                    &larr; Back to games
                </Link>

                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <div className="w-32 h-32 relative mx-auto mb-4">
                            <Image
                                src="/icons/magic-8-ball.svg"
                                alt="Magic 8 Ball"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h1 className="text-3xl font-bold mb-4">Magic 8 Ball</h1>
                        <p className="text-gray-600 dark:text-gray-300">
                            Make your own Magic 8 Ball to answer questions with a shake.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-4">How to Play</h2>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Think of a yes/no question that you'd like answered</li>
                            <li>Focus on your question intently</li>
                            <li>Shake the Magic 8 Ball (in real life, imagine shaking it)</li>
                            <li>Click the "Shake the Ball" button below</li>
                            <li>Read your answer and contemplate its wisdom</li>
                        </ol>

                        <div className="mt-8 text-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full transition-colors duration-200">
                                Shake the Ball
                            </button>
                        </div>

                        <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">
                            <p className="text-xl font-medium text-gray-800 dark:text-gray-200">
                                Ask a question, then shake the ball to reveal your answer...
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
} 
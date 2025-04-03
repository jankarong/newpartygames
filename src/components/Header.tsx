import Link from 'next/link';
import Image from 'next/image';

export function Header() {
    return (
        <header className="bg-blue-600 text-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 relative">
                        <Image
                            src="/logo.svg"
                            alt="Party Games Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold">Party Games</span>
                </Link>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-blue-200 transition-colors">
                                Games
                            </Link>
                        </li>
                        <li>
                            <Link href="/feedback" className="hover:text-blue-200 transition-colors">
                                Feedback
                            </Link>
                        </li>
                        <li>
                            <Link href="/the-list" className="hover:text-blue-200 transition-colors">
                                The List
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
} 
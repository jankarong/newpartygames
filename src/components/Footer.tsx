import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* About Us Section */}
                    <div>
                        <h2 className="text-xl font-bold mb-6">About Us</h2>
                        <p className="text-gray-300 max-w-lg">
                            Party Games Collection is your premier online destination for free, interactive party
                            games. We offer a diverse collection of engaging social games including Find the Spy,
                            Never Have I Ever, and more - perfect for virtual gatherings, parties, and team building
                            events. Join thousands of players worldwide for unforgettable gaming experiences!
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div className="flex flex-col md:items-end">
                        <h2 className="text-xl font-bold mb-6">Quick Links</h2>
                        <nav>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    <Link href="/" className="hover:text-blue-400 transition-colors">
                                        Games
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/feedback" className="hover:text-blue-400 transition-colors">
                                        Feedback
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/the-list" className="hover:text-blue-400 transition-colors">
                                        The List
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} Party Games. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 
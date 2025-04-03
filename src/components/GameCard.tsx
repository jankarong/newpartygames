import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
    icon: string;
    title: string;
    description: string;
    playerCount: string;
    link: string;
}

export function GameCard({ icon, title, description, playerCount, link }: GameCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            <div className="p-6 flex-grow">
                <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 relative">
                        <Image
                            src={icon}
                            alt={`${title} icon`}
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">{description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">{playerCount}</p>
            </div>
            <div className="px-6 pb-6">
                <Link
                    href={link}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full w-full block text-center transition-colors duration-200"
                >
                    Play Now
                </Link>
            </div>
        </div>
    );
} 
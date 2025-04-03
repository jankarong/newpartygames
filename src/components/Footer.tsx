export function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 py-6">
            <div className="container mx-auto px-4 text-center text-sm text-gray-500 dark:text-gray-400">
                <p>© {new Date().getFullYear()} Party Games. All rights reserved.</p>
            </div>
        </footer>
    );
} 
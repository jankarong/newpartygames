import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { GameCard } from '@/components/GameCard';
import { Footer } from '@/components/Footer';
import { games } from '@/data/games';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />

      <main className="flex-grow container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">Our Games</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              icon={game.icon}
              title={game.title}
              description={game.description}
              playerCount={game.playerCount}
              link={game.link}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import MythIntroduction from "@/components/home/MythIntroduction";
import MythExplorer from "@/components/home/MythExplorer";
import FeaturedMyth from "@/components/home/FeaturedMyth";
import ArtworkComparison from "@/components/home/ArtworkComparison";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <MythIntroduction />
      <MythExplorer />
      <FeaturedMyth />
      <ArtworkComparison />
    </main>
  );
}
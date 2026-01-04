import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Hero />
        <Separator className="my-8" />
        <Experience />
        <Separator className="my-8" />
        <Projects />
        <Separator className="my-8" />
        <Skills />
        <Separator className="my-8" />
        <Education />
        <footer className="py-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shreya Komarabattini. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

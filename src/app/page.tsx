import { SiteHeader } from "@/components/site-header";
import { HeroLanding } from "@/components/hero-landing";
import { ProjectShowcase } from "@/components/project-showcase";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";
import { CustomCursor, GhostSprite, FlowerSprite } from "@/components/pixel-sprites";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      <CustomCursor />
      <SiteHeader />
      
      {/* Ghost peeks from bottom-right corner */}
      <div className="fixed bottom-0 right-10 overflow-hidden h-[80px] w-[60px] z-50 pointer-events-none hidden md:block">
        <GhostSprite className="animate-ghost-peek bottom-0 left-1/2 -translate-x-1/2" />
      </div>

      <main className="flex-1 z-10 cursor-none">
        <HeroLanding />
        <ProjectShowcase />

        {/* CTA Section */}
        <section className="container mx-auto py-32 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center">
          <span className="font-serif text-[10px] tracking-[0.2em] font-semibold uppercase text-primary mb-6 flex items-center gap-3">
            <span className="text-muted-foreground">//</span> Connect With Me
          </span>
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-12 leading-relaxed">
            Let&apos;s build something <br />
            <span className="text-primary">together_</span>
          </h2>
          <Button asChild size="lg" className="rounded-none bg-primary text-primary-foreground border-2 border-primary hover:bg-transparent hover:text-primary h-14 px-10 text-xs font-serif shadow-none uppercase tracking-widest cursor-none transition-colors">
            <Link href="mailto:shreyakbinbox@gmail.com">
              Get in Touch <Mail className="ml-3 h-4 w-4" />
            </Link>
          </Button>

          {/* Social Links below Get in Touch */}
          <div className="flex items-center gap-10 mt-12">
            <a 
              href="https://github.com/Shreyakb301" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-serif text-[10px] text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors cursor-none"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/shreya-komarabattini" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-serif text-[10px] text-muted-foreground hover:text-primary tracking-widest uppercase transition-colors cursor-none"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 md:py-16 border-t border-primary/20 z-10 w-full bg-background relative overflow-hidden">
        <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center">
          {/* Flower on left side of footer */}
          <FlowerSprite className="animate-flower-nod opacity-40 hidden md:block" style={{bottom: 0, left: '220px', transformOrigin: 'bottom center'}} />
          
          <p className="font-serif text-[10px] text-primary/40 tracking-widest uppercase">
            Shreya Komarabattini
          </p>
        </div>
      </footer>
    </div>
  );
}

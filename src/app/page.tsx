import { SiteHeader } from "@/components/site-header";
import { HeroLanding } from "@/components/hero-landing";
import { ProjectShowcase } from "@/components/project-showcase";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      <SiteHeader />
      <main className="flex-1 z-10">
        <HeroLanding />
        <ProjectShowcase />

        {/* CTA Section */}
        <section className="container mx-auto py-32 md:py-48 px-6 md:px-12 flex flex-col items-center justify-center text-center">
          <span className="text-sm font-semibold tracking-widest uppercase text-foreground/60 mb-6">Connect With Me</span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-12">
            Let&apos;s build something <br />
            <span className="italic text-foreground/70">together</span>
          </h2>
          <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90 h-16 px-10 text-lg font-medium shadow-none">
            <Link href="mailto:shreyakbinbox@gmail.com">
              <Mail className="mr-3 h-5 w-5" /> Get in Touch
            </Link>
          </Button>
        </section>
      </main>

      <footer className="py-12 md:py-16 border-t border-foreground/10 z-10 w-full bg-background relative">
        <div className="container mx-auto flex flex-col items-center justify-center px-6 text-center">
          <p className="text-sm text-foreground/60 mb-2">
            Designed & Built manually with care.
          </p>
          <p className="text-sm text-foreground/40 font-sans tracking-wide">
            © {new Date().getFullYear()} Shreya Komarabattini. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

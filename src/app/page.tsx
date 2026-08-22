import { SiteHeader } from "@/components/site-header";
import { HeroLanding } from "@/components/hero-landing";
import { ProjectShowcase } from "@/components/project-showcase";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { FlowerSprite, WatcherSprite } from "@/components/pixel-sprites";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <div className="home-page relative flex min-h-screen flex-col overflow-x-clip bg-background md:min-h-[125vh] md:[zoom:0.8]">
        <main className="z-10 flex-1">
          <HeroLanding />
          <ProjectShowcase />

        <section className="about-cta-sec">
          <div className="container">
            <div className="about-cta-inner">
              <Link href="/about" className="btn about-cta-btn">
                About me
                <ArrowRight aria-hidden="true" />
            </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="connect-sec spike-b spike-t">
          <div className="container">
            <div className="sec-label mx-auto mb-12 max-w-[360px] justify-center">Connect With Me</div>
            <h2 className="connect-heading">
              Let&apos;s build something <br />
              <span className="relative inline-block">
                together_
                <WatcherSprite className="absolute -bottom-4 -right-12 hidden animate-watcher-bob md:block" />
              </span>
            </h2>
            <div className="mb-8">
            <Button asChild size="lg" variant="ghost" className="retro-btn rounded-none shadow-none">
              <Link href="mailto:shreyakbinbox@gmail.com">
                Get in Touch <Mail className="ml-3 h-4 w-4" />
              </Link>
            </Button>
            </div>

            {/* Social Links below Get in Touch */}
            <div className="flex flex-col items-center">
              <div className="connect-links">
                <a
                  href="https://github.com/Shreyakb301"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-link"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/shreya-komarabattini"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://calendly.com/shreyakbinbox/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-link"
                >
                  Schedule
                </a>
              </div>

              <div className="mt-6">
                <a
                  href="https://www.notion.so/Write-ups-61fec7c005ac835dbf47019ccaec1688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="notion-link"
                >
                  read my technical ramblings & research notes → Notion Collection
                </a>
              </div>
            </div>
          </div>
        </section>
        </main>

        <footer className="relative spike-sm-t overflow-hidden bg-background">
          <div className="container site-footer site-footer-centered relative">
            {/* Flower on left side of footer */}
            <FlowerSprite className="animate-flower-nod hidden lg:block" style={{ bottom: 0, left: '220px', transformOrigin: 'bottom center' }} />

            <p className="foot-copy">
              Shreya Komarabattini
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

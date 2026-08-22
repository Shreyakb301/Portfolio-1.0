import { ProjectShowcase } from "@/components/project-showcase";
import { SiteHeader } from "@/components/site-header";

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        <ProjectShowcase layout="grid" className="work-page-showcase" />
      </main>

      <footer className="spike-sm-t">
        <div className="about-wrap site-footer site-footer-centered">
          <span className="foot-copy">Shreya Komarabattini</span>
        </div>
      </footer>
    </div>
  );
}

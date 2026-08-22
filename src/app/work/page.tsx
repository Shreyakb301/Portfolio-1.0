import { ProjectShowcase } from "@/components/project-showcase";
import { SiteHeader } from "@/components/site-header";

export default function WorkPage() {
  return (
    <>
      <SiteHeader />

      <div className="flex min-h-screen flex-col bg-background md:min-h-[125vh] md:[zoom:0.8]">
        <main className="flex-1">
          <ProjectShowcase layout="grid" className="work-page-showcase" />
        </main>

        <footer className="spike-sm-t">
          <div className="about-wrap site-footer site-footer-centered">
            <span className="foot-copy">Shreya Komarabattini</span>
          </div>
        </footer>
      </div>
    </>
  );
}

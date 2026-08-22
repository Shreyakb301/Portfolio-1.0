import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ComponentProps } from "react";

export const metadata: Metadata = {
  title: "Moodle — Shreya Komarabattini",
  description: "A real-time drawing and guessing game with multiplayer rooms, AI opponents, and hand-gesture drawing.",
};

function MoodleImage(props: ComponentProps<typeof Image>) {
  return <Image {...props} unoptimized />;
}

const stats = [
  { value: "3", label: "input modes" },
  { value: "8", label: "players per room" },
  { value: "79", label: "server tests passing" },
  { value: "40", label: "simulated-player load target" },
];

const engineeringNotes = [
  {
    number: "01",
    title: "Stable gesture input",
    copy: "A single pinch threshold produced accidental marks. Calibration, landmark validation, smoothing, and an explicit gesture lifecycle made hand drawing more predictable.",
  },
  {
    number: "02",
    title: "Authoritative canvas state",
    copy: "Undo originally rebuilt the whole canvas and could desynchronize players. Unique stroke IDs and a server-owned undo event now remove the exact shared stroke.",
  },
  {
    number: "03",
    title: "Reconnectable rooms",
    copy: "Refreshes used to lose active games. Persisted room context and rotating reconnect tokens now restore a player to the correct room and identity.",
  },
  {
    number: "04",
    title: "Performance that lasts a round",
    copy: "Committed strokes are cached offscreen, live strokes are batched, and hand-tracking code loads only when requested so the canvas stays responsive.",
  },
];

export default function MoodleCaseStudyPage() {
  return (
    <div className="moodle-case-page">
      <header className="retro-nav">
        <div className="about-wrap retro-nav-inner">
          <Link href="/" className="nav-logo">
            SKB_
          </Link>

          <ul className="nav-links">
            <li>
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/work" className="nav-link active">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume">
                Resume ↗
              </a>
            </li>
          </ul>

          <div className="about-nav-social">
            <a href="https://github.com/Shreyakb301" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shreya-komarabattini" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:shreyakbinbox@gmail.com">Email</a>
          </div>
        </div>
      </header>

      <main>
        <section className="moodle-case-hero" aria-label="Moodle project cover">
          <MoodleImage
            src="/moodle-case-study/hero.png"
            alt="Moodle pixel drawing game logo and mascot"
            width={1672}
            height={941}
            priority
            sizes="100vw"
          />
        </section>

        <section className="moodle-case-intro moodle-case-copy">
          <div className="moodle-case-kicker">Real-time multiplayer · Gesture interaction</div>
          <h1>A drawing game you can play with friends, AI, or just your hands.</h1>
          <p className="moodle-case-lede">
            Moodle is a browser-based drawing and guessing game that combines synchronized rooms, AI opponents,
            and camera-tracked hand gestures. Players can start without an account, invite friends with a room code,
            or jump straight into a solo match with bots.
          </p>

          <div className="moodle-case-meta">
            <div>
              <span>Product</span>
              <strong>Multiplayer drawing + guessing</strong>
            </div>
            <div>
              <span>Status</span>
              <strong>Active MVP · Public playtesting</strong>
            </div>
            <div>
              <span>Core stack</span>
              <strong>React · TypeScript · Socket.IO · Node.js</strong>
            </div>
            <div>
              <span>Interaction</span>
              <strong>Mouse · Touch · Hand gestures</strong>
            </div>
          </div>

          <div className="moodle-case-actions">
            <a href="https://moodl3.com/" target="_blank" rel="noopener noreferrer" className="moodle-case-button primary">
              Play Moodle ↗
            </a>
            <a
              href="https://github.com/Sanjana-Gondariya/Moodle"
              target="_blank"
              rel="noopener noreferrer"
              className="moodle-case-button"
            >
              View code ↗
            </a>
          </div>
        </section>

        <section className="moodle-case-chapter" aria-labelledby="moodle-brief">
          <div className="moodle-case-section moodle-case-copy">
            <div className="moodle-case-kicker">The brief</div>
            <h2 id="moodle-brief">Make a familiar party game feel more physical.</h2>
            <p>
              Most drawing games treat the mouse as the only meaningful input. Moodle explores what changes when
              gesture drawing, human and AI players, synchronized rooms, and no-account browser access all belong to
              the same game loop.
            </p>
          </div>

          <div className="moodle-case-pair moodle-case-pair-tall">
            <figure className="moodle-case-figure">
              <MoodleImage
                src="/moodle-case-study/how-to-play.png"
                alt="Moodle how-to-play instructions explaining scoring and hand mode"
                width={886}
                height={1198}
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </figure>
            <figure className="moodle-case-figure">
              <MoodleImage
                src="/moodle-case-study/instructions.png"
                alt="Three-panel Moodle guide for gameplay, drawing controls, and hand-mode points"
                width={1982}
                height={1990}
                sizes="(max-width: 800px) 100vw, 50vw"
              />
            </figure>
          </div>
        </section>

        <section className="moodle-case-chapter moodle-case-onboarding" aria-labelledby="moodle-onboarding">
          <div className="moodle-case-section moodle-case-copy">
            <div className="moodle-case-kicker">Onboarding</div>
            <h2 id="moodle-onboarding">From a character to a live room in a few clear decisions.</h2>
            <p>
              Players choose an identity, configure a room, invite others with a short code, or start instantly with
              AI. Public and private rooms support up to eight people without requiring an account or installation.
            </p>
          </div>

          <div className="moodle-case-pair">
          <figure className="moodle-case-figure">
            <MoodleImage
              src="/moodle-case-study/characters.png"
              alt="Pixel cat character selection in Moodle"
              width={854}
              height={615}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          <figure className="moodle-case-figure">
            <MoodleImage
              src="/moodle-case-study/room-settings.png"
              alt="Moodle room settings for rounds, draw time, players, and AI"
              width={1028}
              height={516}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          </div>

          <figure className="moodle-case-figure moodle-case-figure-wide">
          <MoodleImage
            src="/moodle-case-study/room-choice.png"
            alt="Moodle drawing room with create, join, and play-with-AI choices"
            width={1128}
            height={1058}
            sizes="100vw"
          />
          </figure>

          <div className="moodle-case-pair">
          <figure className="moodle-case-figure">
            <MoodleImage
              src="/moodle-case-study/lobby-human.png"
              alt="Moodle multiplayer lobby with joined human players"
              width={1974}
              height={726}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          <figure className="moodle-case-figure">
            <MoodleImage
              src="/moodle-case-study/lobby-ai.png"
              alt="Moodle lobby with two AI players"
              width={1948}
              height={678}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          </div>
        </section>

        <section className="moodle-case-chapter" aria-labelledby="moodle-realtime">
          <div className="moodle-case-section moodle-case-copy">
            <div className="moodle-case-kicker">Real-time play</div>
            <h2 id="moodle-realtime">One authoritative game, shared by every player.</h2>
            <p>
              The Node.js and Socket.IO server owns turns, timers, secret words, scores, chat, and room membership.
              Every player receives the same validated state while the canvas streams compact stroke data in real time.
            </p>
          </div>

          <figure className="moodle-case-figure moodle-case-figure-full">
          <MoodleImage
            src="/moodle-case-study/gameplay-wide.png"
            alt="Wide Moodle gameplay interface during a drawing round"
            width={2048}
            height={1014}
            sizes="100vw"
          />
          </figure>

          <div className="moodle-case-stats" aria-label="Verified Moodle project metrics">
          {stats.map((stat) => (
            <div key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
          </div>
        </section>

        <section className="moodle-case-chapter" aria-labelledby="moodle-gestures">
          <div className="moodle-case-section moodle-case-copy">
            <div className="moodle-case-kicker">Gesture drawing</div>
            <h2 id="moodle-gestures">The canvas works with a mouse, touch, or a camera-tracked hand.</h2>
            <p>
              MediaPipe runs in the browser so camera frames stay on the player&apos;s device. Moodle calibrates pinch
              distance, smooths hand landmarks, and translates stable gestures into strokes while keeping standard
              drawing tools available as a reliable fallback.
            </p>
          </div>

          <figure className="moodle-case-figure moodle-case-figure-full moodle-case-figure-light">
          <MoodleImage
            src="/moodle-case-study/drawing-toolbar.png"
            alt="Moodle drawing toolbar with color, paper, brush, save, replay, and theme controls"
            width={1806}
            height={578}
            sizes="100vw"
          />
          </figure>
        </section>

        <section className="moodle-case-chapter" aria-labelledby="moodle-ai">
          <div className="moodle-case-section moodle-case-copy">
            <div className="moodle-case-kicker">AI players</div>
            <h2 id="moodle-ai">Solo play still runs the complete multiplayer loop.</h2>
            <p>
              Bots can join rooms, choose words, draw, guess, react, and vary their pacing. Provider integrations are
              optional; local QuickDraw-derived fallbacks keep the public MVP playable without paid credentials.
            </p>
          </div>

          <div className="moodle-case-pair">
          <figure className="moodle-case-figure">
            <MoodleImage
              src="/moodle-case-study/word-selection.png"
              alt="Moodle AI player choosing a secret drawing word"
              width={1478}
              height={775}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          <figure className="moodle-case-figure">
            <MoodleImage
              src="/moodle-case-study/drawing-round.png"
              alt="Moodle drawing round with AI guesses and an orange canvas sketch"
              width={1478}
              height={775}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          </div>
        </section>

        <section className="moodle-case-chapter" aria-labelledby="moodle-details">
          <div className="moodle-case-section moodle-case-copy">
            <div className="moodle-case-kicker">Interaction details</div>
            <h2 id="moodle-details">Small states explain what the game is doing.</h2>
            <p>
              Connection, voice, timing, feedback, and scoring states use the same high-contrast pixel language. Clear
              visual changes help players understand when a room is connected, a microphone is active, or a round has
              ended.
            </p>
          </div>

          <div className="moodle-case-triptych">
          <figure className="moodle-case-figure">
            <MoodleImage src="/moodle-case-study/status-disabled.png" alt="Disabled Moodle voice control" width={848} height={202} sizes="33vw" />
          </figure>
          <figure className="moodle-case-figure">
            <MoodleImage src="/moodle-case-study/status-connected.png" alt="Connected Moodle room status" width={848} height={202} sizes="33vw" />
          </figure>
          <figure className="moodle-case-figure">
            <MoodleImage src="/moodle-case-study/status-live.png" alt="Live Moodle voice state and leave control" width={1000} height={202} sizes="33vw" />
          </figure>
          </div>

          <div className="moodle-case-pair moodle-case-pair-contained">
          <figure className="moodle-case-figure">
            <MoodleImage
              src="/moodle-case-study/feedback.png"
              alt="Moodle feedback dialog"
              width={848}
              height={490}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          <figure className="moodle-case-figure">
            <MoodleImage
              src="/moodle-case-study/scoreboard.png"
              alt="Moodle end-of-round scoreboard"
              width={934}
              height={574}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </figure>
          </div>
        </section>

        <section className="moodle-case-chapter" aria-labelledby="moodle-engineering">
          <div className="moodle-case-section moodle-case-copy">
            <div className="moodle-case-kicker">Engineering</div>
            <h2 id="moodle-engineering">The difficult part was keeping every system honest.</h2>
            <p>
              Gesture input is noisy, multiplayer state races, and an active canvas grows more expensive with every
              stroke. The strongest technical decisions turn those failure modes into explicit state, validated events,
              and measurable fallbacks.
            </p>
          </div>

          <div className="moodle-case-notes">
          {engineeringNotes.map((note) => (
            <article key={note.number}>
              <span>{note.number}</span>
              <h3>{note.title}</h3>
              <p>{note.copy}</p>
            </article>
          ))}
          </div>
        </section>

        <section className="moodle-case-outro">
          <div className="moodle-case-copy">
            <div className="moodle-case-kicker">Current outcome</div>
            <h2>An active MVP with a clear path to production.</h2>
            <p>
              Core multiplayer, drawing, bots, gesture tracking, testing, and deployment are working. The next phase
              is durable Redis/PostgreSQL infrastructure, browser end-to-end testing, and dated performance and
              gesture-quality benchmarks.
            </p>
            <div className="moodle-case-actions">
              <a href="https://moodl3.com/" target="_blank" rel="noopener noreferrer" className="moodle-case-button primary">
                Play the game ↗
              </a>
              <Link href="/work" className="moodle-case-button">
                ← Back to work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="moodle-case-footer">
        <div className="about-wrap site-footer site-footer-centered">
          <span className="foot-copy">Shreya Komarabattini</span>
        </div>
      </footer>
    </div>
  );
}

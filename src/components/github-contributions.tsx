"use client";

import dynamic from "next/dynamic";
import type { Props as GitHubCalendarProps } from "react-github-calendar";

const GitHubCalendar = dynamic<GitHubCalendarProps>(
  () => import("react-github-calendar").then((module) => module.GitHubCalendar),
  {
    ssr: false,
    loading: () => <p className="github-calendar-loading">Loading contribution activity…</p>,
  },
);

const githubTheme = {
  light: ["#eef0e8", "#d6ddb5", "#a9ba72", "#768b42", "#4f602f"],
};

export function GitHubContributions() {
  return (
    <div className="github-calendar-card">
      <div className="github-calendar-heading">
        <div>
          <p className="github-calendar-kicker">GitHub activity</p>
          <h2>Contribution graph</h2>
        </div>
        <a
          href="https://github.com/Shreyakb301"
          target="_blank"
          rel="noopener noreferrer"
          className="github-calendar-profile"
        >
          @Shreyakb301 <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="github-calendar-scroll" tabIndex={0} aria-label="Scrollable GitHub contribution calendar">
        <GitHubCalendar
          username="Shreyakb301"
          year="last"
          colorScheme="light"
          theme={githubTheme}
          blockSize={13}
          blockMargin={4}
          blockRadius={1}
          fontSize={12}
          showWeekdayLabels
          labels={{
            totalCount: "{{count}} contributions in the last year",
          }}
        />
      </div>
    </div>
  );
}

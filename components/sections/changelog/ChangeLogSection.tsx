import { releases } from "@/data/changelog";

/** One card per release, listing what changed. */
export default function ChangeLogSection() {
  return (
    <section className="change-log">
      <div className="container">
        <div className="change-log-wrap">
          {releases.map((release) => (
            <div className="change-log-list reveal-rise-slow" key={release.version}>
              <h4 className="h4">{release.version}</h4>
              <div className="p-text-03 text-white-60">{release.date}</div>
              <div className="change-log-list-item">
                <ul className="list" role="list">
                  {release.changes.map((change, i) => (
                    <li className="p-text-03" key={i}>
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

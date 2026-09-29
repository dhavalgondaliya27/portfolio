import { profile, stats } from "@/data/profile";
import TracePanel from "./TracePanel";
import s from "./site.module.css";

export default function Hero() {
  return (
    <section id="top" className={s.hero}>
      <div className={`container ${s.heroGrid}`}>
        <div>
          <div className={s.status}>
            <span className="pulse-dot" />
            <span className="mono">{profile.status}</span>
          </div>
          <h1 className={`display ${s.heroTitle}`}>
            {profile.name}
            <span className={s.heroRole}>{profile.role}</span>
          </h1>
          <p className={s.heroHeadline}>{profile.headline}</p>
          <p className={s.heroIntro}>{profile.intro}</p>
          <div className={s.heroCtas}>
            <a href="#work" className="btn btn-primary">See the systems →</a>
            <a href={profile.resume} target="_blank" rel="noopener" className="btn">Download résumé</a>
            <a href={`mailto:${profile.email}`} className="btn">Email me</a>
          </div>
        </div>
        <TracePanel />
      </div>

      <div className="container">
        <dl className={s.stats}>
          {stats.map((st) => (
            <div key={st.label} className={s.stat}>
              <dt className="display">{st.value}</dt>
              <dd>{st.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

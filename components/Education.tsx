import { education } from "@/app/data";

export function Education() {
  return <article className="cv-block">
    <p className="card-kicker">Education</p>
    <h2>Academic training</h2>
    <ul className="education-list">{education.map(({ degree, institution }) => <li key={degree}><strong>{degree}</strong><span>{institution}</span></li>)}</ul>
    <p className="dissertation">Dissertation: <em>Using Explainability to Improve Predictive Modeling Performance</em></p>
  </article>;
}

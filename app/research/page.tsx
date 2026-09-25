import { PageIntro } from "@/components/PageIntro";
import { researchAreas } from "../data";

export const metadata = { title: "Research" };

export default function ResearchPage() {
  return (
    <>
      <PageIntro eyebrow="Research" title="Methods that travel from models to practice." text="My research connects statistical methodology, machine learning, implementation science, and applied health research." />
      <section className="shell section compact-top">
        <div className="research-detail-grid">
          {researchAreas.map((area, i) => (
            <article className="research-detail" key={area.slug}>
              <div className="research-number">0{i + 1}</div>
              <div>
                <p className="card-kicker">{area.kicker}</p>
                <h2>{area.title}</h2>
                <p>{area.text}</p>
                <div className="tag-row">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

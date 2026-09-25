import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/PageIntro";
import { talks } from "../data";

export const metadata = pageMetadata("Talks & Presentations", "Conference presentations and scientific talks on implementation trial design, explainable AI, and applied biostatistics.", "/talks");

export default function TalksPage() {
  return (
    <>
      <PageIntro eyebrow="Talks & Presentations" title="Scientific communication." text="Conference presentations, invited talks, workshops, and selected professional presentations." />
      <section className="shell section compact-top">
        <div className="timeline">
          {talks.map((talk) => (
            <article className="timeline-item" key={talk.title}>
              <div className="timeline-date">{talk.date}</div>
              <div><p className="card-kicker">{talk.note}</p><h2>{talk.title}</h2><p>{talk.event}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}


import { PageIntro } from "@/components/PageIntro";
import { implementationManuscript, publications } from "../data";
import { PublicationLinks } from "@/components/PublicationLinks";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  return (
    <>
      <PageIntro eyebrow="Publications" title="Publications & manuscripts." text="Published research in explainable prediction and spatial population health, alongside a manuscript under peer review in implementation study design." />
      <section className="shell section compact-top">
        <div className="publication-table">
          {publications.map((pub) => (
            <article className="publication-record" key={pub.title}>
              <div className="publication-year">{pub.year}</div>
              <div>
                <p className="card-kicker">Published · {pub.type}</p>
                <h2><a href={pub.href}>{pub.title}</a></h2>
                <p className="publication-authors">{pub.authors}</p>
                <p><em>{pub.venue}</em> · {pub.year}</p>
                <p className="publication-doi">DOI: {pub.doi}</p>
                <PublicationLinks title={pub.title} links={pub.links} />
              </div>
            </article>
          ))}
          <article className="publication-record">
            <div className="publication-year">Manuscript</div>
            <div><p className="card-kicker">{implementationManuscript.status}</p><h2>{implementationManuscript.title}</h2><p>A question-driven framework for selecting experimental designs to evaluate implementation strategies.</p></div>
          </article>
        </div>
      </section>
    </>
  );
}

import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/PageIntro";
import { publications } from "../data";
import { PublicationLinks } from "@/components/PublicationLinks";

export const metadata = pageMetadata("Publications", "Published research by Jonah Kwesi Amponsah in implementation trial design, explainable prediction, and population health, with DOI and full-text links.", "/publications");

export default function PublicationsPage() {
  return (
    <>
      <PageIntro eyebrow="Publications" title="Peer-reviewed publications." text="Published research in implementation study design, explainable prediction, and spatial population health, with links to publisher records and available open-access full text." />
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
        </div>
      </section>
    </>
  );
}


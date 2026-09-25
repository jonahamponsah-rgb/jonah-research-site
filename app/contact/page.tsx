import { pageMetadata } from "@/lib/seo";
import { PageIntro } from "@/components/PageIntro";
import { profile } from "../data";

export const metadata = pageMetadata("Contact", "Contact Jonah Kwesi Amponsah about quantitative methods, implementation research, clinical prediction, and population health.", "/contact");

export default function ContactPage() {
  return <>
    <PageIntro eyebrow="Contact" title="Research & collaboration." text="Interested in collaborating on quantitative methods, implementation research, clinical prediction, or population health?" />
    <section className="shell section compact-top contact-grid">
      <article className="contact-card"><p className="card-kicker">Email</p><h2>Start a conversation</h2><a className="text-link contact-email" href={`mailto:${profile.email}`}>{profile.email}</a></article>
      <article className="contact-card"><p className="card-kicker">Professional profiles</p><h2>Research & code</h2><ul className="profile-links"><li><a href={profile.orcid} target="_blank" rel="noopener noreferrer">ORCID <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a></li><li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span className="sr-only">(opens in a new tab)</span><span aria-hidden="true">↗</span></a></li></ul></article>
    </section>
  </>;
}


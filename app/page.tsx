import Link from "next/link";
import Image from "next/image";
import { CVDownload } from "@/components/CVDownload";
import { PublicationLinks } from "@/components/PublicationLinks";
import { currentWork, implementationManuscript, profile, projects, publications, researchAreas, talks } from "./data";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Statistical methods &amp; health research</p>
          <h1>{profile.name}</h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="actions">
            <Link href="/research" className="button button-primary">View Research <span aria-hidden="true">↗</span></Link>
            <Link href="/publications" className="button button-secondary">Publications</Link>
            <CVDownload />
          </div>
        </div>
        <figure className="hero-portrait">
          <div className="portrait-frame"><Image src="/portraits/jonah-amponsah-black-suit.png" alt="Jonah Kwesi Amponsah in a black suit and tie against a warm dark studio background" fill sizes="(max-width: 760px) 90vw, 42vw" preload /></div>
          <figcaption><span>{profile.institution}</span><Link href="/about">About Jonah <span aria-hidden="true">↗</span></Link></figcaption>
        </figure>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / Research Areas</p>
            <h2>Connecting methods<br />to better health.</h2>
          </div>
          <p>Three connected areas: how we build predictive models, evaluate implementation strategies, and understand variation in health and care.</p>
        </div>
        <div className="research-grid">
          {researchAreas.map((area, index) => (
            <article className="research-card" key={area.slug}>
              <span className="card-index">0{index + 1}</span>
              <p className="card-kicker">{area.kicker}</p>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
              <div className="tag-row">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Featured Projects</p>
              <h2>Selected research projects.</h2>
            </div>
            <Link className="text-link" href="/projects">All projects →</Link>
          </div>
          <div className="project-list">
            {projects.slice(0, 3).map((project) => (
              <Link className="project-row" href={`/projects/${project.slug}`} key={project.slug}>
                <div><p className="card-kicker">{project.category}</p><h3>{project.title}</h3></div>
                <p>{project.summary}</p>
                <span className="project-status">{project.status}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell split-feature">
        <div>
          <p className="eyebrow">03 / Selected Publications</p>
          <h2>Contributing to<br />the evidence.</h2>
          <p className="lede-sm">Selected peer-reviewed work across explainable AI, biostatistics, and population health.</p>
          <Link className="text-link" href="/publications">See all publications →</Link>
        </div>
        <div className="publication-stack">
          {publications.map((pub) => (
            <article key={pub.title} className="publication-item">
              <span>{pub.year}</span>
              <div><h3><a href={pub.href}>{pub.title}</a></h3><small>Published · {pub.venue}</small><PublicationLinks title={pub.title} links={pub.links} /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="shell split-feature">
          <div><p className="eyebrow">04 / Current Work</p><h2>Questions guiding<br />the methods.</h2><p className="lede-sm">Cross-cutting questions in evaluation, study design, and spatial analysis that inform my research agenda.</p></div>
          <div className="focus-list">{currentWork.map((focus, index) => <article key={focus.title}><span className="card-index">0{index + 1}</span><div><p className="card-kicker">{focus.theme}</p><h3>{focus.title}</h3><p>{focus.text}</p>{focus.theme === "Study design" && <p><Link className="text-link" href="/publications">Implementation-design manuscript: {implementationManuscript.status.toLowerCase()} →</Link></p>}</div></article>)}</div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">05 / Talks &amp; Presentations</p><h2>Ideas in conversation.</h2></div><Link href="/talks" className="text-link">All talks &amp; presentations →</Link></div>
        <div className="home-talks">{talks.map((talk) => <article key={talk.title}><p className="timeline-date">{talk.date}</p><div><p className="card-kicker">{talk.note}</p><h3>{talk.title}</h3><p>{talk.event}</p></div></article>)}</div>
      </section>

      <section className="cta shell">
        <p className="eyebrow">Collaborate</p>
        <h2>Interested in quantitative methods, implementation research, or clinical prediction?</h2>
        <Link href="/contact" className="button button-primary">Get in touch</Link>
      </section>
    </>
  );
}

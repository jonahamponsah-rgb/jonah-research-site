import Image from "next/image";
import { Education } from "@/components/Education";
import Link from "next/link";
import { profile, researchAreas } from "../data";

export const metadata = {
  title: "About",
  description: "Get to know Jonah Kwesi Amponsah, PhD: statistician, machine learning researcher, and implementation scientist at the University of Wisconsin–Madison.",
};

export default function AboutPage() {
  return <>
    <section className="shell about-intro">
      <div className="about-copy"><p className="eyebrow">About / Jonah Amponsah</p><h1>A quantitative lens.<br />A human purpose.</h1><p className="lede">I’m Jonah, a statistician working at the intersection of methods, implementation, and health.</p><p>My work connects statistical thinking and machine learning with practical questions in clinical prediction and healthcare delivery. I’m interested in how we can make models more interpretable, evaluate them rigorously, and use evidence to inform better decisions.</p><p>Across explainable AI, cancer care, and population health, I bring a focus on the question behind the analysis: what can we learn, and how can that knowledge improve practice?</p><Link href="/research" className="text-link">Explore my research →</Link></div>
      <figure className="about-portrait"><div className="portrait-frame"><Image src="/portraits/jonah-amponsah-white-shirt.png" alt="Jonah Kwesi Amponsah smiling with arms folded, wearing a white shirt and black tie against the original warm studio background" fill sizes="(max-width: 760px) 90vw, 40vw" preload /></div><figcaption>{profile.name}</figcaption></figure>
    </section>
    <section className="section section-tint"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Background</p><h2>Training &amp; current role.</h2></div></div><div className="cv-grid">
      <article className="cv-block"><p className="card-kicker">Current role</p><h2>Statistician III</h2><p>{profile.institution}<br />School of Medicine and Public Health</p></article>
      <Education />
    </div></div></section>
    <section className="section shell"><div className="section-heading"><div><p className="eyebrow">Expertise &amp; research interests</p><h2>Questions that connect.</h2></div><p>Methodological rigor, interpretable evidence, and the translation of research into healthcare practice.</p></div><div className="research-grid">{researchAreas.map((area) => <article className="research-card" key={area.slug}><p className="card-kicker">{area.kicker}</p><h3>{area.title}</h3><p>{area.text}</p><div className="tag-row">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div></section>
    <section className="cta shell"><p className="eyebrow">Scientific exchange</p><h2>Good research starts with thoughtful questions.</h2><Link className="button button-primary" href="/contact">Connect with me →</Link></section>
  </>;
}


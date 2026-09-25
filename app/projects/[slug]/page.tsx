import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "../../data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find(item => item.slug === slug);
  if (!project) notFound();
  return pageMetadata(project.title, project.summary, `/projects/${project.slug}`);
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <section className="shell project-detail-page">
      <Link href="/projects" className="text-link">← Back to projects</Link>
      <p className="eyebrow">{project.category}</p>
      <h1>{project.title}</h1>
      <p className="lede">{project.summary}</p>
      <div className="project-detail-meta"><span>Status</span><strong>{project.status}</strong></div>
      <div className="project-detail-block">
        <p className="card-kicker">Focus areas</p>
        <ul>{project.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
    </section>
  );
}


import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { projects } from "../data";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <>
      <PageIntro eyebrow="Projects" title="Selected research projects." text="Ongoing work that combines methods development, health data, implementation questions, and practical decision tools." />
      <section className="shell section compact-top">
        <div className="project-cards">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} className="project-card" key={project.slug}>
              <p className="card-kicker">{project.category}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="project-card-bottom"><span>{project.status}</span><strong>View project →</strong></div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
